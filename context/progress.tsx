"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  SEED_URL,
  emptyProgress,
  loadLocal,
  mergeProgress,
  normalize,
  saveLocal,
  type ProgressData,
} from "@/lib/progress";

/** Batch rapid answer clicks into a single write-back request. */
const PUSH_DEBOUNCE_MS = 1500;

interface ProgressContextValue {
  progress: ProgressData;
  /** False until localStorage + the shipped seed have been reconciled. */
  ready: boolean;
  /** True when the host can persist the snapshot back to data/progress.json. */
  writable: boolean;
  lastSyncedAt: string | null;
  update: (fn: (prev: ProgressData) => ProgressData) => void;
  replaceAll: (data: ProgressData) => void;
  reset: () => void;
  flush: () => Promise<void>;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressData>(emptyProgress);
  const [ready, setReady] = useState(false);
  const [writable, setWritable] = useState(false);
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);

  const progressRef = useRef<ProgressData>(emptyProgress());
  const writableRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const push = useCallback(async (data: ProgressData, keepalive = false) => {
    if (!writableRef.current) return;

    try {
      const res = await fetch("/api/progress", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        keepalive,
      });

      if (!res.ok) return;

      const json = await res.json();

      if (json?.persisted) setLastSyncedAt(new Date().toISOString());
    } catch {
      // Offline or read-only host — localStorage already holds the progress.
    }
  }, []);

  const flush = useCallback(async () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    await push(progressRef.current);
  }, [push]);

  const commit = useCallback(
    (next: ProgressData) => {
      progressRef.current = next;
      setProgress(next);
      saveLocal(next);

      if (!writableRef.current) return;

      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        void push(progressRef.current);
      }, PUSH_DEBOUNCE_MS);
    },
    [push]
  );

  const update = useCallback(
    (fn: (prev: ProgressData) => ProgressData) => commit(fn(progressRef.current)),
    [commit]
  );

  const replaceAll = useCallback((data: ProgressData) => commit(normalize(data)), [commit]);

  const reset = useCallback(() => commit(emptyProgress()), [commit]);

  // Reconcile the three sources on mount: the static seed shipped with the
  // build, the snapshot the server holds on disk, and this browser's storage.
  useEffect(() => {
    let cancelled = false;

    async function fetchJson(url: string): Promise<unknown> {
      try {
        const res = await fetch(url, { cache: "no-store" });

        return res.ok ? await res.json() : null;
      } catch {
        return null;
      }
    }

    async function init() {
      const stored = loadLocal() ?? emptyProgress();
      const [seedRaw, apiRaw] = await Promise.all([fetchJson(SEED_URL), fetchJson("/api/progress")]);

      if (cancelled) return;

      const seed = seedRaw ? normalize(seedRaw) : emptyProgress();
      const api = apiRaw && typeof apiRaw === "object" ? apiRaw as Record<string, unknown> : null;
      const server = api ? normalize(api.progress) : emptyProgress();
      const canWrite = Boolean(api?.writable);

      // Fold in anything answered while these fetches were in flight, so a fast
      // click during load isn't overwritten by the snapshot we just pulled.
      const local = mergeProgress(stored, progressRef.current);

      // Local goes last so a browser that is ahead of the file wins ties.
      const merged = mergeProgress(mergeProgress(seed, server), local);

      writableRef.current = canWrite;
      progressRef.current = merged;
      setWritable(canWrite);
      setProgress(merged);
      saveLocal(merged);
      setReady(true);

      if (canWrite && merged.updatedAt > server.updatedAt) void push(merged);
    }

    void init();

    return () => {
      cancelled = true;
    };
  }, [push]);

  // Don't lose a debounced write when the tab is closed or backgrounded.
  useEffect(() => {
    function handlePageHide() {
      if (!timerRef.current) return;

      clearTimeout(timerRef.current);
      timerRef.current = null;
      void push(progressRef.current, true);
    }

    window.addEventListener("pagehide", handlePageHide);

    return () => {
      window.removeEventListener("pagehide", handlePageHide);
      handlePageHide();
    };
  }, [push]);

  return (
    <ProgressContext.Provider
      value={{ progress, ready, writable, lastSyncedAt, update, replaceAll, reset, flush }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);

  if (!ctx) throw new Error("useProgress must be used inside a ProgressProvider");

  return ctx;
}

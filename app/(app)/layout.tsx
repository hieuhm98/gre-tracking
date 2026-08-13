"use client";

import { ThemeProvider } from "@/context/theme";
import { LanguageProvider } from "@/context/lang";
import { ProgressProvider } from "@/context/progress";
import Sidebar from "@/components/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProgressProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-6 lg:p-8">{children}</main>
          </div>
        </ProgressProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

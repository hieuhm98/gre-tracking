# Git & Version Control

## 1. What is Version Control?

A **Version Control System (VCS)** is a system that tracks changes in code over time, allowing many people to work together and to roll back to previous versions.

**Git** is the most popular VCS today (free and open source).

---

## 2. Why do BAs/PMs need to know Git?

- To understand what developers are talking about in the daily standup.
- To read a **pull request** and review requirements.
- To understand why merging is needed before a release.
- To know when code has "gone to production".
- You don't need to know how to code, just the concepts.

---

## 3. Basic concepts

### Repository (Repo)
A store of code together with its full change history.
- **Local repo**: on the developer's machine.
- **Remote repo**: on a server (GitHub, GitLab, Bitbucket).

### Commit
A "snapshot" of the code at a specific point in time, including:
- A message describing the change.
- The author and a timestamp.
- A unique hash (e.g., `a1b2c3d`).

```
commit a1b2c3d
Author: Harry <harry@mail.com>
Date:   Mon Apr 8 10:00:00 2024
Message: feat: add login page
```

### Branch
A branch is an **independent** line of development. It's like making a copy to experiment with without affecting the main version.

```
main:     A──B──C──────────────M
                \             /
feature/login:   D──E──F──G──
```

- **main/master**: the main branch, usually the most stable code.
- **feature/xxx**: for developing a new feature.
- **hotfix/xxx**: for an emergency fix.

### Merge
Combining changes from one branch into another. When a feature is done → merge it into main.

### Clone
Creating a local copy of a remote repo.

### Pull / Push
- **Pull**: fetch the latest changes from the remote to local.
- **Push**: push local changes up to the remote.

---

## 4. Pull Request (PR) / Merge Request (MR)

A **Pull Request** is a request to merge code from a feature branch into the main branch — accompanied by a code review.

A typical workflow:

```
1. The developer creates a branch: feature/add-payment
2. Codes and commits
3. Pushes to the remote
4. Creates a Pull Request
5. A colleague reviews the code
6. The BA/PO reviews: does it meet the acceptance criteria?
7. Approve → Merge into main
8. Deploy
```

**BAs can take part**: reviewing the PR for business logic and checking whether the AC is implemented correctly.

---

## 5. Gitflow Workflow

```
main ─────────────────────────── (production)
  └── develop ──────────────────── (integration)
        ├── feature/login ──┐
        ├── feature/cart ───┤→ merge into develop
        └── feature/xxx ────┘
  └── release/1.0 ── (final testing) ── merge into main
  └── hotfix/bug123 ── (emergency fix) ── merge into main + develop
```

---

## 6. Basic Git commands (to understand, not necessarily to use)

```bash
git clone <url>       # download the repo
git pull              # fetch the latest changes
git checkout -b feature/login  # create and switch to a new branch
git add .             # stage changes
git commit -m "feat: add login"  # save a snapshot
git push              # push to the remote
git merge feature/login  # merge a branch into the current branch
git log               # view the commit history
```

---

## 7. GitHub, GitLab, Bitbucket

These are **Git repository hosting platforms**:

| Platform | Strengths |
|----------|-----------|
| GitHub | The most popular, with a large community |
| GitLab | Integrated CI/CD, self-hosted |
| Bitbucket | Integrates well with Jira (Atlassian) |

---

## 8. Summary

- **Git**: version control — tracking the history of the code.
- **Commit**: a snapshot of the code at a point in time.
- **Branch**: an independent line of development.
- **Pull Request**: a request to merge + review — where a BA can take part.
- **main/master**: the stable branch, usually = production.
- **Merge**: combining one branch into another.
- GitHub/GitLab/Bitbucket: platforms for storing and collaborating.

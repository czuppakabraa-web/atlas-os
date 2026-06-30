# SESSION START

Version: 1.0

---

# Purpose

This document is the operational handover between development sessions.

It contains only the information required to immediately continue development.

Every new development session starts by reading this file.

Every completed sprint updates this file.

---

# Project

Atlas OS

Operating System for the Human Body

---

# Current Status

Development Status

🟢 Active Development

Current Phase

Phase 1

Core Platform

Current Sprint

Sprint 1

Weight Core

---

# Current Objective

Build a complete Weight module.

The module must allow the user to:

- add weight
- edit weight
- delete weight
- browse history
- display statistics
- synchronize with Supabase

No UI redesign is planned during this sprint.

---

# Current Stack

Frontend

- React Native
- Expo
- TypeScript

Backend

- Supabase

Database

- PostgreSQL

Authentication

- Supabase Auth

AI

- OpenAI

Repository

Git + GitHub

---

# Current Architecture

Application

↓

Services

↓

Lib

↓

Supabase

↓

Database

Business logic belongs inside Services.

Database communication belongs inside Lib.

UI only displays data.

---

# Current Project Health

Git

✅ Ready

GitHub

✅ Connected

TypeScript

✅ Clean

Expo

✅ Running

Supabase

✅ Connected

Authentication

✅ Working

AI

✅ Working

Project

✅ Stable

---

# Completed

Infrastructure

Git

GitHub

TypeScript

Supabase

Theme

Authentication

Navigation

OpenAI Integration

Meal Analysis

Meal Persistence

Dashboard

Documentation v1

---

# Active Sprint

Sprint

Weight Core

Tasks

□ Create body_weights table

□ Weight model

□ Weight service

□ Weight repository

□ Add weight screen

□ Edit weight

□ Delete weight

□ Weight history

□ Charts

□ Statistics

□ Dashboard integration

Definition of Done

✓ Feature complete

✓ TypeScript clean

✓ Expo runs

✓ Git commit

✓ Git push

✓ Documentation updated

---

# Immediate Next Task

Implement Weight Core.

Nothing else.

No UI polish.

No architecture changes.

No refactoring.

Only Weight Core.

---

# Upcoming Sprints

Sprint 2

Apple Health

Sprint 3

Nutrition Improvements

Sprint 4

Analytics Engine

Sprint 5

Atlas AI

Sprint 6

Additional Health Modules

Sprint 7

UI Polish

---

# Development Workflow

Every session follows exactly the same sequence.

1. Read SESSION_START.md

2. Read CURRENT_STATE.md

3. Complete current sprint

4. Verify TypeScript

5. Verify Expo

6. Commit

7. Push

8. Update documentation

9. Finish session

---

# Mandatory Rules

Never leave the project in a broken state.

Never leave TypeScript errors.

Never leave failing builds.

Never skip documentation updates.

Never start a new sprint before finishing the current one.

---

# Reference Documents

PROJECT_BIBLE.md

ARCHITECTURE.md

DATABASE.md

API.md

DEVELOPMENT_RULES.md

STYLE_GUIDE.md

ROADMAP.md

CURRENT_STATE.md

DECISIONS.md

CHANGELOG.md

BACKLOG.md

---

# Success Condition

At the beginning of every new session, a developer should be able to read this document and immediately know:

- where the project is,
- what has already been completed,
- what the current sprint is,
- what the next task is,
- what must not be changed,
- how to continue development without additional explanation.
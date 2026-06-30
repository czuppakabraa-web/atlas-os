# DEVELOPMENT RULES

Version: 1.0

---

# Purpose

This document defines the mandatory development standards for Atlas OS.

Every contributor must follow these rules.

No exceptions without updating this document.

---

# Rule #1

The application must compile.

No feature is considered finished if the project does not compile.

Required before every commit:

- Expo starts
- TypeScript passes
- No runtime crashes

---

# Rule #2

Main branch is always stable.

Never leave main in a broken state.

Large refactors should be completed before merging.

---

# Rule #3

Core before UI.

Priority order:

1. Architecture
2. Database
3. Services
4. Logic
5. Testing
6. UI
7. Animations

Visual polish never blocks core functionality.

---

# Rule #4

One responsibility.

Every file should have one responsibility.

Examples

Good

WeightService

Bad

WeightService + Nutrition + Analytics

---

# Rule #5

Business logic never belongs inside UI.

Allowed

Screen

↓

Service

↓

Database

Forbidden

Screen

↓

Database

Forbidden

Component

↓

OpenAI

Forbidden

Component

↓

Supabase

---

# Rule #6

Services own the logic.

Examples

Calculate totals

Import Apple Health

Prepare AI prompts

Generate reports

Transform database objects

Validate data

Everything belongs inside services.

---

# Rule #7

Lib owns external communication.

Only lib communicates with:

Supabase

Storage

Authentication

Future APIs

Services never contain SDK configuration.

---

# Rule #8

Components display.

Components do not calculate.

Components do not fetch.

Components receive props.

Nothing more.

---

# Rule #9

One source of truth.

Never duplicate information.

Weight exists once.

Meals exist once.

Profile exists once.

---

# Rule #10

English only.

Everything inside the codebase must be written in English.

Variable names

Functions

Files

Database

Documentation

Comments

Everything.

---

# Rule #11

Naming

Components

PascalCase

Example

WeightCard.tsx

Services

camelCase filename

Example

weight.ts

Hooks

useSomething.ts

Example

useWeight.ts

Types

PascalCase

Example

Meal.ts

---

# Rule #12

Folder ownership

app/

Screens

components/

UI

services/

Business Logic

lib/

Database

theme/

Design System

types/

Interfaces

docs/

Documentation

---

# Rule #13

Imports

Prefer absolute imports.

Example

import SystemCard from "@/components/cards/SystemCard";

Avoid long relative chains whenever possible.

---

# Rule #14

State

Prefer local state.

Only introduce global state when necessary.

Current strategy

React Hooks

Future

Zustand

Redux is not planned.

---

# Rule #15

Documentation

Every completed sprint updates:

CURRENT_STATE.md

CHANGELOG.md

If architecture changes:

ARCHITECTURE.md

If database changes:

DATABASE.md

---

# Rule #16

Git

One logical feature

↓

One commit

Commit messages

feat:

fix:

docs:

refactor:

style:

Example

feat: add weight history

fix: nutrition totals

docs: update roadmap

---

# Rule #17

Definition of Done

A task is complete only if:

✓ Code written

✓ Project compiles

✓ No TypeScript errors

✓ Feature tested

✓ Git commit created

✓ Documentation updated

✓ GitHub pushed

---

# Rule #18

Technical Debt

Do not leave TODOs without creating a backlog item.

Temporary code must have a removal plan.

---

# Rule #19

Performance

Avoid unnecessary renders.

Avoid duplicated API calls.

Avoid duplicated calculations.

Cache expensive operations when possible.

---

# Rule #20

Architecture First

Whenever implementing something new ask:

Who owns this responsibility?

If more than one answer exists,

the architecture should be improved before coding.

---

# Sprint Workflow

Every sprint follows the same sequence.

Planning

↓

Implementation

↓

Testing

↓

TypeScript

↓

Commit

↓

Push

↓

Documentation

↓

Next Sprint

No sprint ends before all steps are complete.

---

# Final Principle

Atlas OS is a long-term software project.

Every decision should optimize:

maintainability

clarity

stability

scalability

over speed.

Shortcuts are acceptable only if they do not increase long-term complexity.
# ARCHITECTURE

Version: 2.0

Last Updated: 2026-06-30

---

# Purpose

This document defines the architectural rules of Atlas OS.

Its purpose is to ensure that every new feature follows the same design principles, regardless of when it is implemented.

Atlas is designed as an **Operating System for the Human Body**, not as a collection of independent screens.

---

# Vision

Atlas OS is a modular platform that unifies nutrition, body composition, health, training, sleep and artificial intelligence into one coherent system.

Architecture consistency has higher priority than implementation speed.

---

# Core Principles

1. Architecture before features.
2. Modules before screens.
3. Reuse before duplication.
4. Business logic never belongs inside UI.
5. Every responsibility has exactly one owner.
6. Every sprint ends with a stable build.

---

# System Overview

```text
User
   │
Atlas Navigator
   │
AtlasShell
   │
Module
   │
Screen
   │
Components
   │
Services
   │
Lib
   │
Supabase / OpenAI
```

---

# Core Components

## AtlasShell

Responsibilities

- Safe Area
- Global background
- Shared layout
- Global Atlas Navigator
- Common application container

Every module must be rendered inside AtlasShell.

---

## Atlas Navigator

Single global navigation component.

Responsibilities

- Open/close navigation panel
- Navigate between modules
- Use module registry
- Highlight active module (future)

Navigation logic must never be duplicated inside modules.

---

## Module Registry

Location

```text
components/navigator/modules.ts
```

Responsibilities

- Register every module
- Module title
- Glyph
- Route
- Metadata

Single source of truth for navigation.

---

# Module Architecture

Every module follows the same structure.

```text
Module

↓

AtlasShell

↓

Screen

↓

Module Components

↓

Services

↓

Lib

↓

Supabase
```

Example:

```text
Nutrition

Screen

Components

Services

Lib
```

---

# Layers

## UI

Location

```text
app/
```

Responsibilities

- Routing
- Layout
- User interaction

Must never contain business logic.

---

## Components

Location

```text
components/
```

Responsibilities

Reusable presentation.

Components never load data.

Components never call Supabase.

Components never call OpenAI.

---

## Design System

Location

```text
components/system/
```

Reusable components shared by every module.

Current components

- SystemText
- SystemHeading
- SystemStatus
- SystemDivider
- SystemSection

Future components

- SystemMetrics
- SystemPanel
- SystemButton
- SystemDialog
- SystemTimeline

Rule:

Before creating a module-specific component ask:

"Can this become a System component?"

If yes, it belongs here.

---

## Services

Location

```text
services/
```

Responsibilities

- Business rules
- Validation
- Calculations
- Data aggregation
- AI prompt preparation

Services never render UI.

---

## Lib

Location

```text
lib/
```

Responsibilities

- Database access
- Authentication
- API wrappers

No business logic.

---

## Database

Supabase is the source of truth for persisted user data.

---

# Data Flow

```text
UI

↓

Service

↓

Lib

↓

Supabase

↓

Service

↓

UI
```

---

# AI Flow

```text
User

↓

Service

↓

OpenAI

↓

Structured Response

↓

Database

↓

UI
```

UI never communicates directly with OpenAI.

---

# Folder Structure

```text
app/
assets/
components/
docs/
hooks/
lib/
services/
supabase/
theme/
types/
```

Every folder has exactly one responsibility.

---

# Naming Conventions

Modules

- Dashboard
- Nutrition
- Body
- Training
- Health
- Sleep
- Identity
- Settings
- AI Coach

Reusable components

```text
System*
```

Module components

```text
Nutrition*
Body*
Health*
```

Services

```text
nutrition.ts
body.ts
health.ts
```

---

# Dependency Rules

Allowed

```text
UI
↓
Components
↓
Services
↓
Lib
↓
Supabase
```

Forbidden

- UI → Database
- UI → OpenAI
- Components → Database
- Components → OpenAI

---

# Development Rules

Every new module must:

- Use AtlasShell
- Register inside modules.ts
- Reuse Design System components
- Keep business logic inside Services
- Keep persistence inside Lib

---

# Scalability

New modules should be added without modifying the architecture.

Expected future modules:

- Recovery
- Hydration
- Supplements
- Medication
- Mood
- Stress
- Wearables
- Reports
- Desktop Client
- Web Dashboard

---

# Definition of Done

A feature is complete only when:

- Build succeeds
- TypeScript is clean
- Documentation is updated
- Architecture rules are respected
- No duplicated business logic is introduced

---

# Final Principle

Whenever implementing a feature, ask:

**"Which layer owns this responsibility?"**

If the answer is unclear, the implementation should be redesigned before writing code.

# ARCHITECTURE

Version: 1.0

---

# Purpose

This document describes the architecture of Atlas OS.

The objective is to keep the application modular, maintainable and scalable for many years of development.

Every new feature should fit into this architecture.

---

# High Level Architecture

```
                 OpenAI
                    │
                    │
             AI Analysis Layer
                    │
                    ▼
             Business Services
                    │
                    ▼
        Supabase Database & Auth
                    ▲
                    │
          React Native Application
                    │
                    ▼
               User Interface
```

The UI never communicates directly with OpenAI.

The UI should also avoid direct communication with Supabase whenever possible.

Business logic belongs inside the Services layer.

---

# Application Layers

Atlas is divided into five logical layers.

```
UI

↓

Screens

↓

Components

↓

Services

↓

Database
```

Each layer has exactly one responsibility.

---

# Layer Responsibilities

## 1. UI Layer

Location

```
app/
```

Responsibilities

- Navigation
- Screen layout
- User interactions
- Displaying data

Never:

- Calculate business logic
- Perform AI analysis
- Query the database directly

---

## 2. Components

Location

```
components/
```

Responsibilities

Reusable UI elements.

Examples

SystemCard

PrimaryButton

Metric

NutritionRow

AtlasHeader

Rules

Components never know where data comes from.

They only display data.

---

## 3. Services

Location

```
services/
```

Responsibilities

Business logic.

Examples

overview.ts

nutrition.ts

dashboard.ts

Future

weight.ts

activity.ts

analytics.ts

ai.ts

Rules

Services:

- load data
- validate data
- calculate totals
- prepare charts
- prepare AI prompts

No UI code.

---

## 4. Data Layer

Location

```
lib/
```

Responsibilities

Communication with Supabase.

Examples

auth.ts

profile.ts

weights.ts

meals.ts

Rules

Every database operation belongs here.

No UI.

---

## 5. Database

Location

Supabase

Responsibilities

Store user data.

Rules

Database never contains presentation logic.

---

# Folder Structure

```
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

---

# Folder Description

## app/

Application screens.

Examples

Home

Nutrition

Weight

Profile

Authentication

---

## components/

Reusable visual components.

Should never contain business logic.

---

## services/

Application logic.

Responsible for transforming raw database data into meaningful information.

---

## lib/

Database layer.

Contains all Supabase queries.

---

## theme/

Design system.

Contains

Colors

Spacing

Typography

Future

Animations

Icons

---

## types/

Shared interfaces.

Examples

Meal

Weight

Profile

Overview

---

## hooks/

Reusable React hooks.

No business logic.

---

## assets/

Images

Icons

Fonts

---

## docs/

Project documentation.

---

## supabase/

Backend configuration.

Contains

Functions

Migrations

Configuration

---

# Module Architecture

Every feature should follow exactly the same structure.

Example

```
Weight

↓

Screen

↓

Service

↓

Database

↓

UI
```

Example

```
Nutrition

↓

Screen

↓

Service

↓

Supabase

↓

AI
```

---

# Data Flow

Example

```
User

↓

Nutrition Screen

↓

Nutrition Service

↓

Supabase

↓

Meal Data

↓

Nutrition Service

↓

Totals

↓

UI
```

AI follows a similar pattern.

```
User

↓

Meal Photo

↓

OpenAI

↓

Structured Meal

↓

Database

↓

UI
```

---

# State Management

Current

React Hooks

Future

If necessary

Zustand

No Redux unless absolutely required.

---

# Error Handling

Every service should throw meaningful errors.

UI displays user-friendly messages.

No raw exceptions should reach the interface.

---

# Logging

Future logging should support:

API failures

Database failures

AI failures

Synchronization failures

---

# Dependency Rules

Allowed

```
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

```
Component

↓

Supabase
```

Forbidden

```
Component

↓

OpenAI
```

Forbidden

```
UI

↓

Database
```

---

# Coding Rules

Business logic

↓

Services

Database

↓

Lib

Presentation

↓

Components

Navigation

↓

App

---

# Scalability

Atlas is designed to support future modules without architecture changes.

Future modules

Body Measurements

Blood Pressure

Heart Rate

Medication

Supplement Tracking

Sleep

Hydration

Workout Planner

Coach AI

Wearables

Reports

Export

Widgets

Desktop Client

Web Dashboard

---

# Core Principle

Whenever implementing a feature ask:

"Which layer owns this responsibility?"

If the answer is unclear,

the architecture is probably wrong.

Every responsibility must have exactly one owner.
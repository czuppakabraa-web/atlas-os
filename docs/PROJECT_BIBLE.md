# PROJECT BIBLE

Version: 1.1

Status: Active

Project: Atlas OS

---

# 1. Vision

Atlas OS is an Operating System for the Human Body.

The goal of Atlas is not to become another calorie counter, workout tracker or health application.

The goal is to build one intelligent platform that understands the user's body, analyzes every available health signal, predicts future trends and actively helps improve health and performance.

Atlas should become the place where every important health metric is collected, connected and explained.

The application should eventually replace multiple independent applications such as:

- MyFitnessPal
- Fitatu
- Apple Health
- Garmin Connect (partially)
- Strong
- Water trackers
- Supplement trackers
- AI nutrition assistants

Atlas should become the central operating system for personal health.

---

# 2. Mission

Help people make better health decisions using data instead of emotions.

Atlas should answer questions like:

- Why did my weight increase?
- Why am I tired today?
- Why did my strength decrease?
- Am I eating enough protein?
- Which habits improve my sleep?
- How is my body changing over time?
- What should I do today?

Instead of simply presenting charts,

Atlas should explain them.

---

# 3. Philosophy

Atlas is built around six principles.

## 3.1 Architecture before Features

Architecture has higher priority than feature quantity.

A stable foundation allows Atlas to grow for many years without major rewrites.

---

## 3.2 One Source of Truth

Every metric exists only once.

There is only one body weight.

One nutrition history.

One activity history.

One user profile.

Every module shares the same data.

---

## 3.3 AI Explains Data

AI never invents information.

AI analyzes real user data.

Every recommendation must be explainable.

Every conclusion must be supported by measurable metrics.

---

## 3.4 Manual Data Wins

Manual user input always has priority over imported values.

Imported data should never overwrite user corrections.

---

## 3.5 Simplicity

Atlas removes complexity.

Every module answers one clear question.

Never overwhelm the user.

---

## 3.6 Consistency

Every module should feel like part of one operating system.

Navigation, layout, typography and interaction patterns must remain consistent across the entire application.

---

# 4. Product Goals

Atlas should allow the user to:

- monitor health
- monitor body composition
- monitor nutrition
- monitor training
- monitor recovery
- monitor sleep
- monitor habits
- receive AI analysis
- receive predictions
- receive recommendations

without switching between multiple applications.

---

# 5. Long-Term Vision

Atlas should become an intelligent digital health assistant.

The user should eventually interact with Atlas naturally.

Examples:

> Why didn't I lose weight this week?

> Should I eat more protein?

> Why is my recovery worse?

> What should I improve today?

Every answer should be generated using historical user data.

---

# 6. Atlas Core

Atlas OS is built around a small number of core systems.

These systems form the foundation of every future module.

Current core systems:

- AtlasShell
- Atlas Navigator
- Module Registry
- Design System
- Services Layer
- Database Layer

These components are considered stable architecture.

Future modules should reuse them instead of replacing them.

---

# 7. Module Philosophy

Atlas is composed of independent modules.

Examples:

- Dashboard
- Nutrition
- Body
- Training
- Health
- Sleep
- AI Coach
- Identity
- Settings

Every module:

- uses AtlasShell
- is reachable through Atlas Navigator
- uses the Design System
- owns its own business logic
- follows the same architecture

Modules should evolve independently without affecting the rest of the application.

---

# 8. Design System Philosophy

Atlas should never become a collection of unrelated UI components.

Before creating a new component always ask:

**Can this become a reusable System component?**

If yes,

it belongs inside:

```
components/system/
```

Module-specific UI should only exist when reuse is impossible.

---

# 9. Architecture Philosophy

Responsibilities are clearly separated.

UI displays data.

Components render data.

Services calculate data.

Lib communicates with external systems.

Supabase stores data.

AI analyzes data.

Every layer owns exactly one responsibility.

---

# 10. Technology Stack

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

Storage

- Supabase Storage

---

# 11. Development Standards

Every completed development session must satisfy:

- Project compiles
- Expo starts
- TypeScript is clean
- Git commit created
- GitHub synchronized
- Documentation updated

No sprint ends with a broken application.

---

# 12. Git Workflow

The main branch is always stable.

Every feature starts from a working project.

Large refactors never leave the application broken.

Every sprint finishes with:

Working Application

↓

Commit

↓

Push

↓

Documentation Update

↓

Backup

---

# 13. User Experience

Atlas should feel like:

**Operating System**

not

**Mobile Application**

The interface should be:

- minimal
- technical
- precise
- calm
- fast

Animations should support usability,

never distract from it.

---

# 14. Design Language

Main inspirations:

- Blade Runner
- Ghost in the Shell
- NASA Mission Control
- Modern aircraft HUD
- Professional monitoring software

Atlas deliberately avoids:

- Material Design look
- Social media design
- Gamification
- Decorative UI

Atlas is a productivity system.

---

# 15. Development Rules

Before implementing any feature ask:

1. Which module owns this feature?
2. Which layer owns this responsibility?
3. Can an existing System component be reused?
4. Does this introduce duplicated logic?
5. Does this improve Atlas as a whole?

If any answer is unclear,

the implementation should be reconsidered.

---

# 16. Definition of Success

Atlas succeeds when the user no longer needs several independent applications.

Atlas becomes the single source of truth for:

- nutrition
- body composition
- health
- training
- recovery
- sleep
- AI insights
- long-term progress
- daily decision making

Atlas is not built to count calories.

Atlas is built to understand the human body.

---

# 17. Final Principle

Whenever a technical or product decision is made, ask one question:

> **Does this improve Atlas OS as an Operating System for the Human Body?**

If the answer is **no**,

the feature probably does not belong inside Atlas.

This principle has priority over convenience, speed of implementation and short-term feature growth.
# PROJECT BIBLE

Version: 1.0
Status: Active
Project: Atlas OS

---

# 1. Vision

Atlas OS is a personal operating system for the human body.

The goal of Atlas is not to become another calorie counter, workout tracker or health application.

The goal is to build one intelligent platform that understands the user's body, analyzes every available health signal, predicts future trends and actively helps improve health and performance.

Atlas should become the place where every important health metric is collected, connected and explained.

The application should eventually replace multiple separate applications such as:

- MyFitnessPal
- Fitatu
- Apple Health
- Garmin Connect (partially)
- Strong
- Happy Scale
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

Instead of simply presenting charts, Atlas should explain them.

---

# 3. Philosophy

Atlas is built around five principles.

## 3.1 Core before UI

Functionality is always implemented before visual improvements.

The application must always work correctly before looking beautiful.

---

## 3.2 One source of truth

Every metric exists only once.

There is only one body weight.

One nutrition history.

One activity history.

One user profile.

All modules use the same data.

---

## 3.3 AI explains data

AI never invents information.

AI only analyzes real user data.

Every recommendation must be based on measurable metrics.

---

## 3.4 Manual data always wins

If the user manually edits imported data,

manual value becomes the source of truth.

Imported values never overwrite manual corrections.

---

## 3.5 Simplicity

Atlas should remove complexity.

Every screen must answer one question.

Never overwhelm the user.

---

# 4. Product Goals

Atlas must allow the user to:

- monitor health
- monitor body composition
- monitor nutrition
- monitor activity
- monitor sleep
- monitor habits
- receive AI analysis
- receive predictions
- receive recommendations

without switching between multiple applications.

---

# 5. Long Term Vision

Atlas should become an intelligent digital health assistant.

The user should eventually interact with Atlas naturally.

Examples:

"Why didn't I lose weight this week?"

"Should I eat more protein?"

"What should I improve?"

"Why is my sleep worse?"

The AI should answer using real historical data.

---

# 6. Core Modules

Current planned modules:

Authentication

Profile

Dashboard

Nutrition

Weight

Body Measurements

Activity

Workouts

Apple Health

Health Connect

Sleep

Hydration

Supplements

Analytics

Atlas AI

Settings

Notifications

Reports

---

# 7. Architecture Philosophy

Business logic never lives inside UI components.

Screens display data.

Services calculate data.

Supabase stores data.

AI analyzes data.

Components display data.

Every layer has one responsibility.

---

# 8. Technology Stack

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

Charts

- React Native chart library (TBD)

Storage

- Supabase Storage

---

# 9. Development Principles

Every completed session must satisfy:

✓ Project compiles

✓ Expo starts

✓ No TypeScript errors

✓ Git commit created

✓ GitHub updated

No session ends with a broken application.

---

# 10. Git Workflow

main branch is always stable.

Every feature starts from a working project.

Large refactors should never leave the project broken.

Every sprint finishes with:

Working application

↓

Commit

↓

Push

↓

Documentation update

---

# 11. User Experience

Atlas should feel like:

Operating System

not

Mobile App.

The interface should be:

minimal

technical

precise

calm

fast

without unnecessary animations.

Animations should support usability, never distract.

---

# 12. Design Language

Main inspirations:

Blade Runner

Ghost in the Shell

NASA Mission Control

Modern aircraft HUD

Professional monitoring software

No Material Design look.

No social media look.

No gamification.

Atlas is a productivity tool.

---

# 13. Core Rule

Whenever a decision is made, ask:

"Does this improve the operating system?"

If the answer is no,

it probably does not belong inside Atlas.

---

# 14. Definition of Success

Atlas succeeds when the user no longer needs several health applications.

The application becomes the single source of truth for:

nutrition

weight

activity

sleep

health

AI insights

future predictions

daily decision making

Atlas is not built to count calories.

Atlas is built to understand the human body.
# API

Version: 1.0

---

# Purpose

This document describes every external integration used by Atlas OS.

Atlas follows one simple rule:

The application communicates only with trusted services.

Every external API must have a clearly defined responsibility.

---

# API Architecture

```
React Native

↓

Services

↓

Lib

↓

External API
```

UI never communicates with APIs directly.

---

# External Services

Current

- Supabase
- OpenAI

Planned

- Apple Health
- Health Connect

Future

- Garmin Connect
- Oura
- Whoop
- Polar
- Fitbit

---

# Supabase

Purpose

Primary backend.

Responsibilities

- Authentication
- PostgreSQL database
- Storage
- Edge Functions
- Row Level Security

Atlas communicates with Supabase using the official SDK.

---

# Authentication

Provider

Supabase Auth

Supported

- Email
- Password

Future

- Apple Sign In
- Google Sign In

Rules

Every request must belong to an authenticated user.

Anonymous users are not supported.

---

# Database API

Communication

React Native

↓

lib/

↓

Supabase

↓

PostgreSQL

No screen accesses the database directly.

Every query goes through the data layer.

---

# Storage

Purpose

Store user files.

Examples

Meal photos

Progress photos

Future reports

Documents

---

# Edge Functions

Purpose

Execute secure backend logic.

Current

Meal AI Analysis

Future

Weekly reports

Coach AI

Notifications

Analytics

Edge Functions protect secrets.

OpenAI keys are never stored inside the mobile application.

---

# OpenAI

Purpose

Nutrition analysis

Future

Coach AI

Daily recommendations

Weekly reports

Predictions

---

# AI Rules

AI never stores data.

AI never authenticates users.

AI never becomes the source of truth.

AI analyzes.

The database stores.

---

# Meal Analysis Flow

```
User

↓

Take Photo

↓

OpenAI

↓

Structured JSON

↓

Supabase

↓

Database

↓

UI
```

---

# Apple Health

Status

Planned

Purpose

Import health metrics.

Supported metrics

Weight

Calories

Steps

Exercise

Sleep

Heart Rate

Distance

Active Energy

Basal Energy

Rules

Imported data never overwrites manual edits.

---

# Health Connect

Status

Planned

Android equivalent of Apple Health.

Supported metrics should remain identical whenever possible.

---

# Garmin

Future

Import

Activities

Heart Rate

Training Load

VO2 Max

Sleep

---

# Oura

Future

Import

Sleep

Readiness

Recovery

Temperature

HRV

---

# Whoop

Future

Import

Recovery

Sleep

Strain

HRV

Resting Heart Rate

---

# Fitbit

Future

Import

Weight

Sleep

Heart Rate

Calories

Steps

---

# API Security

Rules

No API keys inside React Native.

Secrets belong only on the backend.

All sensitive operations execute inside Edge Functions.

---

# Error Handling

Every request returns one of:

Success

Validation Error

Authentication Error

Network Error

Unexpected Error

UI never displays raw server errors.

---

# Retry Strategy

Temporary failures

↓

Automatic retry

Permanent failures

↓

User notification

---

# Rate Limits

Atlas should avoid unnecessary requests.

Preferred strategy

Load once

Cache

Refresh only when required

---

# Offline Strategy

Future

If offline

↓

Store locally

↓

Synchronize later

---

# Versioning

Every API integration must support versioning.

Breaking changes must never silently affect the application.

---

# Core Principle

External APIs provide data.

Atlas owns the user experience.

Atlas owns the business logic.

Atlas owns the decisions.
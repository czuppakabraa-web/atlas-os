# DATABASE

Version: 1.0

---

# Purpose

This document defines the complete database architecture of Atlas OS.

Every table must have a clear responsibility.

No duplicated information.

No presentation logic.

The database is the single source of truth.

---

# Database Engine

Provider

Supabase

Database

PostgreSQL

Authentication

Supabase Auth

Storage

Supabase Storage

---

# General Rules

Every table must:

- use UUID primary keys
- use created_at
- use updated_at (when applicable)
- reference auth.users(id)
- use Row Level Security

---

# Tables

Current

profiles

meals

body_weights

Future

activities

sleep

hydration

supplements

measurements

goals

notifications

reports

settings

---

# profiles

Purpose

Stores user profile information.

Columns

id (UUID)

email

name

gender

birth_date

height_cm

target_weight

activity_level

created_at

updated_at

Rules

One profile per user.

---

# meals

Purpose

Stores every nutrition entry.

Columns

id

user_id

description

calories

protein

carbs

fat

meal_time

created_at

updated_at

Rules

Meals are chronological.

There are NO breakfast, lunch or dinner categories.

Every meal is simply another nutrition entry.

---

# body_weights

Purpose

Stores body weight history.

Columns

id

user_id

weight

measured_at

source

notes

created_at

Sources

Manual

Apple Health

Health Connect

Future

Smart Scale

---

# activities

Status

Future

Purpose

Stores imported or manual activities.

Columns

id

user_id

type

duration

distance

calories

average_hr

max_hr

source

created_at

---

# sleep

Status

Future

Purpose

Stores sleep sessions.

Columns

id

user_id

start_time

end_time

duration

quality

source

created_at

---

# hydration

Status

Future

Purpose

Water intake.

Columns

id

user_id

amount_ml

logged_at

created_at

---

# supplements

Status

Future

Purpose

Track supplement intake.

Columns

id

user_id

name

dose

taken_at

created_at

---

# measurements

Status

Future

Purpose

Track body measurements.

Examples

Chest

Waist

Neck

Arms

Legs

Body Fat

Muscle Mass

---

# goals

Purpose

Stores active user goals.

Examples

Lose weight

Gain muscle

Maintain

Improve sleep

Increase protein

---

# notifications

Future reminders.

Examples

Drink water

Weigh yourself

Take supplements

Workout

Sleep

---

# reports

Stores generated AI reports.

Examples

Weekly

Monthly

Nutrition

Training

Health

---

# settings

Stores user preferences.

Theme

Units

Language

Notification preferences

Privacy

AI settings

---

# Relationships

auth.users

↓

profiles

↓

body_weights

↓

meals

↓

activities

↓

sleep

↓

hydration

↓

supplements

↓

reports

Everything belongs to one user.

---

# Data Ownership

Every record belongs to exactly one user.

No shared records.

No anonymous data.

---

# Import Sources

Manual

Apple Health

Health Connect

OpenAI

Future

Garmin

Whoop

Oura

Polar

Fitbit

---

# Synchronization Rules

Imported data never deletes manual data.

Manual edits always win.

Imported values may update only imported values.

---

# Row Level Security

Every table uses RLS.

Users may only access their own records.

No cross-user access.

---

# Backups

Database backups are handled by Supabase.

Application never manages database backups directly.

---

# Future Expansion

Database is designed to support:

Apple Watch

Wearables

Medical devices

Laboratory results

Blood pressure

Heart rate variability

Continuous glucose monitoring

Coach AI

Without changing the existing architecture.

---

# Core Principle

One fact.

One table.

One owner.

One source of truth.
# DECISIONS

Version: 1.0

Purpose

This document stores every architectural and product decision made during the development of Atlas OS.

Every important decision must be documented.

If a future discussion asks "why was this implemented like this?", the answer should already exist here.

---

# Decision 001

Date

2026-06-30

Title

Core Before UI

Status

Accepted

Description

The project prioritizes architecture, business logic and data integrity over visual improvements.

Reason

Changing UI is easy.

Changing architecture later is expensive.

Impact

Every sprint must implement functionality first.

Visual polish comes only after the feature is complete.

---

# Decision 002

Date

2026-06-30

Title

Chronological Nutrition

Status

Accepted

Description

Meals are stored chronologically.

Breakfast, Lunch and Dinner do not exist as database concepts.

Reason

Real eating behavior is irregular.

Many users eat snacks, protein shakes, fruit or yogurt throughout the day.

Artificial categories complicate the system.

Impact

Nutrition is displayed as a timeline or table sorted by time.

---

# Decision 003

Date

2026-06-30

Title

Supabase Backend

Status

Accepted

Description

Supabase is the primary backend.

Responsibilities

Authentication

Database

Storage

Edge Functions

Reason

Simple architecture.

Fast development.

Native PostgreSQL.

---

# Decision 004

Date

2026-06-30

Title

React Native + Expo

Status

Accepted

Description

Atlas is developed using React Native and Expo.

Reason

Single codebase.

Fast iteration.

Excellent ecosystem.

---

# Decision 005

Date

2026-06-30

Title

TypeScript Everywhere

Status

Accepted

Description

Every application file must use TypeScript.

Reason

Better maintainability.

Better refactoring.

Better tooling.

---

# Decision 006

Date

2026-06-30

Title

Business Logic Layer

Status

Accepted

Description

Business logic belongs only inside Services.

Reason

UI must remain simple.

Components should only display information.

---

# Decision 007

Date

2026-06-30

Title

Database Layer

Status

Accepted

Description

All communication with Supabase goes through lib/.

Reason

Screens should never know how the database works.

---

# Decision 008

Date

2026-06-30

Title

Single Source of Truth

Status

Accepted

Description

Every piece of information exists only once.

Examples

Weight

Meals

Profile

Goals

Reason

Avoid synchronization issues.

---

# Decision 009

Date

2026-06-30

Title

Manual Data Priority

Status

Accepted

Description

Manual user edits always override imported values.

Reason

The user always has the final authority.

---

# Decision 010

Date

2026-06-30

Title

AI Is Advisory

Status

Accepted

Description

AI analyzes.

AI recommends.

AI never becomes the source of truth.

Reason

Health data must remain deterministic.

---

# Decision 011

Date

2026-06-30

Title

Dark Theme First

Status

Accepted

Description

Atlas is designed primarily for dark mode.

Reason

Long-term usability.

Professional appearance.

Reduced eye strain.

---

# Decision 012

Date

2026-06-30

Title

Technical Interface

Status

Accepted

Description

The interface resembles professional monitoring software instead of a consumer fitness application.

Reason

Atlas is a productivity tool.

Not entertainment.

---

# Decision 013

Date

2026-06-30

Title

Stable Main Branch

Status

Accepted

Description

The main branch must always compile.

Reason

Every commit must represent a usable project state.

---

# Decision 014

Date

2026-06-30

Title

Sprint Workflow

Status

Accepted

Workflow

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

Reason

Predictable development process.

---

# Decision 015

Date

2026-06-30

Title

Documentation Is Part Of Development

Status

Accepted

Description

A feature is not complete until documentation is updated.

Required

CURRENT_STATE.md

CHANGELOG.md

Relevant technical documentation

---

# Future Decisions

Every major architectural or product decision must be appended below.

Existing decisions are never rewritten.

If a decision changes:

- Create a new decision.
- Reference the previous one.
- Explain the reason for the change.

This preserves the complete architectural history of Atlas OS.
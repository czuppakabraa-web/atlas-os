# CHANGELOG

All notable changes to Atlas OS are documented in this file.

The project follows Semantic Versioning.

---

# Version 0.1.1

Date

2026-06-30

Status

Released

Purpose

Architecture Update

---

## Atlas Core

- Introduced AtlasShell as the global application container.
- Introduced Atlas Navigator.
- Added animated navigation panel.
- Added global floating navigation glyph.
- Introduced module registry (`modules.ts`).
- Introduced modular application routing.
- Added global module navigation available from every screen.

---

## Architecture

- Started migration from screen-based architecture to module-based architecture.
- Introduced module folders for future expansion.
- Established AtlasShell as the standard application container.
- Introduced the foundation of the Atlas Design System.
- Refactored project structure for long-term scalability.

---

## Design System

Added reusable system components:

- SystemText
- SystemHeading
- SystemStatus
- SystemDivider
- SystemSection

Future UI should reuse system components before creating module-specific components.

---

## Navigation

Completed:

- Dashboard navigation
- Nutrition navigation
- Profile navigation

Atlas Navigator is now available globally across the application.

---

## Nutrition

- Dashboard separated from Nutrition.
- Nutrition migrated to AtlasShell.
- Nutrition navigation refactored.
- Prepared Nutrition module for Design System migration.

---

## Modules

Created the initial module structure for:

- Dashboard
- Nutrition
- Body
- Training
- Health
- Sleep
- AI Coach
- Identity
- Settings

Placeholder modules were added to establish the future application architecture.

---

## Documentation

Updated project documentation to reflect the new architecture.

Added:

- Sprint documentation
- Updated Current State
- Updated Architecture
- Updated Roadmap

---

## Notes

Version 0.1.1 represents the architectural transition of Atlas OS.

No major end-user functionality was introduced.

This release establishes the long-term foundation for future development.

---

# Version 0.1.0

Date

2026-06-30

Status

Released

## Infrastructure

- Git initialized.
- GitHub repository created.
- TypeScript configured.
- Stable project structure established.

## Backend

- Supabase connected.
- Authentication configured.
- Database connection implemented.
- Edge Functions configured.

## AI

- OpenAI integration completed.
- AI meal analysis implemented.

## Nutrition

- Meal persistence.
- Manual editing.
- Meal deletion.
- Daily nutrition totals.

## Dashboard

- Overview screen.
- System cards.
- Basic statistics.

## Architecture

- Service layer introduced.
- Theme system introduced.
- Initial project documentation created.

---

# Upcoming Releases

## Version 0.2.0

Target

Body Module

Planned Features

- Manual weight entry
- Weight history
- Weight editing
- Weight deletion
- Target weight
- Body composition
- Charts
- Statistics
- Trend analysis

---

## Version 0.3.0

Target

Health Integrations

Planned Features

- Apple Health
- Health Connect
- Garmin
- Oura
- Whoop

---

## Version 0.4.0

Target

Analytics Engine

Planned Features

- Weekly reports
- Monthly reports
- Trend detection
- AI insights
- Goal tracking

---

## Version 0.5.0

Target

Atlas AI

Planned Features

- Daily coaching
- Nutrition recommendations
- Training recommendations
- Health explanations
- Predictive analytics

---

# Changelog Rules

- Every completed sprint updates this document.
- Every released feature must appear here.
- Every architectural change should be documented.
- Existing release entries are never modified.
- New released versions are always added above previous releases.
- Planned releases are maintained at the bottom of this document until released.
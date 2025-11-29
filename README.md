PulseTrack – Open Source Multi-Tenant Issue Tracker

PulseTrack is a community-built, full-stack, multi-tenant issue tracker inspired by tools like Jira and Linear — but lighter, cleaner, and fully open source.

This project is designed to help new developers gain real production engineering experience across frontend, backend, API design, database modeling, auth, collaboration patterns, and full-stack architecture.

We’re building this together as a learning experience and a portfolio-quality app.

No deadlines. No pressure. Contribute when you can.

Project Overview

PulseTrack lets organizations create projects, track issues, manage workflows, and collaborate via comments and notifications.

Core features include:

Multi-tenant organizations

User authentication and RBAC

Projects dashboard

Issue tracking with priorities, tags, assignees

Kanban board with drag-and-drop

Comment threads

Notification system

Analytics dashboard

Clean modern UI

This project covers every major scope of a real-world SaaS, making it ideal for leveling up as a team.

Team Structure & Responsibilities

We have 6 developers contributing to the core system. Each person owns a domain end-to-end to avoid overlap and confusion.

Dev 1 — Authentication & Multi-Tenancy

Responsibilities:

Auth (login, signup, logout)

Organization creation & membership

Invite system

Role-based access (Admin/Member)

Tenant scoping middleware

Deliverables:

/auth routes

/org routes

Login/Register UI

Org dashboard

Dev 2 — Projects

Responsibilities:

Project model & schema

Project CRUD endpoints

Assigning members to projects

Archive/restore functionality

Deliverables:

Projects dashboard UI

Project create/edit modals

Project settings page

Dev 3 — Issues

Responsibilities:

Issue model & schema

CRUD operations

Priority levels, tags, assignees

Issue activity logs

Deliverables:

Issue detail page

Issue create/edit modal

Dev 4 — Kanban Board

Responsibilities:

Kanban board UI

Drag-and-drop interactions

Column state syncing with API

Filters (status, tags, assignee)

Optional: Real-time board updates

Deliverables:

Complete Kanban board view

Board filter system

Smooth DnD UX

Dev 5 — Comments & Notifications

Responsibilities:
Comments

Comment model & schema

CRUD routes

UI for threaded comments

@mentions

Notifications

Notification model

In-app notifications (bell icon)

Read/unread states

Event triggers (assigned, commented, updated)

Dev 6 — Analytics & Reporting

Responsibilities:

Aggregation queries

Issue velocity calculations

Issues-by-status graph

Cycle time metrics

Caching (optional)

Deliverables:

Analytics dashboard UI

Charts & summary cards

Architecture Overview

Recommended Tech Stack:

Frontend

React + TypeScript

Next.js

Shadcn UI

TailwindCSS

TanStack Query

Zustand or Redux

Backend

Node.js

TypeScript

NestJS or Express

PostgreSQL

Drizzle or Prisma ORM

Infra

Docker

S3 storage (MinIO for dev)

GitHub Actions for CI

Railway/Vercel for deploys

Directory Structure (Proposed)
/apps
   /client        → Next.js frontend
   /server        → API service (NestJS/Express)

/packages
   /ui            → Shared component library
   /types         → Shared TypeScript interfaces
   /utils         → Shared utilities

/infra
   docker-compose.yml
   migrations/

How We Work Together

No deadlines, contribute when life allows.

Every dev works in their assigned domain.

PRs should be reviewed by at least one other member.

Break tasks down into small, PR-friendly chunks.

Ask questions freely — this is a learning project.

Keep communication clear and high quality.

Follow coding conventions and folder structure.

🛠 Contributing Guide

Fork the repo

Create a feature branch
git checkout -b feature/scope-name
Implement your task

Write tests if applicable

Open a pull request with a clear description

Address any review comments

PR gets merged once approved

If you’re blocked, ask — the group exists to help you grow.

📌 Goals of This Project

By the end, every contributor will have:

A real open-source contribution record

Experience working in a 6-dev team

UI, backend, and infra knowledge

A portfolio piece that actually impresses recruiters

A deep understanding of multi-tenant SaaS design

Questions / Help

Need help understanding your task, stuck on setup, or want feedback?

Open a GitHub issue or drop a message in the discussion channel.

We’re here to build something dope and learn together.

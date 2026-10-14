GenAI 60-Day Progress Tracker --- Antigravity Build Master Plan

1. Project Identity

App Name: GenAI 60-Day
Subtitle: Strong Fresher Roadmap
Purpose: A personal 60-day GenAI learning tracker where the user
learns daily, completes checklists, saves notes, tracks progress, and
builds confidence through visible progress.

2. Core Goal

Build a mobile-first, installable PWA that works like a personal
learning app.

The user should be able to:

Open the app every day.

See the current day and learning tasks.

Tick individual tasks.

Mark a day complete.

See overall progress.

See weekly progress.

Track the four major projects.

Write personal notes.

Close/reopen the app without losing progress.

Export/import progress.

Install the app on Android home screen.

3. Technology Stack

React

Vite

JavaScript

Modern CSS or Tailwind CSS

Lucide icons

IndexedDB for persistent local storage

PWA manifest

Service worker

Git/GitHub

Future optional upgrade

Firebase authentication

Firebase/Firestore cloud sync

Multi-device synchronization

Do not add Firebase or authentication in Version 1.

4. Main Navigation

Bottom navigation on mobile:

Home

Roadmap

Projects

Resources

Additional pages:

Day Details

Interview

Settings

5. Home Dashboard

The home screen should show:

GenAI 60-Day title

Strong Fresher Roadmap subtitle

Circular overall progress

Completed days: X / 60

Remaining days

Percentage

Current week

Continue from current day button

Quick access cards:

Roadmap

Projects

Resources

Interview

Example:

GenAI 60-Day
Strong Fresher Roadmap

        35%
      21 / 60

21 Completed
39 Remaining
Week 3

[ Continue from Day 22 ]

[ Roadmap ] [ Projects ]
[ Resources ] [ Interview ]

6. Roadmap

Show all 60 days grouped into:

Week 1

Week 2

Week 3

Week 4

Week 5

Week 6

Week 7

Week 8

Final 4 Days

Every day must have:

Day number

Topic

Learning checklist

Practice task

Mini build task when applicable

Interview preparation

Personal notes

Complete Day button

The user can tick individual tasks.

When the day is explicitly marked complete:

Show checked state.

Update overall progress.

Update weekly progress.

Update dashboard.

Save immediately.

7. Day Details

Each day page should contain:

Today's Learning

The day's topic and learning points.

Practice

A practical coding task.

Build / Mini Task

A small hands-on task where applicable.

Interview Preparation

Questions or concepts to revise.

My Notes

A text area where the user can write personal notes.

Complete Day

A clear primary action.

A day should only be counted as completed when the user explicitly marks
it complete.

8. Weekly Progress

Each week should show:

Completed days

Total days

Percentage

Progress bar

Individual day completion indicators

Example:

WEEK 2

██████████████░░░  5 / 7

✓ Day 8
✓ Day 9
✓ Day 10
✓ Day 11
✓ Day 12
○ Day 13
○ Day 14

When an entire week is completed, show a small celebration.

9. Milestones

Milestones:

Day 7 --- Foundation Started

Day 14 --- ML Foundation

Day 21 --- DL + NLP

Day 28 --- First GenAI Project

Day 35 --- RAG Built

Day 42 --- Advanced RAG

Day 49 --- Agent Built

Day 56 --- Production Skills

Day 60 --- GenAI Strong Fresher

Unlock milestone cards when the corresponding day is completed.

10. Projects

Create four major project cards.

Project 1 --- LLM Q&A + Summarizer

Skills:

LLM API

Prompt engineering

Structured output

Validation

UI

Project 2 --- Document Intelligence RAG

Skills:

Document upload

Parsing

Chunking

Embeddings

Vector database

Retrieval

Citations

Project 3 --- Production RAG

Skills:

Advanced retrieval

Hybrid search

Reranking

Query transformation

Evaluation

API

Deployment

Project 4 --- AI Research / Support Agent

Skills:

Tool calling

Memory/state

Multi-step workflow

Error handling

Evaluation

Backend API

Every project needs:

Description

Checklist

Progress percentage

Notes

Open Project button

11. Resources

Categories:

Python

Data Science

Machine Learning

Deep Learning

NLP

LLM

Prompt Engineering

Embeddings

RAG

AI Agents

Backend

Deployment

Cloud

MLOps

SQL

DSA

System Design

Interview Preparation

Keep resources data separate so links/content can easily be added later.

12. Interview Section

Create sections for:

Python

ML

DL

NLP

LLM

Prompt Engineering

RAG

Agents

FastAPI

Docker

System Design

Project Questions

HR Questions

13. Settings

Include:

Dark/light theme

Daily reminder placeholder

Export progress

Import progress

Reset progress

App information

Export

Export:

completed days

task completion

notes

project progress

settings

as a JSON file.

Import

Allow the exported JSON file to restore progress.

Reset

Require confirmation before resetting all progress.

14. Persistent Storage --- Critical Requirement

Use IndexedDB for Version 1.

Persist:

Day completion

Individual task completion

Notes

Project checklists

Project notes

Theme/settings

Progress must remain after:

refresh

closing the browser

reopening the app

leaving the app

reopening the installed PWA

Do not rely only on React state.

Create a clean persistence layer separate from UI components.

15. PWA

The application must be installable on Android.

Implement:

Web app manifest

App icons

Service worker

Offline app shell

Standalone display mode

Mobile viewport

App name and theme colors

The user should be able to:

Chrome → Add to Home Screen / Install App → GenAI 60-Day

16. UI Design

Visual style:

Premium dark futuristic GenAI UI

Dark navy/black background

Blue/cyan/green accents

Subtle gradients

Rounded cards

Soft glass/layered effect

Clean typography

Lightweight animations

High readability

Mobile-first layout

Requirements:

No horizontal scrolling.

Large touch targets.

Smooth navigation.

Fast loading.

Clear checked/unchecked states.

Good empty states.

Good error states.

17. 60-Day Learning Data

WEEK 1 --- AI + PYTHON ENGINEERING

Day 1

AI, ML, DL, GenAI + data science fundamentals.

Day 2

Problem framing, ML lifecycle, training/inference and evaluation basics.

Day 3

Python basics: variables, types, conditions, loops, input/output.

Day 4

Functions, lists, tuples, sets, dictionaries, comprehensions.

Day 5

OOP, exceptions, modules, file handling, virtual environments.

Day 6

Regex + NumPy + Pandas fundamentals.

Day 7

Revision + coding practice + interview questions.

WEEK 2 --- DATA + ML + RL AWARENESS

Day 8

Data cleaning, missing values, encoding and transformations.

Day 9

Statistics basics + visualization + data interpretation.

Day 10

Supervised ML: regression and classification workflow.

Day 11

Decision trees, SVM and KNN.

Day 12

Unsupervised ML: clustering + dimensionality reduction.

Day 13

Reinforcement learning concepts and where RL fits.

Day 14

Revision + mini ML model + interview practice.

WEEK 3 --- DEEP LEARNING + NLP

Day 15

Neural networks, layers, activations and training concepts.

Day 16

Backpropagation/optimization awareness + practical DL workflow.

Day 17

CNN concepts and use cases.

Day 18

RNN concepts and sequence modeling.

Day 19

GAN and VAE awareness + generative modeling concepts.

Day 20

NLP preprocessing, tokenization and text representation.

Day 21

Transformers + review + small demo.

WEEK 4 --- LLM + PROMPT + HUGGING FACE

Day 22

LLM tokens, context, inference and generation.

Day 23

GPT/LLaMA/Falcon-style model landscape and model selection.

Day 24

Prompt engineering: instructions, roles, few-shot and constraints.

Day 25

Structured output, schemas, validation and prompt testing.

Day 26

LLM APIs, safety, retries, errors and basic cost awareness.

Day 27

Hugging Face: models, hub, inference and datasets.

Day 28

PROJECT 1: LLM Q&A + Summarizer.

WEEK 5 --- EMBEDDINGS + RAG FOUNDATION

Day 29

Embeddings: semantic representation and similarity.

Day 30

FAISS/Chroma + vector indexing and similarity search.

Day 31

Document ingestion and parsing.

Day 32

Chunking strategies + metadata.

Day 33

Build basic RAG pipeline.

Day 34

Citations, fallback handling and answer grounding.

Day 35

PROJECT 2: Document Intelligence RAG.

WEEK 6 --- ADVANCED RAG + FINE-TUNING

Day 36

Retrieval quality, Top-K and retrieval debugging.

Day 37

Hybrid search concepts.

Day 38

Reranking and query transformation.

Day 39

RAG evaluation: relevance, groundedness and answer quality.

Day 40

RAG failure modes + improvement loop.

Day 41

Fine-tuning vs RAG + LoRA/PEFT concepts.

Day 42

PROJECT 3: Production-style RAG.

WEEK 7 --- AGENTS + BACKEND

Day 43

LLM vs RAG vs Agent.

Day 44

Tool/function calling.

Day 45

Memory and state.

Day 46

Multi-step workflows and planning.

Day 47

Agent error handling, guardrails and evaluation.

Day 48

FastAPI + REST + JSON; Flask awareness.

Day 49

PROJECT 4: AI Research / Support Agent.

WEEK 8 --- APPLICATIONS + PRODUCTION + CAREER

Day 50

GenAI application architecture patterns.

Day 51

Stable Diffusion awareness + text-to-code awareness.

Day 52

Streamlit/Gradio + frontend integration.

Day 53

Docker + cloud deployment fundamentals.

Day 54

CI/CD awareness + logging + monitoring.

Day 55

Security, responsible AI, cost and latency optimization.

Day 56

SQL + DSA basics + GenAI system design.

FINAL 4 DAYS

Day 57

Capstone hardening: bugs, UX, reliability, evaluation and deployment.

Day 58

GitHub cleanup + README + architecture diagrams + portfolio + resume.

Day 59

Full mock interview: Python, ML/DL/NLP, LLM, RAG, agents, backend and
projects.

Day 60

Final demo + interview revision + application checklist.

18. Suggested Folder Structure

genai-60-day/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   ├── DayCard/
│   │   ├── ProgressBar/
│   │   ├── WeekCard/
│   │   ├── ProjectCard/
│   │   └── Navigation/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Roadmap/
│   │   ├── DayDetail/
│   │   ├── Projects/
│   │   ├── Resources/
│   │   ├── Interview/
│   │   └── Settings/
│   │
│   ├── data/
│   │   └── roadmap.js
│   │
│   ├── store/
│   │   └── progressStore.js
│   │
│   ├── services/
│   │   └── storage.js
│   │
│   └── utils/
│
├── public/
│   ├── icons/
│   └── manifest.json
│
├── package.json
└── README.md

19. Development Phases

Phase 1 --- Foundation

Build:

React/Vite project

Routing

Base theme

Mobile layout

Navigation

Phase 2 --- Roadmap

Build:

60-day data

Week grouping

Day cards

Day detail pages

Task checkboxes

Phase 3 --- Progress

Build:

Day completion

Overall progress

Weekly progress

Milestones

Dashboard updates

Phase 4 --- Persistence

Build:

IndexedDB

Task state persistence

Notes persistence

Project persistence

Settings persistence

Test:

Tick Day 1.

Refresh.

Verify Day 1 remains checked.

Close browser.

Reopen.

Verify Day 1 remains checked.

Phase 5 --- Projects

Build all four project sections and checklists.

Phase 6 --- Resources + Interview

Build resource categories and interview sections.

Phase 7 --- PWA

Add:

Manifest

Icons

Service worker

Offline support

Installable experience

Phase 8 --- Backup

Add:

JSON export

JSON import

Reset with confirmation

Phase 9 --- Polish

Test:

Android screen sizes

Navigation

Touch targets

Persistence

PWA installation

Offline opening

Export/import

Dark/light theme

No console errors

20. Critical Rules for Antigravity

Do not remove any of the 60 days.

Do not replace the roadmap with generic placeholder topics.

Keep the roadmap data separate from UI.

Do not store important progress only in React state.

Every checkbox must persist.

Notes must persist.

Project progress must persist.

The app must remain usable offline after installation.

Do not add unnecessary dependencies.

Keep the UI mobile-first.

Test the persistence flow before declaring the project complete.

Do not add authentication/Firebase in Version 1.

Keep code modular and maintainable.

Make future Firebase sync possible without rewriting the whole
application.

21. Definition of Done

Version 1 is complete only when:

All 60 days are visible.

Every day has learning content.

Individual tasks can be checked.

Days can be completed.

Overall progress updates.

Weekly progress updates.

Milestones unlock.

Notes save.

Project checklists save.

Refresh does not lose progress.

Close/reopen does not lose progress.

PWA installs on Android.

App can reopen offline.

Export works.

Import works.

Reset works safely.

Mobile UI is polished.

No major console/runtime errors.

22. First Build Instruction

Start by creating the React + Vite application.

Implement these first:

Home Dashboard

Roadmap with all 60 days

Day checklist

Progress calculation

IndexedDB persistence

Mobile responsive UI

PWA foundation

Run the application and verify the complete core flow before moving to
advanced features.
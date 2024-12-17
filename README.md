# Trello Clone (Next.js + Clerk + CockroachDB)

A modern Trello-like task management application built with **Next.js** for the frontend, **Clerk** for user authentication, and **CockroachDB** for the database. **Prisma ORM** is used for interacting with the database.

---

## Features

- **User Authentication**: Powered by **Clerk** for secure sign-in and sign-up.
- **Task Management**: Create, update, and delete boards, lists, and cards, mimicking the Trello experience.
- **CockroachDB**: Distributed and scalable PostgreSQL-compatible SQL database with Prisma integration.
- **Next.js**: Optimized performance with server-side rendering and static site generation.
- **Responsive Design**: Clean, modern UI styled with **Tailwind CSS**.

---

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Authentication**: Clerk
- **Database**: CockroachDB (PostgreSQL-compatible)
- **ORM**: Prisma
- **Deployment**: Vercel (Recommended)

---

## Installation

### 1. Clone the Repository

git clone https://github.com/your-username/trello-clone.git
cd trello-clone

### 2. Install Dependencies

npm install

### 3. Prisma Setup:

Generate the Prisma client:
bash
Copy code
npx prisma generate

### 4.Start the Development Server:

bash
Copy code
npm run dev

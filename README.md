# Nike Store - Ecommerce

A modern ecommerce application built with Next.js, featuring a product catalog with Nike items, cart functionality, and authentication.

## Demo

![Nike Store Homepage](https://app.devin.ai/attachments/83ee5be3-4a1e-47da-a7b1-53a1327aa7ba/screenshot_fda7a14585b74f9abe66c6f7c539e2aa.png)

https://app.devin.ai/attachments/cf9acc2d-52d7-497a-992f-571608d2680d/rec-554f89adc1fd4470892ddd8e4cbfc1ec-edited.mp4

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [TailwindCSS 4](https://tailwindcss.com/)
- **Database:** [Neon PostgreSQL](https://neon.tech/) (Serverless Postgres)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication:** [Better Auth](https://www.better-auth.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Linting:** ESLint

## Features

- Server-side product listing from Neon PostgreSQL via Drizzle ORM
- Responsive product grid with image, name, description, price, and stock info
- Client-side cart management with Zustand (add to cart, remove, update quantity)
- Email/password authentication with Better Auth
- Dark mode support
- Fully typed with TypeScript

## Getting Started

### Prerequisites

- Node.js 20+
- A [Neon](https://neon.tech/) PostgreSQL database

### 1. Clone the repository

```bash
git clone https://github.com/NextJSRepos/ecommerce.git
cd ecommerce
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

Update `.env.local` with your Neon database connection string and a secret key:

```env
DATABASE_URL=postgresql://user:password@ep-example.us-east-2.aws.neon.tech/neondb?sslmode=require
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:3000
```

### 4. Push the database schema

```bash
npm run db:push
```

### 5. Seed sample Nike products

```bash
npm run db:seed
```

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run db:generate` | Generate Drizzle migrations |
| `npm run db:migrate` | Run Drizzle migrations |
| `npm run db:push` | Push schema to the database |
| `npm run db:seed` | Seed sample Nike products |
| `npm run db:studio` | Open Drizzle Studio |

## Project Structure

```
src/
├── app/
│   ├── api/auth/[...all]/  # Better Auth API route
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with Header
│   └── page.tsx             # Homepage (server component, queries DB)
├── components/
│   ├── CartButton.tsx       # Cart icon with item count badge
│   ├── Header.tsx           # Sticky header with logo and cart
│   ├── ProductCard.tsx      # Individual product card
│   └── ProductList.tsx      # Product grid layout
├── db/
│   ├── index.ts             # Drizzle + Neon database client
│   ├── schema.ts            # Database schema (products, users, sessions, etc.)
│   └── seed.ts              # Seed script with sample Nike products
├── lib/
│   ├── auth.ts              # Better Auth server config
│   └── auth-client.ts       # Better Auth client hooks
└── store/
    └── cart-store.ts         # Zustand cart state management
```

## Deploy on Vercel

The easiest way to deploy this app is with the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

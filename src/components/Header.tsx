"use client";

import CartButton from "./CartButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7 text-zinc-900 dark:text-zinc-50"
          >
            <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.375V3H9.375ZM14.625 3a1.875 1.875 0 0 1 0 3.75h-1.875v4.5h7.875c1.035 0 1.875-.84 1.875-1.875v-.75a1.875 1.875 0 0 0-1.875-1.875h-3.375V3h-2.625ZM11.25 12.75H3.375a1.875 1.875 0 0 0-1.875 1.875v.75c0 1.036.84 1.875 1.875 1.875H11.25v4.5H9.375a1.875 1.875 0 0 1 0-3.75H6.75v3.75h2.625a1.875 1.875 0 0 0 0-3.75H11.25v-5.25ZM12.75 12.75v5.25h7.875A1.875 1.875 0 0 0 22.5 16.125v-.75a1.875 1.875 0 0 0-1.875-1.875H12.75v-4.5h1.875a1.875 1.875 0 0 0 0-3.75h2.625V3h-2.625a1.875 1.875 0 0 1 0 3.75H12.75v6Z" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Nike Store
          </span>
        </div>
        <CartButton />
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import type { Product } from "@/db/schema";
import { useCartStore } from "@/store/cart-store";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="group flex flex-col rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-square w-full overflow-hidden rounded-t-2xl bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {product.category}
        </span>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(product)}
            disabled={product.stock <= 0}
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
        {product.stock > 0 && product.stock <= 10 && (
          <p className="text-xs text-orange-600 dark:text-orange-400">
            Only {product.stock} left in stock
          </p>
        )}
      </div>
    </div>
  );
}

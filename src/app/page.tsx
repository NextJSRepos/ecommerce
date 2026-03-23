import { db } from "@/db";
import { products } from "@/db/schema";
import ProductList from "@/components/ProductList";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allProducts = await db.select().from(products);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Featured Products
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          Explore our latest Nike collection
        </p>
      </div>
      <ProductList products={allProducts} />
    </div>
  );
}

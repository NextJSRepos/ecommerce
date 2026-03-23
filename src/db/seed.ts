import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import dotenv from "dotenv";
import { products } from "./schema";

dotenv.config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const nikeProducts = [
  {
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays, and classic TPU accents. Fresh colors give a modern look while Max Air cushioning adds comfort to your journey.",
    price: 129.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx1fga80jr/AIR+MAX+90.png",
    category: "Shoes",
    stock: 50,
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: durably stitched overlays, clean finishes, and the perfect amount of flash to make you shine.",
    price: 114.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a7e4be5950b0/AIR+FORCE+1+%2707.png",
    category: "Shoes",
    stock: 75,
  },
  {
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors. This basketball icon channels '80s vibes with premium leather in the upper that looks good and breaks in even better.",
    price: 109.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0fbc403-a7b2-4893-a887-ef506ab20cb6/NIKE+DUNK+LOW+RETRO.png",
    category: "Shoes",
    stock: 60,
  },
  {
    name: "Nike Sportswear Tech Fleece Joggers",
    description:
      "Slim through the leg, with a pointed gusset at the crotch, the Tech Fleece Joggers combine a lean, tapered design with innovative warmth. Nike Tech Fleece is lightweight and warm and smooth on both sides.",
    price: 109.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a85e0e12-6400-4f9d-a067-6031bb6e8827/TECH+FLEECE+JOGGER.png",
    category: "Clothing",
    stock: 100,
  },
  {
    name: "Nike Sportswear Club Fleece Hoodie",
    description:
      "The Nike Sportswear Club Fleece Hoodie combines classic style with the soft comfort of fleece for an elevated everyday look. This pullover hoodie features a kangaroo pocket and an embroidered Futura logo on the chest.",
    price: 59.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3572a9e-ed65-4095-b498-1de1c0673702/CLUB+HOODIE+PO+BB+GX.png",
    category: "Clothing",
    stock: 120,
  },
  {
    name: "Nike Air Max 270",
    description:
      "Nike's first lifestyle Air Max brings you style, comfort, and big attitude in the Air Max 270. The design draws inspiration from Air Max icons, featuring Nike's biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks.",
    price: 159.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/awjogtdnqxniqqk0wpgf/AIR+MAX+270.png",
    category: "Shoes",
    stock: 45,
  },
  {
    name: "Nike Pegasus 42",
    description:
      "A springy satisfying ride for every run, the Pegasus 42 is designed for the road. The latest version features a ReactX foam midsole that delivers an energetic and lightweight feeling to help you stay fresh and supported.",
    price: 139.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2680e03-18d7-4429-804b-9b0a296323b1/NIKE+PEGASUS+42.png",
    category: "Shoes",
    stock: 80,
  },
  {
    name: "Nike Pro Dri-FIT T-Shirt",
    description:
      "Stay dry, comfortable, and focused during your workout with the Nike Pro Dri-FIT T-Shirt. Sweat-wicking technology and a snug fit keep you moving without distractions.",
    price: 34.99,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7b7cc772-c783-42bf-b9d2-0e0e3336b05f/M+NP+DF+TIGHT+TOP+SS.png",
    category: "Clothing",
    stock: 150,
  },
];

async function seed() {
  console.log("Seeding database with Nike products...");

  await db.insert(products).values(nikeProducts);

  console.log(`Successfully seeded ${nikeProducts.length} Nike products!`);
  process.exit(0);
}

seed().catch((error) => {
  console.error("Error seeding database:", error);
  process.exit(1);
});

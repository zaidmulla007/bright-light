import { brands } from "@/app/data/products";
import CategoryClient from "./CategoryClient";

export function generateStaticParams() {
  const params: { brand: string; category: string }[] = [];
  brands.forEach((b) => {
    b.categories.forEach((c) => {
      params.push({ brand: b.slug, category: c.slug });
    });
  });
  return params;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ brand: string; category: string }>;
}) {
  const { brand, category } = await params;
  return <CategoryClient brandSlug={brand} categorySlug={category} />;
}

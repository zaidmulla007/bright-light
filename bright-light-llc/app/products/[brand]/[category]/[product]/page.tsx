import { brands } from "@/app/data/products";
import ProductClient from "./ProductClient";

export function generateStaticParams() {
  const params: { brand: string; category: string; product: string }[] = [];
  brands.forEach((b) => {
    b.categories.forEach((c) => {
      c.subs.forEach((s) => {
        params.push({ brand: b.slug, category: c.slug, product: s.slug });
      });
    });
  });
  return params;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ brand: string; category: string; product: string }>;
}) {
  const { brand, category, product } = await params;
  return <ProductClient brandSlug={brand} categorySlug={category} productSlug={product} />;
}

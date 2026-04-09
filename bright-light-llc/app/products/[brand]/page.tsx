import { brands } from "@/app/data/products";
import BrandClient from "./BrandClient";

export function generateStaticParams() {
  return brands.map((b) => ({ brand: b.slug }));
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;
  return <BrandClient brandSlug={brand} />;
}

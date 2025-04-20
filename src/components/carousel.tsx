import { RetroGrid } from "./retro-grid";

interface IProduct {
  key: string;
  title: string;
  src?: string;
}

export function BentoGrid({products}: {
  products: IProduct[];
}) {
  if (!products?.length) return null;
  
  return <RetroGrid products={products} />
}
import { GridTileImage } from "./grid/tile";
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
  
  // Instead of rendering the bento grid, render the retro grid
  return <RetroGrid products={products} />
}
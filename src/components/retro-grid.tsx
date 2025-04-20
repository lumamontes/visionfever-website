import { GridTileImage } from "./grid/tile";

interface IProduct {
  key: string;
  title: string;
  src?: string;
}

export function RetroGrid({ products }: { products: IProduct[] }) {
  if (!products?.length) return null;

  return (
    <div className="w-fullsm:p-6 md:p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.key}
            className="aspect-square max-h-[200px] w-full rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <GridTileImage
              label={{
                title: product.title,
              }}
            />
            {product.src && (
              <img
                src={product.src}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
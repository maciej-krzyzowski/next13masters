import { ProductCard } from "@/components/molecules/ProductCard";
import { type ProductType } from "@/types/Product.type";

type IProps = {
  products: ProductType[];
};

export const ProductList = ({ products }: IProps) => {
  return (
    <ul
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      data-testid="products-list"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

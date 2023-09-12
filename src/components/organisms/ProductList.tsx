import { Row } from "antd";
import { ProductCard } from "@/components/molecules/ProductCard";
import { type ProductType } from "@/types/Product.type";

type IProps = {
  products: ProductType[];
};

export const ProductList = ({ products }: IProps) => {
  return (
    <Row gutter={[16, 16]} wrap={true} data-testid="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Row>
  );
};

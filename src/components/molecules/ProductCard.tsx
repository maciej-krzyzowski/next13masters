import { Card } from "antd";
import { ProduktDescription } from "@/components/atoms/ProductDescription";
import { type ProductType } from "@/types/Product.type";

type IProps = {
  product: ProductType;
};

export const ProductCard = ({ product }: IProps) => {
  return (
    <li className="mx-auto max-w-xs sm:max-w-none">
      <Card size="default" hoverable cover={<img src={product.img.src} alt={product.img.alt} />}>
        <ProduktDescription product={product} />
      </Card>
    </li>
  );
};

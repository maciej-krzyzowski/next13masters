import { Card, Col } from "antd";
import { ProduktDescription } from "@/components/atoms/ProductDescription";
import { type ProductType } from "@/types/Product.type";

type IProps = {
  product: ProductType;
};

export const ProductCard = ({ product }: IProps) => {
  return (
    <Col className="gutter-row" md={{ span: 12 }} lg={{ span: 6 }}>
      <Card size="default" hoverable cover={<img src={product.img.src} alt={product.img.alt} />}>
        <ProduktDescription product={product} />
      </Card>
    </Col>
  );
};

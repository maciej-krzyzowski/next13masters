import { changeCurrency } from "@/utils/changeFormatPrice";
import { type ProductType } from "@/types/Product.type";

type IProps = {
  product: ProductType;
};

export const ProduktDescription = ({ product }: IProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3>{product.name}</h3>
        <span>{changeCurrency(product.price / 100)}</span>
      </div>
      <div>{product.category}</div>
    </div>
  );
};

import { ProductList } from "@/components/organisms/ProductList";
import { type ProductType } from "@/types/Product.type";

const productList: ProductType[] = [
  {
    id: 1,
    name: "T-shirt 1",
    category: "clothes",
    price: 1200,
    img: {
      src: "/product-1.png",
      alt: "produkt-1",
    },
  },
  {
    id: 2,
    name: "T-shirt 2",
    category: "clothes",
    price: 2200,
    img: {
      src: "/product-2.png",
      alt: "produkt-2",
    },
  },
  {
    id: 3,
    name: "T-shirt 3",
    category: "clothes",
    price: 3200,
    img: {
      src: "/product-3.png",
      alt: "produkt-3",
    },
  },
  {
    id: 4,
    name: "T-shirt 4",
    category: "accessories",
    price: 1100,
    img: {
      src: "/product-4.png",
      alt: "produkt-4",
    },
  },
];

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-50 p-24">
      <ProductList products={productList} />
    </main>
  );
};

export default Home;

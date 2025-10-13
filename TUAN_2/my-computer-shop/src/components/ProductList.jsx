import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productApi";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <p>Đang tải sản phẩm...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

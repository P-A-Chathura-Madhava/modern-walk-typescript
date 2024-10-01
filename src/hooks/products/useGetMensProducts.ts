import { useQuery } from "@tanstack/react-query";
import { ProductType } from "./types/ProductType";
import { getMensProducts } from "../../services/productService";

const useGetMensProducts = () => {
  return useQuery<ProductType[]>({
    queryKey: ["mensProducts"],
    queryFn: () => getMensProducts(),
  });
};

export default useGetMensProducts;

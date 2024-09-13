import { useQuery } from "@tanstack/react-query";
import { ProductType } from "./types/ProductType";
import { getMensProducts, getMixedProducts } from "../../services/productService";

const useGetMixedProducts = () => {
    return useQuery<ProductType[]>({
        queryKey: ["mixedProducts"],
        queryFn: () => getMixedProducts()
    })
}

export default useGetMixedProducts;
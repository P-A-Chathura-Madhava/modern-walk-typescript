import { ProductType } from "./ProductType";

export interface ProductState {
  product: ProductType | undefined;
  products: ProductType[];
  mensProducts: ProductType[];
  womensProducts: ProductType[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: any;
}

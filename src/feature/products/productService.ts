import axios, { AxiosResponse } from "axios";
import { ProductType } from "./types/ProductType";

const getMensProducts = async (): Promise<ProductType[]> => {
  const response: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `https://fakestoreapi.com/products/category/men's%20clothing`
  );  
  return response.data;
};

const getWomensProducts = async (): Promise<ProductType[]> => {
  const response: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `https://fakestoreapi.com/products/category/women's%20clothing`
  );
  return response.data;
};

const getMixedProducts = async (): Promise<ProductType[]> => {
  const mens: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `https://fakestoreapi.com/products/category/men's%20clothing?limit=2`
  );
  const mensData = mens.data;
  const womens: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `https://fakestoreapi.com/products/category/women's%20clothing?limit=2`
  );
  const womensData: ProductType[] = womens.data;
  const data: ProductType[] = mensData.concat(womensData);
  return data;
};

const productService = {
  getMensProducts,
  getWomensProducts,
  getMixedProducts,
};

export default productService;

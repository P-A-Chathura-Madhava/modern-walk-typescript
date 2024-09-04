import axios, { AxiosResponse } from "axios";
import { ProductType } from "./types/ProductType";

const URL: string = "https://fakestoreapi.com/products/category/";
const URL2: string = "https://fakestoreapi.com/products/";

const getMensProducts = async (): Promise<ProductType[]> => {
  const response: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `${URL}men's%20clothing`
  );  
  return response.data;
};

const getWomensProducts = async (): Promise<ProductType[]> => {
  const response: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `${URL}women's%20clothing`
  );
  return response.data;
};

const getMixedProducts = async (): Promise<ProductType[]> => {
  const mens: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `${URL}men's%20clothing?limit=2`
  );
  const mensData = mens.data;
  const womens: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `${URL}women's%20clothing?limit=2`
  );
  const womensData: ProductType[] = womens.data;
  const data: ProductType[] = mensData.concat(womensData);
  return data;
};

const getSelectedProduct = async (itemIdArray: any[]): Promise<ProductType[]> => {
  let newItemArray: any[] = [];

  for (let i = 0; i < itemIdArray.length; i++) {
      let response: AxiosResponse<ProductType> = await axios.get<ProductType>(
    `${URL2}${itemIdArray[i]}`
  ); 
    newItemArray.push(response.data);    
  }
  // console.log(newItemArray);  
  return newItemArray;
};

const productService = {
  getMensProducts,
  getWomensProducts,
  getMixedProducts,
  getSelectedProduct
};

export default productService;

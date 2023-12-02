import axios from "axios";

export const instance = axios.create({
  baseURL: "https://product-service-two.vercel.app/",
  headers: {
    'Content-Type': '*',
  },
});

export const productsApi = {
  getProducts() {
    return instance.get<ProductType[]>("/products");
  },
  getProductById(id: number) {
    return instance.get<ProductType>(`/products/${id}`);
  },
  findProductByName(title: string) {
    return instance.get<ProductType>(`/products?title=${title}`);
  },
};


export type ProductType = {
  id: number,
  description: string,
  price: number,
  value: string,
  title: string,
  img: string,
  count: number,
}


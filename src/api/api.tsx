import axios from "axios";
import { Product } from "../model/product.model";
import { v4 as uuid } from "uuid";

export const apiProductsGetAll = async () => {
  const products: Product[] = [];
  let allProducts: Product[] = [];

  await axios
    .get("https://randomized-api-m.herokuapp.com/random-products")
    .then((res: any) => {
      let listOfCategories: any[] = [];
      res.data.catalogo.roupas.categorias.forEach((category: any) => {
        listOfCategories.push(category);
      });

      let listOfProducts: any[] = [];
      listOfCategories.forEach((category: any) => {
        listOfProducts.push(category.categorias);
      });

      listOfProducts.map((category: any) => {
        category.map((product: any) => {
          products.push(...product.categorias);
        });
      });
    });

  products.map((product: any) => {
    if (product.categorias) {
      allProducts.push(...product.categorias);
    } else {
      allProducts.push(product);
    }
  });

  allProducts = allProducts.map((product: any) => {
    return {
      id: uuid(),
      ...product,
    } as Product;
  });

  return allProducts;
};

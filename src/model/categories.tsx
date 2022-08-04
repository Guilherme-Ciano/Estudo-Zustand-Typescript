import { Product } from "./product.model";

export interface Category {
  nome: string;
  categorias: Product[];
}

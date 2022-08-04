import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { apiProductsGetAll } from "../api/api";
import BrandCarrousel from "../components/BrandCarrousel";
import Filters from "../components/Filters";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { Product } from "../model/product.model";

export default function Homepage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const allProducts: Promise<Product[]> = apiProductsGetAll();

    allProducts.then((products: Product[]) => {
      setProducts(products);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <BrandCarrousel />
      <Filters />
      <SimpleGrid padding={5} columns={{ base: 2, md: 5 }} spacing={5}>
        {products.map((product: Product) => {
          return <ProductCard product={product} />;
        })}
      </SimpleGrid>
    </div>
  );
}

import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Product } from "../model/product.model";
import { useCartStore } from "../store/cart.store";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addItem);

  return (
    <Box
      backgroundColor="white"
      height={"30rem"}
      width={"20rem"}
      borderRadius="20px"
      boxShadow={"0px 4px 16px rgba(0, 0, 0, 0.15)"}
      id={product.id}
    >
      <Box
        height={"22rem"}
        backgroundImage={`url(${product.imagem})`}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
      />
      <Box padding={2}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"black"}
        >
          <div>
            <Heading
              as="h3"
              textAlign={"left"}
              size="md"
              padding={0}
              margin={0}
            >
              {product.nome}
            </Heading>
            <Text fontSize="sm" textAlign={"left"} padding={0} margin={0}>
              Descrição
            </Text>
          </div>

          <Heading as="h4" textAlign={"left"} size="md" padding={0} margin={0}>
            R$ {product.preco}
          </Heading>
        </Flex>
        <Button
          color="white"
          marginTop={"1.5rem"}
          backgroundColor={"black"}
          width={"100%"}
          onClick={() => addToCart(product)}
        >
          Adicionar ao carrinho
        </Button>
      </Box>
    </Box>
  );
}

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

export default function Filters() {
  return (
    <Flex padding={5} flexDirection={"column"} gap={5}>
      <InputGroup
        borderColor={"transparent"}
        background={"#FFFFFF"}
        boxShadow={"0px 4px 16px rgba(0, 0, 0, 0.15)"}
        borderRadius={"10px"}
      >
        <Input h={"4rem"} placeholder="Enter amount" color={"black"} />
      </InputGroup>

      <Box gap={3} display="flex">
        <Menu>
          <MenuButton
            background={"transparent"}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Gênero
          </MenuButton>
          <MenuList>
            <MenuItem>Masculino</MenuItem>
            <MenuItem>Feminino</MenuItem>
            <MenuItem>(M) Infantil</MenuItem>
            <MenuItem>(F) Infantil</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            background={"transparent"}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>Camisetas</MenuItem>
            <MenuItem>Calças</MenuItem>
            <MenuItem>Acessórios</MenuItem>
            <MenuItem>Sapatos</MenuItem>
            <MenuItem>Joias</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            background={"transparent"}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Preço
          </MenuButton>
          <MenuList>
            <MenuItem>Mais barato</MenuItem>
            <MenuItem>Mais caro</MenuItem>
            <MenuItem>Frete grátis</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}

import { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
  Heading,
  Text,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  IconButton,
} from "@chakra-ui/react";
import { AiFillShopping } from "react-icons/ai";
import { useCartStore } from "../store/cart.store";
import { Product } from "../model/product.model";
import { CloseIcon } from "@chakra-ui/icons";

function DrawerExample({ isOpen, toggleOpen }: any) {
  const { onClose } = useDisclosure();
  const cart = useCartStore((state) => state.items);
  const { removeItem, clearAllItems } = useCartStore((state) => state);

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={toggleOpen} />
          <DrawerHeader>Carrinho</DrawerHeader>

          <DrawerBody>
            <Stack spacing={4}>
              {cart.map((item: Product) => {
                return (
                  <Stat
                    px={{ base: 4, md: 8 }}
                    py={"5"}
                    shadow={"xl"}
                    border={"1px solid"}
                    borderColor={"gray.800"}
                    rounded={"lg"}
                    position={"relative"}
                  >
                    <IconButton
                      position={"absolute"}
                      top={"1"}
                      right={"1"}
                      aria-label="Search database"
                      bg={"transparent"}
                      color={"red.500"}
                      icon={<CloseIcon />}
                      onClick={() => removeItem(item)}
                    />
                    <StatLabel fontWeight={"medium"}>{item.nome}</StatLabel>
                    <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
                      R${item.preco}
                    </StatNumber>
                  </Stat>
                );
              })}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              background="red.700"
              color={"white"}
              mr={3}
              onClick={() => {
                clearAllItems();
                toggleOpen();
              }}
              _hover={{ background: "red" }}
            >
              Limpar Carrinho
            </Button>
            <Button
              background="black"
              _hover={{
                background: "white",
                color: "black",
                border: "1px solid black",
              }}
              border={"1px solid transparent"}
              color={"white"}
            >
              Seguir
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Box position={"sticky"} top={0} zIndex={90}>
      <Box bg={useColorModeValue("white", "black")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <div>
            <Heading
              as="h3"
              textAlign={"left"}
              size="md"
              padding={0}
              margin={0}
            >
              Brand Carrousel
            </Heading>
            <Text fontSize="sm" textAlign={"left"} padding={0} margin={0}>
              In love with React & Next
            </Text>
          </div>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleCart}>
                <Icon as={AiFillShopping} />
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>

      <DrawerExample isOpen={isCartOpen} toggleOpen={toggleCart} />
    </Box>
  );
}

import { Flex, VStack, useBreakpointValue } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"50vh"}
      backgroundImage={
        "url(https://i.pinimg.com/originals/fa/2b/c4/fa2bc4bd2fca9df315162f1099aba228.jpg)"
      }
      backgroundSize={"contain"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      ></VStack>
    </Flex>
  );
}

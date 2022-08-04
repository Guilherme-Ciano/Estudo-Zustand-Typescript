import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export default function BrandCarrousel() {
  return (
    <Flex padding={5} flexDirection={"column"} gap={5}>
      <div>
        <Heading as="h3" textAlign={"left"} size="md" padding={0} margin={0}>
          Brand Carrousel
        </Heading>
        <Text fontSize="sm" textAlign={"left"} padding={0} margin={0}>
          In love with React & Next
        </Text>
      </div>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 6 }} spacing={10}>
          <Box
            bg="gray.100"
            boxShadow={"0px 4px 16px rgba(0, 0, 0, 0.10)"}
            h="5rem"
            borderRadius="md"
            p={5}
            backgroundImage={
              "url(https://www.nike.com.br/images/meta/open-graph-main-image.jpg)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
          />

          <Box
            bg="gray.100"
            boxShadow={"0px 4px 16px rgba(0, 0, 0, 0.10)"}
            h="5rem"
            borderRadius="md"
            p={5}
            backgroundImage={
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7Zrfkp8TAuL0CpFAElsYOsRnICC2riPXQUSQCuuT4Giwt-AQFtZi46nX9FGKncNy1lk&usqp=CAU)"
            }
            backgroundSize={"cover"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center center"}
          />

          <Box
            bg="gray.100"
            boxShadow={"0px 4px 16px rgba(0, 0, 0, 0.10)"}
            h="5rem"
            borderRadius="md"
            p={5}
            backgroundImage={
              "url(https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/brand-vans_ncetfc.jpg)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
          />

          <Box
            bg="gray.100"
            boxShadow={"0px 4px 16px rgba(0, 0, 0, 0.10)"}
            h="5rem"
            borderRadius="md"
            p={5}
            backgroundImage={
              "url(https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
          />

          <Box
            bg="gray.100"
            boxShadow={"0px 4px 16px rgba(0, 0, 0, 0.10)"}
            h="5rem"
            borderRadius="md"
            p={5}
            backgroundImage={
              "url(https://thumbs.dreamstime.com/b/set-lacoste-logo-crocodile-famous-emblem-popular-clothing-brand-vector-icon-zaporizhzhia-ukraine-may-222305852.jpg)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
          />

          <Box
            bg="gray.100"
            boxShadow={"0px 4px 16px rgba(0, 0, 0, 0.10)"}
            h="5rem"
            borderRadius="md"
            p={5}
            backgroundImage={
              "url(https://cdn.shopify.com/s/files/1/1743/8407/files/DGK_OPENER.jpg?v=1524700779)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
          />
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

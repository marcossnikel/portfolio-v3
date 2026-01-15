"use client";

import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import theme from "@/theme";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" minH="100vh">
        <Navigation />
        <Box as="main" flex="1">
          {children}
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

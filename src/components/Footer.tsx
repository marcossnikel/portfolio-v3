"use client";

import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";

export function Footer() {
  const borderColor = useColorModeValue("gray.200", "gray.800");
  const textColor = useColorModeValue("gray.500", "gray.500");

  return (
    <Box
      as="footer"
      borderTop="1px"
      borderColor={borderColor}
      py={8}
      mt="auto"
    >
      <Container maxW="container.lg">
        <Text fontSize="sm" color={textColor} textAlign="center">
          © {new Date().getFullYear()} Marcos Nikel. Built with Next.js & Chakra UI.
        </Text>
      </Container>
    </Box>
  );
}

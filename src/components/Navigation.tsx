"use client";

import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { MoonIcon, SunIcon } from "./Icons";

export function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("whiteAlpha.800", "blackAlpha.600");
  const borderColor = useColorModeValue("gray.200", "gray.800");

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={100}
      backdropFilter="blur(10px)"
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
    >
      <Container maxW="container.lg" py={4}>
        <Flex justify="space-between" align="center">
          <Link
            href="/"
            fontWeight="bold"
            fontSize="xl"
            color={useColorModeValue("accent.600", "accent.400")}
            _hover={{ textDecoration: "none", color: useColorModeValue("accent.500", "accent.300") }}
          >
            Marcos Nikel
          </Link>

          <HStack spacing={6}>
            <Link
              href="/"
              fontSize="sm"
              fontWeight="medium"
              color={useColorModeValue("gray.600", "gray.300")}
              _hover={{ color: useColorModeValue("accent.600", "accent.400") }}
            >
              Home
            </Link>
            <Link
              href="/blog"
              fontSize="sm"
              fontWeight="medium"
              color={useColorModeValue("gray.600", "gray.300")}
              _hover={{ color: useColorModeValue("accent.600", "accent.400") }}
            >
              Blog
            </Link>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
              color={useColorModeValue("gray.600", "gray.300")}
              _hover={{ bg: useColorModeValue("gray.100", "gray.800") }}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Box,
  Heading,
  Text,
  Code,
  UnorderedList,
  OrderedList,
  ListItem,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const codeBlockBg = useColorModeValue("gray.100", "gray.800");
  const inlineCodeBg = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("gray.800", "gray.100");
  const accentColor = useColorModeValue("accent.600", "accent.400");

  return (
    <Box className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <Heading
              as="h1"
              fontSize="3xl"
              fontFamily="heading"
              color={headingColor}
              mt={8}
              mb={4}
            >
              {children}
            </Heading>
          ),
          h2: ({ children }) => (
            <Heading
              as="h2"
              fontSize="2xl"
              fontFamily="heading"
              color={headingColor}
              mt={8}
              mb={4}
            >
              {children}
            </Heading>
          ),
          h3: ({ children }) => (
            <Heading
              as="h3"
              fontSize="xl"
              fontFamily="heading"
              color={headingColor}
              mt={6}
              mb={3}
            >
              {children}
            </Heading>
          ),
          p: ({ children }) => (
            <Text color={textColor} mb={4} lineHeight="tall" fontSize="lg">
              {children}
            </Text>
          ),
          a: ({ href, children }) => (
            <Link href={href || "#"} color={accentColor} fontWeight="medium">
              {children}
            </Link>
          ),
          ul: ({ children }) => (
            <UnorderedList color={textColor} mb={4} pl={4} spacing={2}>
              {children}
            </UnorderedList>
          ),
          ol: ({ children }) => (
            <OrderedList color={textColor} mb={4} pl={4} spacing={2}>
              {children}
            </OrderedList>
          ),
          li: ({ children }) => (
            <ListItem fontSize="lg" lineHeight="tall">
              {children}
            </ListItem>
          ),
          code: ({ className, children }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <Box
                  as="pre"
                  bg={codeBlockBg}
                  p={4}
                  borderRadius="lg"
                  overflowX="auto"
                  mb={4}
                  fontSize="sm"
                  fontFamily="mono"
                >
                  <Code bg="transparent" display="block" whiteSpace="pre">
                    {children}
                  </Code>
                </Box>
              );
            }
            return (
              <Code
                bg={inlineCodeBg}
                px={2}
                py={1}
                borderRadius="md"
                fontSize="sm"
              >
                {children}
              </Code>
            );
          },
          pre: ({ children }) => <>{children}</>,
          hr: () => <Divider my={8} />,
          blockquote: ({ children }) => (
            <Box
              borderLeftWidth={4}
              borderLeftColor={accentColor}
              pl={4}
              py={2}
              my={4}
              fontStyle="italic"
              color={textColor}
            >
              {children}
            </Box>
          ),
          strong: ({ children }) => (
            <Text as="strong" fontWeight="bold" color={headingColor}>
              {children}
            </Text>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
}

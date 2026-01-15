import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { getAllArticles } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about software engineering, Golang, and technology.",
};

function ArticleCard({
  title,
  date,
  excerpt,
  slug,
}: {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      _hover={{ textDecoration: "none" }}
      display="block"
      w="full"
    >
      <Box
        bg={{ base: "white", _dark: "gray.900" }}
        borderRadius="xl"
        border="1px solid"
        borderColor={{ base: "gray.200", _dark: "gray.800" }}
        p={{ base: 5, md: 6 }}
        transition="all 0.2s"
        _hover={{
          borderColor: { base: "accent.600", _dark: "accent.500" },
          transform: "translateY(-2px)",
          shadow: "md",
        }}
      >
        <VStack align="stretch" spacing={2}>
          {date && (
            <Text
              fontSize="sm"
              color={{ base: "gray.500", _dark: "gray.500" }}
              fontFamily="mono"
            >
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Text>
          )}
          <Heading
            as="h2"
            fontSize={{ base: "lg", md: "xl" }}
            fontFamily="heading"
            color={{ base: "gray.800", _dark: "gray.100" }}
          >
            {title}
          </Heading>
          <Text
            fontSize="md"
            color={{ base: "gray.600", _dark: "gray.400" }}
            noOfLines={2}
          >
            {excerpt}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
}

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <Container maxW="container.md" px={{ base: 4, md: 8 }} py={{ base: 12, md: 16 }}>
      <VStack spacing={10} align="stretch">
        <VStack spacing={3} textAlign="center">
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontFamily="heading"
            color={{ base: "gray.800", _dark: "gray.50" }}
          >
            Blog
          </Heading>
          <Text
            fontSize="lg"
            color={{ base: "gray.600", _dark: "gray.400" }}
            maxW="md"
          >
            Thoughts on software engineering, technology, and everything in between.
          </Text>
        </VStack>

        {articles.length === 0 ? (
          <Box
            textAlign="center"
            py={12}
            bg={{ base: "gray.50", _dark: "gray.900" }}
            borderRadius="xl"
          >
            <Text color={{ base: "gray.500", _dark: "gray.500" }}>
              No articles yet. Check back soon!
            </Text>
          </Box>
        ) : (
          <VStack spacing={4} align="stretch">
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                title={article.title}
                date={article.date}
                excerpt={article.excerpt}
                slug={article.slug}
              />
            ))}
          </VStack>
        )}
      </VStack>
    </Container>
  );
}

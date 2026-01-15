import { Box, Container, Heading, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/articles";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

function BackArrow() {
  return (
    <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} boxSize={4}>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </Icon>
  );
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <Container maxW="container.md" px={{ base: 4, md: 8 }} py={{ base: 8, md: 12 }}>
      <VStack spacing={8} align="stretch">
        <Link
          href="/blog"
          display="inline-flex"
          alignItems="center"
          gap={2}
          fontSize="sm"
          fontWeight="medium"
          color={{ base: "gray.600", _dark: "gray.400" }}
          _hover={{ color: { base: "accent.600", _dark: "accent.400" } }}
          w="fit-content"
        >
          <BackArrow />
          Back to Blog
        </Link>

        <VStack spacing={4} align="stretch">
          {article.date && (
            <Text
              fontSize="sm"
              color={{ base: "gray.500", _dark: "gray.500" }}
              fontFamily="mono"
            >
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Text>
          )}
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontFamily="heading"
            color={{ base: "gray.800", _dark: "gray.50" }}
            lineHeight="shorter"
          >
            {article.title}
          </Heading>
        </VStack>

        <Box
          bg={{ base: "white", _dark: "gray.900" }}
          borderRadius="2xl"
          border="1px solid"
          borderColor={{ base: "gray.200", _dark: "gray.800" }}
          p={{ base: 6, md: 10 }}
        >
          <MarkdownRenderer content={article.content} />
        </Box>
      </VStack>
    </Container>
  );
}

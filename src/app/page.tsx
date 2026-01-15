"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  IconButton,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import NextImage from "next/image";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  EmailIcon,
} from "@/components/Icons";

interface CareerItem {
  company: string;
  role: string;
  period: string;
  logo: string;
  url: string;
  current?: boolean;
}

const careerData: CareerItem[] = [
  {
    company: "Salsa",
    role: "Software Engineer",
    period: "2026 — Present",
    logo: "/salsa.png",
    url: "https://salsa.dev",
    current: true,
  },
  {
    company: "Mercado Libre",
    role: "Software Engineer",
    period: "2024 — 2026",
    logo: "/mercadolivre.png",
    url: "https://mercadolivre.com.br",
  },
  {
    company: "NowCM",
    role: "Software Engineer",
    period: "2023 — 2024",
    logo: "/nowcm.png",
    url: "https://nowcm.eu",
  },
  {
    company: "Minutrade",
    role: "Software Engineer",
    period: "2022 — 2023",
    logo: "/minutrade.png",
    url: "https://minu.co",
  },
];

function HeroSection() {
  const headingColor = useColorModeValue("gray.800", "gray.50");
  const accentColor = useColorModeValue("accent.600", "accent.400");
  const subtitleColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box py={{ base: 16, md: 24 }}>
      <VStack spacing={6} textAlign="center">
        <Box
          borderRadius="full"
          overflow="hidden"
          boxSize={{ base: "150px", md: "180px" }}
          border="4px solid"
          borderColor={accentColor}
          boxShadow="xl"
        >
          <NextImage
            src="/me.jpeg"
            alt="Marcos Nikel"
            width={180}
            height={180}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Box>

        <VStack spacing={3}>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontFamily="heading"
            color={headingColor}
          >
            Marcos Nikel 🇧🇷
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color={accentColor} fontWeight="medium">
            Software Engineer
          </Text>
          <Text fontSize="md" color={subtitleColor} maxW="lg" textAlign="center" lineHeight="tall">
            Software engineer who loves building things — lately with a little help from{" "}
            <Text
              as="span"
              color="orange.400"
              fontWeight="semibold"
              fontStyle="italic"
            >
              Claude
            </Text>
            {" "}🤖. When not coding, you'll find me chasing marathon finish lines or pretending I know what I'm doing at the gym.
          </Text>
        </VStack>

        <HStack spacing={4} pt={4}>
          <IconButton
            as="a"
            href="https://github.com/marcossnikel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            icon={<GitHubIcon boxSize={5} />}
            variant="ghost"
            size="lg"
            color={useColorModeValue("gray.600", "gray.400")}
            _hover={{ color: accentColor, bg: useColorModeValue("gray.100", "gray.800") }}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/mnikel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            icon={<LinkedInIcon boxSize={5} />}
            variant="ghost"
            size="lg"
            color={useColorModeValue("gray.600", "gray.400")}
            _hover={{ color: accentColor, bg: useColorModeValue("gray.100", "gray.800") }}
          />
          <IconButton
            as="a"
            href="https://x.com/marcosnikel_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            icon={<TwitterIcon boxSize={5} />}
            variant="ghost"
            size="lg"
            color={useColorModeValue("gray.600", "gray.400")}
            _hover={{ color: accentColor, bg: useColorModeValue("gray.100", "gray.800") }}
          />
          <IconButton
            as="a"
            href="mailto:marcosnikeldev@gmail.com"
            aria-label="Email"
            icon={<EmailIcon boxSize={5} />}
            variant="ghost"
            size="lg"
            color={useColorModeValue("gray.600", "gray.400")}
            _hover={{ color: accentColor, bg: useColorModeValue("gray.100", "gray.800") }}
          />
        </HStack>
      </VStack>
    </Box>
  );
}

function AboutSection() {
  const headingColor = useColorModeValue("gray.800", "gray.50");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const accentColor = useColorModeValue("accent.600", "accent.400");
  const bgColor = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.800");

  return (
    <Box py={{ base: 12, md: 16 }}>
      <VStack spacing={8} align="stretch">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontFamily="heading"
          color={headingColor}
          textAlign="center"
        >
          About Me
        </Heading>

        <Box
          bg={bgColor}
          borderRadius="2xl"
          border="1px solid"
          borderColor={borderColor}
          p={{ base: 6, md: 10 }}
          boxShadow="sm"
        >
          <VStack spacing={5} align="stretch">
            <Text color={textColor} fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
              I have always been close to computers since I was a kid. I spent my whole childhood
              playing Perfect World since I was 6 years old and got my first contact with
              programming when I was 10, creating my own server. Life happened and I ended up
              studying nutrition in high school and later started college in that field. After
              studying nutrition for a whole year before pivoting to Computer Science, this was the
              best decision I ever made, transforming a hobby into my career.
            </Text>

            <Text color={textColor} fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
              What drives me is the joy of creating things—whether it's building a new feature, 
              solving a complex problem, or bringing an idea to life. I believe the best products 
              come from great collaboration, and I genuinely enjoy working with people, learning 
              from different perspectives, and building meaningful relationships along the way.
            </Text>

            <Text color={textColor} fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
              Outside of work, the only thing I like more than coding is challenging myself 
              physically—in the gym, running, or any activity that pushes my limits. Currently 
              I'm at{" "}
              <Link
                href="https://salsa.dev"
                isExternal
                color={accentColor}
                fontWeight="semibold"
              >
                Salsa
              </Link>
              , where I continue doing what I love: creating and collaborating.
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}

function CareerSection() {
  const headingColor = useColorModeValue("gray.800", "gray.50");
  const bgColor = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const periodColor = useColorModeValue("gray.500", "gray.500");
  const accentColor = useColorModeValue("accent.600", "accent.400");
  const hoverBg = useColorModeValue("gray.50", "gray.800");
  const logoBg = useColorModeValue("gray.100", "gray.800");

  return (
    <Box py={{ base: 12, md: 16 }}>
      <VStack spacing={8} align="stretch">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontFamily="heading"
          color={headingColor}
          textAlign="center"
        >
          Career
        </Heading>

        <VStack spacing={4} align="stretch">
          {careerData.map((item) => (
            <Link
              key={item.company}
              href={item.url}
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <Flex
                bg={bgColor}
                borderRadius="xl"
                border="1px solid"
                borderColor={borderColor}
                p={4}
                align="center"
                gap={4}
                transition="all 0.2s"
                cursor="pointer"
                _hover={{ bg: hoverBg, borderColor: accentColor }}
              >
                <Box
                  flexShrink={0}
                  boxSize="48px"
                  borderRadius="lg"
                  bg={logoBg}
                  overflow="hidden"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <NextImage
                    src={item.logo}
                    alt={item.company}
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                <Box flex="1" minW={0}>
                  <HStack spacing={2}>
                    <Text fontWeight="semibold" color={headingColor} _groupHover={{ color: accentColor }}>
                      {item.company}
                    </Text>
                    {item.current && (
                      <Badge colorScheme="teal" fontSize="xs">
                        Current
                      </Badge>
                    )}
                  </HStack>
                  <Text fontSize="sm" color={textColor}>
                    {item.role}
                  </Text>
                </Box>

                <Text fontSize="sm" color={periodColor} fontFamily="mono" whiteSpace="nowrap">
                  {item.period}
                </Text>
              </Flex>
            </Link>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}

const techStack = [
  { name: "TypeScript", category: "language" },
  { name: "Golang", category: "language" },
  { name: "Kotlin", category: "language" },
  { name: "Java", category: "language" },
  { name: "Python", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Redis", category: "database" },
  { name: "AWS", category: "cloud" },
  { name: "GCP", category: "cloud" },
  { name: "Docker", category: "devops" },
  { name: "Kubernetes", category: "devops" },
  { name: "Gen AI", category: "ai" },
];

function TechStackSection() {
  const headingColor = useColorModeValue("gray.800", "gray.50");
  const bgColor = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const tagBg = useColorModeValue("gray.100", "gray.800");
  const tagHoverBg = useColorModeValue("accent.50", "accent.900");
  const accentColor = useColorModeValue("accent.600", "accent.400");

  return (
    <Box py={{ base: 12, md: 16 }}>
      <VStack spacing={8} align="stretch">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontFamily="heading"
          color={headingColor}
          textAlign="center"
        >
          Tech Stack
        </Heading>

        <Text
          color={textColor}
          textAlign="center"
          fontSize={{ base: "md", md: "lg" }}
          maxW="lg"
          mx="auto"
        >
          Technologies I've worked with throughout my career
        </Text>

        <Box
          bg={bgColor}
          borderRadius="2xl"
          border="1px solid"
          borderColor={borderColor}
          p={{ base: 6, md: 8 }}
          boxShadow="sm"
        >
          <Flex flexWrap="wrap" gap={3} justify="center">
            {techStack.map((tech) => (
              <Box
                key={tech.name}
                px={4}
                py={2}
                bg={tagBg}
                borderRadius="full"
                fontSize="sm"
                fontWeight="medium"
                color={textColor}
                transition="all 0.2s"
                cursor="default"
                _hover={{ bg: tagHoverBg, color: accentColor }}
              >
                {tech.name}
              </Box>
            ))}
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
}

export default function HomePage() {
  return (
    <Container maxW="container.md" px={{ base: 4, md: 8 }}>
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <TechStackSection />
    </Container>
  );
}

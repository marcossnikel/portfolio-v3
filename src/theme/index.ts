import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  accent: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#06768d",
    700: "#055a6b",
    800: "#044652",
    900: "#033039",
    950: "#021c22",
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#0a0c10",
  },
};

const fonts = {
  heading: `'Playfair Display', serif`,
  body: `'Source Sans 3', sans-serif`,
};

const styles = {
  global: (props: { colorMode: string }) => ({
    body: {
      bg: props.colorMode === "dark" ? "gray.950" : "gray.50",
      color: props.colorMode === "dark" ? "gray.100" : "gray.800",
    },
  }),
};

const components = {
  Button: {
    variants: {
      accent: (props: { colorMode: string }) => ({
        bg: props.colorMode === "dark" ? "accent.700" : "accent.600",
        color: "white",
        _hover: {
          bg: props.colorMode === "dark" ? "accent.600" : "accent.700",
        },
      }),
    },
  },
  Link: {
    baseStyle: (props: { colorMode: string }) => ({
      color: props.colorMode === "dark" ? "accent.400" : "accent.600",
      _hover: {
        textDecoration: "none",
        color: props.colorMode === "dark" ? "accent.300" : "accent.500",
      },
    }),
  },
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles,
  components,
});

export default theme;

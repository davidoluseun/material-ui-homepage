import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "480px",
  md: "600px",
  lg: "960px",
  xl: "1280px",
});

const styles = {
  global: (props: any) => ({
    body: {
      color: mode("rgba(0, 0, 0, .87)", "#fff")(props),
      bg: mode("#fff", "#212121")(props),
    },
  }),
};

const theme = extendTheme({
  breakpoints,
  styles,
  fonts: {
    body: "Roboto, Helvetica, Arial, sans-serif",
    heading: "Roboto, Helvetica, Arial, sans-serif",
  },
  sizes: {
    xs: "240px",
  },
  colors: {
    blue: "#1976d2",
    dark: "#212121",
  },
});

export default theme;

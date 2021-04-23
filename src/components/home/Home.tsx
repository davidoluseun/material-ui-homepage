import { Box } from "@chakra-ui/react";
import Hero from "../hero/Hero";
import Code from "../code/Code";
import Themes from "../themes/Themes";
import Sponsors from "../sponsors/Sponsors";
import Praise from "../praise/Praise";
import Users from "../users/Users";

const Home = () => {
  return (
    <Box as="main" overflow="hidden">
      <Hero />
      <Code />
      <Themes />
      <Sponsors />
      <Praise />
      <Users />
    </Box>
  );
};

export default Home;

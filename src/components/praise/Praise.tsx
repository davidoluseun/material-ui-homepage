import {
  Box,
  Heading,
  Text,
  Flex,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import Tweet from "./Tweet";
import TwitterUser01 from "../../images/tweets/twitter_user01.jpg";
import TwitterUser02 from "../../images/tweets/twitter_user02.jpg";
import TwitterUser03 from "../../images/tweets/twitter_user03.jpg";

const Praise = () => {
  const { colorMode } = useColorMode();

  return (
    <Box as="section" pt="10" px="4">
      <Divider
        opacity=".12"
        borderColor={colorMode === "light" ? "#000" : "#fff"}
      />
      
      <Box pt="20" textAlign="center">
        <Heading
          as="h2"
          mb=".35em"
          fontSize="2.125rem"
          fontWeight="normal"
          lineHeight="1.235"
          letterSpacing=".00735em"
        >
          Praise for Material-UI
        </Heading>
        <Text mb=".35em">Here's what some of our users are saying.</Text>
        <Flex my="10" direction={{ base: "column", lg: "row" }}>
          <Tweet
            profile={TwitterUser01}
            name="Aumit Leon"
            username="@aumitleon"
            href="https://twitter.com/aumitleon/status/1210396946566963200"
            text1="Material-UI continues to blow my mind how easily I can put
              together really aesthetic and functional components and minimize
              overhead."
          />
          <Tweet
            profile={TwitterUser02}
            name="Samantha Durrant"
            username="@SamDurrant_"
            href="https://twitter.com/SamDurrant_/status/1214741763455209473"
            text1="Began coding out the front end of my app today. Used"
            text2="for the first time and love how easy it
            is to make things look nice. It’s also really cool to see all the
            hard work building out the backend of my app come to life in the 
            front end!"
          />
          <Tweet
            profile={TwitterUser03}
            name="Derek Shanks"
            username="@fragileglass"
            href="https://twitter.com/fragileglass/status/1205256087290753025"
            text1="It’s a game changer with how nicely it works with React. It’s made working with React so much more enjoyable. Everything is configurable and predictable. Bootstrap was killing me. It was hijacking my whole project."
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Praise;

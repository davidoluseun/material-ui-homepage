import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import CustomLinkButton from "../common/CustomLinkButton";
import Nasa from "../../images/users/nasa.svg";
import Walmart from "../../images/users/walmart_labs.svg";
import Capgemini from "../../images/users/capgemini.svg";
import Uniglo from "../../images/users/uniqlo.svg";
import Bethesda from "../../images/users/bethesda.svg";
import JPMorgan from "../../images/users/jpmorgan.svg";
import Shutterstock from "../../images/users/shutterstock.svg";
import Netflix from "../../images/users/netflix.svg";
import Amazon from "../../images/users/amazon.svg";
import Unit from "../../images/users/unity.svg";
import Spotify from "../../images/users/spotify.svg";

const Users = () => {
  const { colorMode } = useColorMode();

  let btnHoverBg: string;

  if (colorMode === "light") btnHoverBg = "rgba(0, 0, 0, .04)";
  else btnHoverBg = "rgba(255, 255, 255, .08)";

  return (
    <Box as="section" textAlign="center" p="4" pt="10">
      <Box
        mb="8"
        mx={{ base: "0", lg: "auto" }}
        maxW={{ base: "100%", lg: "960px" }}
      >
        <Divider
          opacity=".12"
          borderColor={colorMode === "light" ? "#000" : "#fff"}
        />

        <Box pt="20" px="12">
          <Heading
            as="h2"
            mb=".35em"
            fontSize="2.125rem"
            fontWeight="normal"
            lineHeight="1.235"
            letterSpacing=".00735em"
          >
            Who's using Material-UI?
          </Heading>
          <Text
            mb=".35em"
            fontSize="1rem"
            lineHeight="1.5"
            fontWeight="normal"
            letterSpacing=".00938em"
          >
            Join these and other great organisations!
          </Text>
          <Flex my="10" justify="center" flexWrap="wrap">
            <Image my="3" mx="6" src={Nasa} htmlWidth="49" htmlHeight="40" />
            <Image
              mt="13px"
              mx="1"
              mb="3"
              src={Walmart}
              alt="Walmart Labs"
              htmlWidth="205"
              htmlHeight="39"
            />
            <Image
              my="3"
              mx="6"
              src={Capgemini}
              alt="Capgemini"
              htmlWidth="180"
              htmlHeight="40"
            />
            <Image
              my="3"
              mx="6"
              src={Uniglo}
              alt="Uniqlo"
              htmlWidth="40"
              htmlHeight="40"
            />
            <Image
              my="3"
              mx="6"
              src={Bethesda}
              alt="Bethesda"
              htmlWidth="196"
              htmlHeight="26"
            />
            <Image
              my="3"
              mx="6"
              src={JPMorgan}
              alt="J.P. Morgan"
              htmlWidth="198"
              htmlHeight="40"
            />
            <Image
              my="3"
              mx="6"
              src={Shutterstock}
              alt="Shutterstock"
              htmlWidth="205"
              htmlHeight="29"
            />
            <Image
              my="3"
              mx="6"
              src={Netflix}
              alt="Netflix"
              htmlWidth="111"
              htmlHeight="29"
            />
            <Image
              mt="19.2px"
              mx="6"
              mb="3"
              src={Amazon}
              alt="Amazon"
              htmlWidth="119"
              htmlHeight="36"
            />
            <Image
              mt="1"
              mx="6"
              mb="3"
              src={Unit}
              alt="Unity"
              htmlWidth="138"
              htmlHeight="50"
            />
            <Image
              mb="3"
              mx="6"
              src={Spotify}
              alt="Spotify"
              htmlWidth="180"
              htmlHeight="54"
            />
          </Flex>
          <Text
            mb=".35em"
            fontSize="1rem"
            lineHeight="1.5"
            fontWeight="normal"
            letterSpacing=".00938em"
          >
            Are you using Material-UI?
          </Text>

          <CustomLinkButton
            mt="4"
            _hover={{ bg: btnHoverBg }}
            border={
              colorMode === "light"
                ? "1px solid rgba(0, 0, 0, .23)"
                : "1px solid rgba(255, 255, 255, .23)"
            }
            target="_blank"
            href="https://github.com/mui-org/material-ui/issues/22426"
          >
            Let Us Know!
          </CustomLinkButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Users;

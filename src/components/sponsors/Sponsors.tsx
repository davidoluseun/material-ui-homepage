import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import Octopus from "../../images/sponsors/octopus.png";
import DoitIntl from "../../images/sponsors/doit_intl.png";
import Tidelift from "../../images/sponsors/tidelift.png";
import Bit from "../../images/sponsors/bit.png";
import Elevator from "../../images/sponsors/elevator.png";
import Textemall from "../../images/sponsors/textemall.png";
import Canadacasino from "../../images/sponsors/canadacasino.png";
import Hoodiebees from "../../images/sponsors/hoodiebees.png";

const Sponsors = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="section"
      textAlign="center"
      px={{ base: "4", md: "6" }}
      mx={{ base: "0", lg: "auto" }}
      maxW={{ base: "100%", lg: "960px" }}
    >
      <Divider
        opacity=".12"
        borderColor={colorMode === "light" ? "#000" : "#fff"}
      />

      <Box py="8">
        <Heading
          as="h2"
          mt="10"
          mb="4"
          fontSize="30px"
          fontWeight="normal"
          lineHeight="1.235"
          letterSpacing=".00735em"
        >
          Material-UI's sponsors
        </Heading>
        <Text mb="4">
          The continued development and maintenance of Material-UI is made
          possible by these generous sponsors:
        </Text>

        <Box as="section">
          <Heading
            as="h3"
            mt="10"
            mb="4"
            fontSize="1.5rem"
            fontWeight="normal"
            lineHeight="1.334"
            letterSpacing="0em"
          >
            Diamond 💎
          </Heading>
          <Text d="flex" justifyContent="center" mb="4">
            <Link
              mr="4"
              href="https://octopus.com/?utm_source=materialui&utm_medium=referral"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                htmlWidth="128"
                htmlHeight="128"
                src={Octopus}
                title="Repeatable, reliable deployments"
                alt=""
              />
            </Link>
            <Link
              mr="4"
              href="https://www.doit-intl.com/?utm_source=materialui&utm_medium=referral"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                htmlWidth="128"
                htmlHeight="128"
                src={DoitIntl}
                title="Management Platform for Google Cloud and AWS"
                alt=""
              />
            </Link>
          </Text>
          <Text mb="4">
            <Box as="em">1/3 slots available</Box>
          </Text>
        </Box>

        <Box as="section">
          <Heading
            as="h3"
            mt="10"
            mb="4"
            fontSize="1.5rem"
            fontWeight="normal"
            lineHeight="1.334"
            letterSpacing="0em"
          >
            Gold 🏆
          </Heading>
          <Text d="flex" justifyContent="center" mb="4">
            <Link
              mr="4"
              href="https://tidelift.com/subscription/pkg/npm-material-ui?utm_source=npm-material-ui&utm_medium=referral&utm_campaign=homepage"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                htmlWidth="96"
                htmlHeight="96"
                src={Tidelift}
                title="Repeatable, reliable deployments"
              />
            </Link>
            <Link
              mr="4"
              href="https://www.doit-intl.com/?utm_source=materialui&utm_medium=referral"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                htmlWidth="96"
                htmlHeight="96"
                src={Bit}
                title="Management Platform for Google Cloud and AWS"
              />
            </Link>
          </Text>
          <Text d="flex" justifyContent="center" mb="4">
            <Link
              mr="4"
              href="https://octopus.com/?utm_source=materialui&utm_medium=referral"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                htmlWidth="191"
                htmlHeight="57"
                src={Elevator}
                title="Repeatable, reliable deployments"
              />
            </Link>
          </Text>
          <Text d="flex" justifyContent="center" mb="4">
            <Link
              mr="4"
              href="https://octopus.com/?utm_source=materialui&utm_medium=referral"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                htmlWidth="96"
                htmlHeight="96"
                src={Textemall}
                title="Repeatable, reliable deployments"
              />
            </Link>
            <Link
              mr="4"
              href="https://www.doit-intl.com/?utm_source=materialui&utm_medium=referral"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                htmlWidth="96"
                htmlHeight="96"
                src={Canadacasino}
                title="Management Platform for Google Cloud and AWS"
              />
            </Link>
            <Link
              mr="4"
              href="https://www.doit-intl.com/?utm_source=materialui&utm_medium=referral"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                htmlWidth="96"
                htmlHeight="96"
                src={Hoodiebees}
                title="Management Platform for Google Cloud and AWS"
              />
            </Link>
          </Text>
        </Box>

        <Box as="section">
          <Heading
            as="h3"
            mt="10"
            mb="4"
            fontSize="1.5rem"
            fontWeight="normal"
            lineHeight="1.334"
            letterSpacing="0em"
          >
            There are more!
          </Heading>
          <Text
            mb="4"
            fontSize="1rem"
            fontWeight="normal"
            lineHeight="1.5"
            letterSpacing=".00938em"
          >
            See the full list of{" "}
            <Link
              color={colorMode === "light" ? "rgb(220, 0, 78)" : "#f48fb1"}
              href="https://material-ui.com/discover-more/backers/"
            >
              our sponsors
            </Link>
            , and learn how you can contribute to the future of Material-UI.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Sponsors;

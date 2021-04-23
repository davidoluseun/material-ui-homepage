import * as React from "react";
import {
  Box,
  Flex,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import {
  MdNotifications,
  MdInvertColors,
  MdSearch,
  MdBrightness4,
  MdBrightness7,
  MdFormatTextdirectionRToL,
} from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import CustomDrawer from "../common/CustomDrawer";
import CustomMenu from "../common/CustomMenu";

const Navbar = () => {
  const [inputGroupWidth, setInputGroupWidth] = React.useState<string>("200px");
  const [search, setSearch] = React.useState<string>("");
  const { colorMode, toggleColorMode } = useColorMode();

  let btnHoverBg: string;
  let btnFocusBg: string;

  if (colorMode === "light") {
    btnHoverBg = "rgba(0, 0, 0, .04)";
    btnFocusBg = "#5e9fdf";
  } else {
    btnHoverBg = "rgba(255, 255, 255, .08)";
    btnFocusBg = "#7b7b7b";
  }

  const handleFocus = (): void => setInputGroupWidth("250px");

  const handleBlur = (): void => setInputGroupWidth("200px");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSearch(e.currentTarget.value);

  return (
    <Box as="header" top="0" zIndex="sticky" position="sticky">
      <Flex
        w="100%"
        color="#fff"
        align="center"
        overflow="hidden"
        justify="space-between"
        px={{ base: "4", md: "6" }}
        minH={{ base: "56px", md: "64px" }}
        bg={colorMode === "light" ? "blue" : "#333"}
      >
        <CustomDrawer />

        <Flex align="center">
          <InputGroup
            ml="2"
            mr="4"
            w={inputGroupWidth}
            d={{ base: "none", md: "block" }}
            transition="width 300ms cubic-bezier(.4, 0, .2, 1) 0ms"
          >
            <InputLeftElement
              h="35px"
              w="72px"
              children={<MdSearch size="24px" />}
            />
            <Input
              py="2"
              pl="72px"
              pr="2"
              border="0"
              h="35px"
              placeholder="Search..."
              bg="rgba(255, 255, 255, .15)"
              _hover={{ bg: "rgba(255, 255, 255, .25)" }}
              type="search"
              value={search}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </InputGroup>

          <Flex align="center">
            <CustomMenu />

            <IconButton
              p="3"
              size="lg"
              bg="transparent"
              borderRadius="full"
              aria-label=""
              _hover={{ bg: btnHoverBg }}
              _focus={{ bg: btnFocusBg }}
              _active={{ bg: btnFocusBg }}
              icon={<MdNotifications size="24px" />}
            />

            <Link
              p="3"
              w="3rem"
              h="3rem"
              bg="transparent"
              d="inline-flex"
              borderRadius="full"
              alignItems="center"
              justifyContent="center"
              _hover={{ bg: btnHoverBg }}
              _focus={{ bg: btnFocusBg }}
              _active={{ bg: btnFocusBg }}
              href="https://material-ui.com/customization/color/#playground"
              target="_blank"
            >
              <MdInvertColors size="24px" />
            </Link>
            <Link
              p="3"
              w="3rem"
              h="3rem"
              bg="transparent"
              d="inline-flex"
              borderRadius="full"
              alignItems="center"
              justifyContent="center"
              _hover={{ bg: btnHoverBg }}
              _focus={{ bg: btnFocusBg }}
              _active={{ bg: btnFocusBg }}
              href="https://github.com/mui-org/material-ui"
            >
              <FaGithub size="24px" />
            </Link>

            <IconButton
              p="3"
              size="lg"
              bg="transparent"
              borderRadius="full"
              aria-label=""
              onClick={toggleColorMode}
              _hover={{ bg: btnHoverBg }}
              _focus={{ bg: btnFocusBg }}
              _active={{ bg: btnFocusBg }}
              icon={
                colorMode === "light" ? (
                  <MdBrightness4 size="24px" />
                ) : (
                  <MdBrightness7 size="24px" />
                )
              }
            />

            <IconButton
              p="3"
              size="lg"
              bg="transparent"
              borderRadius="full"
              aria-label=""
              _hover={{ bg: btnHoverBg }}
              _focus={{ bg: btnFocusBg }}
              _active={{ bg: btnFocusBg }}
              icon={<MdFormatTextdirectionRToL size="24px" />}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

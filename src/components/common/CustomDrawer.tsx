import {
  Icon,
  Link,
  Image,
  Text,
  Flex,
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { MdMenu, MdAdd } from "react-icons/md";
import OctopusLight from "../../images/drawer/octopus_light.png";
import OctopusDark from "../../images/drawer/octopus_dark.png";
import DoitIntl from "../../images/drawer/doit_intl.png";

const CustomDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  let iconBtnHoverBg: string;
  let iconBtnFocusBg: string;
  let btnHoverBg: string;
  let btnFocusBg: string;
  let titleHoverColor: string;

  if (colorMode === "light") {
    iconBtnHoverBg = "rgba(0, 0, 0, .04)";
    iconBtnFocusBg = "#5e9fdf";
    btnHoverBg = "rgba(0, 0, 0, .04)";
    btnFocusBg = "#bdbdbd";
    titleHoverColor = "blue";
  } else {
    iconBtnHoverBg = "rgba(255, 255, 255, .08)";
    iconBtnFocusBg = "#7b7b7b";
    btnHoverBg = "rgba(255, 255, 255, .08)";
    btnFocusBg = "#636363";
    titleHoverColor = "#90caf9";
  }

  return (
    <>
      <IconButton
        size="lg"
        onClick={onOpen}
        p="3"
        bg="transparent"
        borderRadius="full"
        aria-label=""
        _hover={{ bg: iconBtnHoverBg }}
        _focus={{ bg: iconBtnFocusBg }}
        _active={{ bg: iconBtnFocusBg }}
        icon={<MdMenu size="24px" />}
      />
      <Drawer
        size="xs"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        closeOnEsc={true}
        autoFocus={false}
      >
        <DrawerOverlay opacity=".5">
          <DrawerContent bg={colorMode === "light" ? "#fff" : "dark"}>
            <DrawerBody p="0">
              <Flex
                pl="6"
                minH="64px"
                direction="column"
                justify="center"
                align="flex-start"
                color={
                  colorMode === "light"
                    ? "rgba(0,0,0,.54)"
                    : "rgba(255, 255, 255, .7)"
                }
              >
                <Link
                  mb="1"
                  color="inherit"
                  lineHeight="1.6"
                  borderRadius="sm"
                  fontSize="1.25rem"
                  fontWeight="medium"
                  letterSpacing=".0075em"
                  _hover={{ color: titleHoverColor, textDecor: "underline" }}
                  href="https://material-ui.com/"
                >
                  Material-UI
                </Link>
                <Link
                  color="inherit"
                  fontWeight="400"
                  lineHeight="1.66"
                  borderRadius="sm"
                  fontSize=".75rem"
                  letterSpacing=".03333em"
                  href="https://material-ui.com/versions/"
                >
                  v4.11.1
                </Link>
              </Flex>

              <Divider
                opacity=".12"
                borderColor={colorMode === "light" ? "#000" : "#fff"}
              />

              <Flex my="4" mx="6" direction="column">
                <Text
                  mb=".35em"
                  fontSize=".75rem"
                  fontWeight="normal"
                  lineHeight="1.66"
                  letterSpacing=".03333em"
                  color={
                    colorMode === "light"
                      ? "rgba(0,0,0,.54)"
                      : "rgba(255, 255, 255, .7)"
                  }
                >
                  Diamond Sponsors
                </Text>
                <Link
                  mb="2"
                  w="125px"
                  h="35px"
                  borderRadius="sm"
                  href="https://octopus.com/?utm_source=materialui&utm_medium=referral"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={colorMode === "light" ? OctopusLight : OctopusDark}
                    htmlWidth="125px"
                    htmlHeight="35px"
                    alt=""
                  />
                </Link>
                <Link
                  mb="2"
                  w="125px"
                  h="35px"
                  borderRadius="sm"
                  href="https://www.doit-intl.com/?utm_source=materialui&utm_medium=referral"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={DoitIntl}
                    htmlWidth="125px"
                    htmlHeight="35px"
                    alt=""
                  />
                </Link>
                <Link
                  mb="2"
                  w="125px"
                  h="35px"
                  d="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="4px"
                  opacity=".22"
                  transition="color 300ms cubic-bezier(.4, 0, .2, 1) 0ms, border-color 300ms cubic-bezier(.4, 0, .2, 1) 0ms"
                  color={colorMode === "light" ? "#000" : "#fff"}
                  border={
                    colorMode === "light"
                      ? "1px dashed #000"
                      : "1px dashed #fff"
                  }
                  _hover={{ opacity: ".54" }}
                  href="https://material-ui.com/discover-more/backers/#diamond"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon as={MdAdd} boxSize="24px" />
                </Link>
              </Flex>

              <Box py="2">
                <Button
                  w="100%"
                  py="6px"
                  pl="6"
                  pr="2"
                  fontSize=".875rem"
                  fontWeight="medium"
                  lineHeight="1.75"
                  bg="transparent"
                  justifyContent="flex-start"
                  _hover={{ bg: btnHoverBg }}
                  _focus={{ bg: btnFocusBg, outline: "none" }}
                >
                  Getting Started
                </Button>
                <Button
                  w="100%"
                  py="6px"
                  pl="6"
                  pr="2"
                  fontSize=".875rem"
                  fontWeight="medium"
                  lineHeight="1.75"
                  justifyContent="flex-start"
                  bg="transparent"
                  _hover={{ bg: btnHoverBg }}
                  _focus={{ bg: btnFocusBg, outline: "none" }}
                >
                  Components
                </Button>
                <Button
                  w="100%"
                  py="6px"
                  pl="6"
                  pr="2"
                  fontSize=".875rem"
                  fontWeight="medium"
                  lineHeight="1.75"
                  justifyContent="flex-start"
                  bg="transparent"
                  _hover={{ bg: btnHoverBg }}
                  _focus={{ bg: btnFocusBg, outline: "none" }}
                >
                  Components API
                </Button>
                <Button
                  w="100%"
                  py="6px"
                  pl="6"
                  pr="2"
                  fontSize=".875rem"
                  fontWeight="medium"
                  lineHeight="1.75"
                  justifyContent="flex-start"
                  bg="transparent"
                  _hover={{ bg: btnHoverBg }}
                  _focus={{ bg: btnFocusBg, outline: "none" }}
                >
                  Styles
                </Button>
                <Button
                  w="100%"
                  py="6px"
                  pl="6"
                  pr="2"
                  fontSize=".875rem"
                  fontWeight="medium"
                  lineHeight="1.75"
                  justifyContent="flex-start"
                  bg="transparent"
                  _hover={{ bg: btnHoverBg }}
                  _focus={{ bg: btnFocusBg, outline: "none" }}
                >
                  System
                </Button>
                <Button
                  w="100%"
                  py="6px"
                  pl="6"
                  pr="2"
                  fontSize=".875rem"
                  fontWeight="medium"
                  lineHeight="1.75"
                  justifyContent="flex-start"
                  bg="transparent"
                  _hover={{ bg: btnHoverBg }}
                  _focus={{ bg: btnFocusBg, outline: "none" }}
                >
                  Customization
                </Button>
                <Button
                  w="100%"
                  py="6px"
                  pl="6"
                  pr="2"
                  fontSize=".875rem"
                  fontWeight="medium"
                  lineHeight="1.75"
                  justifyContent="flex-start"
                  bg="transparent"
                  _hover={{ bg: btnHoverBg }}
                  _focus={{ bg: btnFocusBg, outline: "none" }}
                >
                  Guides
                </Button>
                <Button
                  w="100%"
                  py="6px"
                  pl="6"
                  pr="2"
                  fontSize=".875rem"
                  fontWeight="medium"
                  lineHeight="1.75"
                  justifyContent="flex-start"
                  bg="transparent"
                  _hover={{ bg: btnHoverBg }}
                  _focus={{ bg: btnFocusBg, outline: "none" }}
                >
                  Premium themes
                </Button>
                <Button
                  w="100%"
                  py="6px"
                  pl="6"
                  pr="2"
                  fontSize=".875rem"
                  fontWeight="medium"
                  lineHeight="1.75"
                  justifyContent="flex-start"
                  bg="transparent"
                  _hover={{ bg: btnHoverBg }}
                  _focus={{ bg: btnFocusBg, outline: "none" }}
                >
                  Discover More
                </Button>
                <Button
                  w="100%"
                  py="6px"
                  pl="6"
                  pr="2"
                  fontSize=".875rem"
                  fontWeight="medium"
                  lineHeight="1.75"
                  justifyContent="flex-start"
                  bg="transparent"
                  _hover={{ bg: btnHoverBg }}
                  _focus={{ bg: btnFocusBg, outline: "none" }}
                >
                  versions
                </Button>
                <Button
                  w="100%"
                  py="6px"
                  pl="6"
                  pr="2"
                  fontSize=".875rem"
                  fontWeight="medium"
                  lineHeight="1.75"
                  justifyContent="flex-start"
                  bg="transparent"
                  _hover={{ bg: btnHoverBg }}
                  _focus={{ bg: btnFocusBg, outline: "none" }}
                >
                  Blog
                </Button>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default CustomDrawer;

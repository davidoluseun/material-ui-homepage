import * as React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { MdExpandMore, MdTranslate } from "react-icons/md";

const CustomMenu = () => {
  const [languageOption, setLanguageOption] = React.useState<string>("English");
  const { colorMode } = useColorMode();

  let btnHoverBg: string;
  let btnFocusBg: string;
  let itemBtnHoverBg: string;
  let itemBtnFocusBg: string;

  if (colorMode === "light") {
    btnHoverBg = "rgba(0, 0, 0, .04)";
    btnFocusBg = "#5e9fdf";
    itemBtnHoverBg = "rgba(0, 0, 0, .04)";
    itemBtnFocusBg = "rgba(0, 0, 0, .08)";
  } else {
    btnHoverBg = "rgba(255, 255, 255, .08)";
    btnFocusBg = "#7b7b7b";
    itemBtnHoverBg = "rgba(255, 255, 255, .08)";
    itemBtnFocusBg = "rgba(255, 255, 255, .16)";
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const language = e.currentTarget.textContent;
    if (language !== null) setLanguageOption(language);
  };

  return (
    <Menu offset={[0, -40]}>
      <MenuButton
        as={Button}
        px="2"
        py="6px"
        h="36px"
        minW="64px"
        bg="transparent"
        _hover={{ bg: btnHoverBg }}
        _focus={{ bg: btnFocusBg }}
        _active={{ bg: btnFocusBg }}
      >
        <MdTranslate size="24px" />
        <Box
          mr="1"
          ml="2"
          as="span"
          fontSize=".875rem"
          fontWeight="semibold"
          letterSpacing=".02857em"
          textTransform="uppercase"
          d={{ base: "none", lg: "inline" }}
        >
          {languageOption}
        </Box>
        <MdExpandMore size="20px" />
      </MenuButton>
      <MenuList
        minW="16px"
        minH="16px"
        borderRadius="4px"
        color={colorMode === "light" ? "#000" : "#fff"}
        bg={colorMode === "light" ? "#fff" : "#424242"}
        boxShadow="0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)"
      >
        <MenuItem
          _hover={{ bg: itemBtnHoverBg }}
          _focus={{ bg: itemBtnFocusBg }}
          _active={{ bg: itemBtnFocusBg }}
          onClick={handleClick}
        >
          English
        </MenuItem>
        <MenuItem
          _hover={{ bg: itemBtnHoverBg }}
          _focus={{ bg: itemBtnFocusBg }}
          _active={{ bg: itemBtnFocusBg }}
          onClick={handleClick}
        >
          中文
        </MenuItem>
        <MenuItem
          _hover={{ bg: itemBtnHoverBg }}
          _focus={{ bg: itemBtnFocusBg }}
          _active={{ bg: itemBtnFocusBg }}
          onClick={handleClick}
        >
          Русский
        </MenuItem>
        <MenuItem
          _hover={{ bg: itemBtnHoverBg }}
          _focus={{ bg: itemBtnFocusBg }}
          _active={{ bg: itemBtnFocusBg }}
          onClick={handleClick}
        >
          Português
        </MenuItem>
        <MenuItem
          _hover={{ bg: itemBtnHoverBg }}
          _focus={{ bg: itemBtnFocusBg }}
          _active={{ bg: itemBtnFocusBg }}
          onClick={handleClick}
        >
          Español
        </MenuItem>
        <MenuItem
          _hover={{ bg: itemBtnHoverBg }}
          _focus={{ bg: itemBtnFocusBg }}
          _active={{ bg: itemBtnFocusBg }}
          onClick={handleClick}
        >
          Français
        </MenuItem>
        <MenuItem
          _hover={{ bg: itemBtnHoverBg }}
          _focus={{ bg: itemBtnFocusBg }}
          _active={{ bg: itemBtnFocusBg }}
          onClick={handleClick}
        >
          Deutsch
        </MenuItem>
        <MenuItem
          _hover={{ bg: itemBtnHoverBg }}
          _focus={{ bg: itemBtnFocusBg }}
          _active={{ bg: itemBtnFocusBg }}
          onClick={handleClick}
        >
          日本語
        </MenuItem>
        <MenuDivider
          opacity=".12"
          borderColor={colorMode === "light" ? "#000" : "#fff"}
        />
        <MenuItem
          _hover={{ bg: itemBtnHoverBg }}
          _focus={{ bg: itemBtnFocusBg }}
          _active={{ bg: itemBtnFocusBg }}
        >
          Help to translate
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CustomMenu;

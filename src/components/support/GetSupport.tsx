import { Link } from "@chakra-ui/react";

const GetSupport = () => {
  return (
    <Link
      px="4"
      py="2"
      h="36px"
      right="0"
      top="100px"
      bg="#626980"
      color="#fff"
      alignItems="center"
      fontSize=".875rem"
      fontWeight="normal"
      lineHeight=".43"
      letterSpacing=".01071em"
      borderTopLeftRadius="18px"
      borderBottomLeftRadius="18px"
      position="absolute"
      d={{ base: "none", md: "flex" }}
      href="https://material-ui.com/getting-started/support/#professional-support-premium"
    >
      Get Professional Support
    </Link>
  );
};

export default GetSupport;

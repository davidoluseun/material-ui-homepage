import * as React from "react";
import { Link } from "@chakra-ui/react";

type Props = {
  color?: string;
  mb?: string;
  mt: string;
  border: string;
  _hover: object;
  href: string;
  target?: string;
  children: React.ReactNode;
};

const CustomLinkButton = ({ children, ...rest }: Props) => {
  return (
    <Link
      {...rest}
      py="5px"
      px="15px"
      lineHeight="1.75"
      fontWeight="medium"
      fontSize=".875rem"
      borderRadius="base"
      d="inline-block"
      letterSpacing=".02857em"
      textTransform="uppercase"
    >
      {children}
    </Link>
  );
};

export default CustomLinkButton;

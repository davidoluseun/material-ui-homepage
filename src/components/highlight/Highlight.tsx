import * as React from "react";
import { Flex, Box, Link } from "@chakra-ui/react";
import { MdStarBorder } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import BgStar from "../../images/bg_star.svg";

const Highlight = () => {
  const [starCount, setStarCount] = React.useState<number>(0);

  React.useEffect(() => {
    const getStarGazers = async () => {
      const response = await fetch(
        "https://api.github.com/repos/mui-org/material-ui",
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      const { watchers_count } = await response.json();
      setStarCount(watchers_count);
    };

    getStarGazers();
  }, []);
  return (
    <Flex py="4" justify="center" align="center">
      <Flex mr="2">
        <Link
          d="flex"
          bg="#eff3f6"
          bgImage={`url(${BgStar})`}
          alignItems="center"
          border="1px solid"
          borderColor="#cfd3d6"
          borderRadius={starCount ? ".25em 0 0 .25em" : ".25em"}
          color="#24292e"
          height="14px"
          py="2px"
          px="5px"
          fontSize="11px"
          fontWeight="semibold"
          lineHeight="14px"
          _hover={{ textDecor: "none" }}
          boxSizing="content-box"
          href="https://github.com/mui-org/material-ui"
          target="_blank"
          rel="noreferrer"
        >
          <MdStarBorder size="14px" />
          Star
        </Link>

        {starCount ? (
          <Link
            d="inline-block"
            bgColor="#fff"
            border="1px solid"
            borderLeft="0"
            borderColor="#ddddde"
            borderRadius="0 .25em .25em 0;"
            color="#24292e"
            height="14px"
            py="2px"
            px="5px"
            fontSize="11px"
            fontWeight="semibold"
            lineHeight="14px"
            _hover={{ textDecor: "none", color: "#0366d6" }}
            boxSizing="content-box"
            href="https://github.com/mui-org/material-ui/stargazers"
            target="_blank"
            rel="noreferrer"
          >
            {starCount.toLocaleString()}
          </Link>
        ) : null}
      </Flex>

      <Flex>
        <Flex>
          <Link
            pr="2"
            pl="6px"
            py="1px"
            d="flex"
            color="#fff"
            height="20px"
            fontSize="11px"
            bgColor="#1b95e0"
            borderRadius="3px"
            alignItems="center"
            fontWeight="medium"
            _hover={{ textDecor: "none", bg: "#0c7abf" }}
            href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fmaterial-ui.com%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=materialui&tw_p=followbutton"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size="14px" />
            <Box as="span" ml="3px">
              Follow
            </Box>
          </Link>
        </Flex>
        <Flex
          h="20px"
          ml="5px"
          bg="#fff"
          borderRadius="3px"
          position="relative"
          border="1px solid #8799A6"
        >
          <Box
            mt="-4px"
            ml="-4px"
            position="absolute"
            top="50%"
            border="4px solid transparent"
            borderLeft="0px"
            borderRightColor="#66757f"
          ></Box>
          <Box
            mt="-4px"
            ml="-3px"
            position="absolute"
            top="50%"
            border="4px solid transparent"
            borderLeft="0px"
            borderRightColor="#fff"
          ></Box>

          <Link
            px="5px"
            d="flex"
            color="#292F33"
            fontSize="11px"
            alignItems="center"
            fontWeight="medium"
            href="https://twitter.com/intent/user?original_referer=https%3A%2F%2Fmaterial-ui.com%2F&ref_src=twsrc%5Etfw&region=count_link&screen_name=materialui&tw_p=followbutton"
            target="_blank"
            rel="noreferrer"
          >
            12.7K followers
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Highlight;

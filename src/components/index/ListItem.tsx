/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

function ListItem(props: any) {
  const router = useRouter();

  const {
    item: { img, id, name },
  } = props;

  const handleClick = () => {
    router.push(`track?id=${id}`);
  };

  return (
    <Box onClick={handleClick}>
      <img
        style={{
          cursor: "pointer",
          width: 200,
          height: 200,
          borderRadius: "10%",
        }}
        src={img.url}
      ></img>
      <Text mt="2" fontWeight="bold">
        {name}
      </Text>
    </Box>
  );
}

export default ListItem;

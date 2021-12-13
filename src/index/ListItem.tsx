/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Box } from "@chakra-ui/react";

function ListItem(props: any) {
  const {
    item: { img, id },
  } = props;

  return (
    <Box>
      <img
        style={{
          width: 200,
          height: 200,
          borderRadius: "10%",
        }}
        src={img.url}
      ></img>
    </Box>
  );
}

export default ListItem;

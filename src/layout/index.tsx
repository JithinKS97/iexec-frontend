import React from "react";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }: any) {
  return (
    <Box>
      <Box pt="5vh" m="auto" w="80vw">
        {children}
      </Box>
    </Box>
  );
}

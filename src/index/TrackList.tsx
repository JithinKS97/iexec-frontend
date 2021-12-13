import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import ListItem from "./ListItem";

export default function TrackList(props: any) {
  const { items } = props;

  return (
    <Box mt="10">
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {items.map((item: any, index: number) => (
          <ListItem key={index} item={item} />
        ))}
      </Grid>
    </Box>
  );
}

import React from "react";
import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";
import { search } from "../../api/spotify";
import _ from "lodash";
import TrackList from "./TrackList";

export default function Index() {
  const [keyword, setKeyword] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = async (e: any) => {
    setKeyword(e.target.value);
    await searchKeyword(e.target.value);
  };

  const searchKeyword = async (value: string) => {
    const res = await search(value);
    if (res.tracks) {
      setSearchResults(res.tracks.items.map(extractData));
    } else {
      setSearchResults([]);
    }
  };

  const extractData = (datum: any) => {
    console.log(datum);
    return {
      img: datum.album.images[0],
      id: datum.id,
      name: datum.name,
    };
  };

  return (
    <Box>
      <Input
        value={keyword}
        onChange={handleChange}
        placeholder="Search a track..."
      ></Input>
      <TrackList items={searchResults} />
    </Box>
  );
}

import React from "react";
import { Text, Box } from "@chakra-ui/react";

export default function Track(props: any) {
  const { trackDetails } = props;

  return (
    <Box>
      <Text>Acousticness: {trackDetails.acousticness}</Text>
      <Text>Danceability: {trackDetails.danceability}</Text>
      <Text>Energy: {trackDetails.energy}</Text>
      <Text>Instrumentalness: {trackDetails.instrumentalness}</Text>
      <Text>Key: {trackDetails.key}</Text>
      <Text>Liveness: {trackDetails.liveness}</Text>
      <Text>Loudness: {trackDetails.loudness}</Text>
      <Text>Tempo: {trackDetails.tempo}</Text>
      <Text>Time signature: {trackDetails.time_signature}</Text>
      <Text>Valence: {trackDetails.valence}</Text>
    </Box>
  );
}

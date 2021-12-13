import React from "react";
import Track from "../src/components/track/index";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getTrackDetails } from "../src/api/spotify";

export default function TrackPage() {
  const router = useRouter();
  const { id } = router.query;
  const [trackDetails, setTrackDetails] = useState();

  useEffect(() => {
    if (id) {
      getTrackDetails(id as string).then((res) => {
        if (res.audio_features[0]) {
          setTrackDetails(res.audio_features[0]);
        }
      });
    }
  }, [id]);

  if (!trackDetails) {
    return null;
  }

  console.log(trackDetails);

  return <Track trackDetails={trackDetails} />;
}

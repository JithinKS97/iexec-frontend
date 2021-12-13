import React from "react";
import Track from "../src/components/track/index";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function TrackPage() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      console.log(id);
    }
  }, [id]);

  return <Track />;
}

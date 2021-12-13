const SPOTIFY_API_URL = "https://api.spotify.com/v1/";

export const search = async (keyword: string) => {
  try {
    const res = await fetch(
      SPOTIFY_API_URL +
        `search?q=${keyword.replace(" ", "%20")}&type=track&limit=10`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Authorization: Bearer BQCFDoJAgP2Epx71yrxbfXYqKzQzy__YqnUEP8Nse8SmiAXErAuhnfBMDAl4cOGbwe4kXzFGbxWfyJP9jghlajy1JMHETZAbgQABrr8x52NUMW9DayRSWrd8xyKfXx_ABl4jpRT5XmQRPR3bMejCrZFX80YQqIEge1s",
        },
      }
    );
    return await res.json();
  } catch (err) {
    console.log(err);
    return "Error while calling API";
  }
};

import config from "../config";

const { SPOTIFY_API_URL } = config;

export const search = async (keyword: string) => {
  try {
    const res = await fetch(
      SPOTIFY_API_URL +
        `search?q=${keyword.replace(" ", "%20")}&type=track&limit=10`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Authorization: Bearer BQD7Jkz3zl-9Acfbuu_sSSXaD0IE8OgPiFPPuLnuyfcrSmUeaDT-nT7xJHl0pgaiCCDFII8Q7UxjLaBgDha6IN-KuSzcivvfUA7HLqxjT3cXQhZhOzkQIfjX8Yd7YNvtsu12ayMGkXKIgVw6nKLC9Wd3bjX3ZzCl8p8",
        },
      }
    );
    return await res.json();
  } catch (err) {
    console.log(err);
    return "Error while calling API";
  }
};

export const getTrackDetails = () => {
  try {
  } catch (err) {}
};

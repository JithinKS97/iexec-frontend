import config from "../config";

const { SPOTIFY_API_URL } = config;

const Authorization =
  "Bearer BQC59NSaxaKFBaSKwdtbs9rfvJ1uJ3bO8M2Gyu-AhLAEfi8w68hqCvkUMZTcZTgBq6850ysX_IIIZDXowAfgABLnP5QDcFXasU4HkW8VUtwvTifHBh3ySC0halrv_iXt-VGoUho4BmrhWvjA8ct0XaNwTy4vintVB64";

export const search = async (keyword: string) => {
  try {
    const res = await fetch(
      SPOTIFY_API_URL +
        `search?q=${keyword.replace(" ", "%20")}&type=track&limit=10`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization,
        },
      }
    );
    return await res.json();
  } catch (err) {
    console.log(err);
    return "Error while calling API";
  }
};

export const getTrackDetails = async (id: string) => {
  try {
    const res = await fetch(SPOTIFY_API_URL + `audio-features?ids=${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization,
      },
    });
    return await res.json();
  } catch (err) {
    console.log(err);
    return "Error while calling API";
  }
};

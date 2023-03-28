import axios from "axios";

const ACCESS_TOKEN: string =
  "BQALLCHiqHrUZL8GCZu6QHMgvhhrHNOZnS9bhh09U1cmuKZqWyH-qlR99POEyeR32KXGGNCCtQoLNh-GArOTc85GP_KWtZTM1V39hP226W-pKlloVD-d";

export const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

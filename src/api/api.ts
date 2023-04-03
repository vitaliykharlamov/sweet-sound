import axios from "axios";

const ACCESS_TOKEN: string =
  "BQBk5K61SGqxoHD3Rmoy6kKBhId6U4wIVY0A563c0rNqoR7oARbqljaJZ4fd4wVLOBVlfOvLuFYgJVVFIvL0UsLOxC65ahly3VLMczoXwgdK4bZ4uhzX";

export const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

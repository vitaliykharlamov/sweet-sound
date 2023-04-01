import axios from "axios";

const ACCESS_TOKEN: string =
  "BQAvVIJ7hFQzHqYNUv2U3ZkubGPK15f9V22QOHVDAAhagxSALdQqB7u1VQv6Gcjs_gnydDoDGNl91Iuu40WbId_l34vGty5AYyufNNN814-aH_eh6kwD";

export const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

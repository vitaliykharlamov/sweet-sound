import axios from "axios";

const ACCESS_TOKEN: string =
  "BQBU4rv0DG4VxO34U5c4Kt6oeeGM7fgdXXjt_Yn0Atnhe7RYCqDynUKBlW_pUjRIcJmBnS1sXv-LKb_liqbiwCCubzrH4-RbWPROGkCs5PxG_LdWrnbX";

export const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

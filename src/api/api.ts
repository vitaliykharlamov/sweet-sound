import axios from "axios";

const ACCESS_TOKEN: string =
  "BQAuFhixS4xfDU2boc1JYWTfMHnaB2Y-CdmMVeNSNwXA_wVl234b0wnvUVIW2KjdIzYuxuOlu-OrWjgpISyWvRDR4zjO6yM6t00Ehl3OAdby_2tkTTd3";

export const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

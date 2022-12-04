import axios from "axios";

export const api = axios.create({
  baseURL: "https://shazam-core.p.rapidapi.com/v1",
  headers: {
    "X-RapidAPI-Key": "7bfc4fbd89mshe49d3486da8203fp1d4941jsn3eccabc68da9",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
});

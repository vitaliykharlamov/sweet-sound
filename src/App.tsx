import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Player } from "./components/Player";
import { HomePage } from "./pages/HomePage";
import { AlbumPage } from "./pages/AlbumPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album" element={<AlbumPage />} />
      </Routes>

      <Player />
    </BrowserRouter>
  );
};

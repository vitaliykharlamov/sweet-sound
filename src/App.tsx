import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Player } from "./components/Player";
import { HomePage } from "./pages/HomePage";
import { AlbumPage } from "./pages/AlbumPage";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full h-screen grid grid-rows-screen">
        <Header />

        <div className="w-full flex flex-row overflow-auto">
          <Sidebar />

          <div className="w-full overflow-auto p-5">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/album/:albumID" element={<AlbumPage />} />
            </Routes>
          </div>
        </div>

        <Player />
      </div>
    </BrowserRouter>
  );
};

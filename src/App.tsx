import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Player } from "./components/Player";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { AlbumPage } from "./pages/AlbumPage";

type Theme = "light" | "dark";

export const App = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const themeToggler = () => document.body.classList.toggle("dark");

  useEffect(() => {
    themeToggler();
  }, [theme]);

  const heandlerThemeSwith = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  const heandlerSidebarOpen = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <BrowserRouter>
      <div className="w-full h-screen grid grid-rows-screen bg-gray-200 dark:bg-gray-800">
        <Header heandlerSidebarOpen={heandlerSidebarOpen} />

        <div className="w-full flex flex-row overflow-auto">
          <Sidebar
            theme={theme}
            heandlerThemeSwith={heandlerThemeSwith}
            isSidebarOpen={isSidebarOpen}
          />

          <div className="w-full overflow-auto p-5">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/album/:albumID" element={<AlbumPage />} />
            </Routes>
          </div>
        </div>

        <Player />
      </div>
    </BrowserRouter>
  );
};

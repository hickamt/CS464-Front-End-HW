// import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// MAIN Routes
import Layout from "./components/nav_layout/Layout"; // All page routes are wrapped within the Nav Layout
import LandingPage from "./pages/LandingPage";

/* Additional Routes for Custom Pages */
import Search from "./components/search/Search";
import Houses from "./components/houses/Houses";

// Game Of Thrones Audio from Internet Archive
// Source Link: https://archive.org/details/01MainTitle_201905/01+Main+Title.mp3
function App() {
  useEffect(() => {
    const audio = new Audio(
      "https://ia801007.us.archive.org/29/items/01MainTitle_201905/01%20Main%20Title.mp3"
    );
    audio.loop = true;
    audio.play();
    return () => {
      audio.pause();
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="search" element={<Search />} />
          <Route path="houses" element={<Houses />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

// MAIN Routes
import Layout from "./components/nav_layout/Layout"; // All page routes are wrapped within the Nav Layout
import Main from "./pages/Main";

/* Additional Routes for Custom Pages */
import Search from "./components/search/Search";
import Houses from "./components/houses/Houses";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="search" element={<Search />} />
          <Route path="houses" element={<Houses />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
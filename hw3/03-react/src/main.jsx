import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Data Provider
import  {DataProvider}  from "./dataprovider/DataProvider";

// Global CSS Page Styles
import "./index.css";
import "./styles/main.css";
import "./styles/navbar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>
);

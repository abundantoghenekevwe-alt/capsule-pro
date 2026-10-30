import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./component/Navbar";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CartWishlistProvider } from "./component/CartWhishList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartWishlistProvider>
        <Navbar />
        <App />
      </CartWishlistProvider>
    </BrowserRouter>
  </StrictMode>,
);

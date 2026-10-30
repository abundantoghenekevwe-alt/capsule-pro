import { Routes, Route } from "react-router-dom";
import General from "./General";
import Products from "./component/product";
import Login from "./component/Login";
import Cart from "./component/Cart";
import Wishlist from "./component/Wishlist";
import Signup from "./component/Signup";
import Checkout from "./component/Checkout";
import OrderConfirmation from "./component/OrderConfirmation";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<General />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
    </Routes>
  );
}

export default App;

import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartWishlist } from "./CartWhishList";
function Navbar() {
  const [search, setSearch] = useState("");
  const { cart, wishlist } = useCartWishlist();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <header className="luxury-header">
      <div className="luxury-topbar">
        <p>
          <span className="gold-text">✦</span>
          PREMIUM FINDS. EXCEPTIONAL VALUE.
        </p>

        <p className="topbar-message">Free delivery on orders over ₦50,000</p>

        <a href="/help" className="topbar-link">
          Customer Support
        </a>
      </div>

      <div className="luxury-main">
        <a href="/" className="luxury-brand">
          <div className="brand-monogram">
            C<span>P</span>
          </div>

          <div className="brand-details">
            <h1>
              CAPSULE <span>PRO</span>
            </h1>
            <p>THE ART OF SMART SHOPPING</p>
          </div>
        </a>

        <form
          className="luxury-search"
          onSubmit={(e) => {
            e.preventDefault();
            if (search.trim()) {
              window.location.href = `/products?search=${encodeURIComponent(search.trim())}`;
            }
          }}
        >
          <input
            type="search"
            placeholder="Search products, brands and more..."
            aria-label="Search products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit" aria-label="Search">
            ⌕
          </button>
        </form>

        <div className="luxury-actions">
          <Link to="/wishlist" className="luxury-icon-link">
            <span className="luxury-icon">♡</span>
            <span>Wishlist</span>
            {wishlist.length > 0 && (
              <span className="cart-badge">{wishlist.length}</span>
            )}
          </Link>

          <Link to={"/cart"} className="luxury-icon-link">
            <span className="cart-icon-wrap">
              <span className="luxury-icon" to={"/cart"}>
                ♧
              </span>
              <span className="cart-badge">{cartCount}</span>
            </span>
            <span>Cart</span>
          </Link>
          <div className="auth-actions">
            <Link to={"/login"} className="login-btn">
              Login
            </Link>
            <a href="/signup" className="signup-btn">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      <nav className="luxury-categories">
        <a href="/categories" className="browse-categories">
          <span className="menu-symbol">☰</span>
          All Categories
        </a>

        <a href="/" className="category-item category-active">
          Home
        </a>

        <a href="/products?category=electronics" className="category-item">
          Electronics
        </a>

        <a href="/products?category=fashion" className="category-item">
          Fashion
        </a>

        <a href="/products?category=home-living" className="category-item">
          Home & Living
        </a>

        <a href="/products?category=beauty" className="category-item">
          Beauty
        </a>

        <a href="/products?category=sports" className="category-item">
          Sports & Outdoors
        </a>

        <a href="/deals" className="category-deals">
          ✦ Exclusive Deals
        </a>
      </nav>
    </header>
  );
}

export default Navbar;

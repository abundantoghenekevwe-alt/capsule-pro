import headphone from "../assets/headphone.jpg";
import sneakers from "../assets/sneaker.jpg";
import watch from "../assets/watch.jpg";
import { useCartWishlist } from "../component/CartWhishList";
import bagpack from "../assets/bagpackjpg.jpg";
const categories = [
  { icon: "⌁", name: "Electronics", count: "Gadgets & devices" },
  { icon: "◇", name: "Fashion", count: "Style & essentials" },
  { icon: "⌂", name: "Home & Living", count: "Upgrade your space" },
  { icon: "✧", name: "Beauty", count: "Beauty & personal care" },
];

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "ELECTRONICS",
    price: "₦85,000",
    oldPrice: "₦110,000",
    badge: "BESTSELLER",
    image: headphone,
  },
  {
    id: 2,
    name: "Classic Everyday Sneakers",
    category: "FASHION",
    price: "₦65,000",
    oldPrice: "₦80,000",
    badge: "POPULAR",
    image: sneakers,
  },
  {
    id: 3,
    name: "Minimal Designer Watch",
    category: "ACCESSORIES",
    price: "₦120,000",
    oldPrice: "₦145,000",
    badge: "NEW ARRIVAL",
    image: watch,
  },
  {
    id: 4,
    name: "Modern Everyday Backpack",
    category: "ACCESSORIES",
    price: "₦48,000",
    oldPrice: "₦60,000",
    badge: "GREAT VALUE",
    image: bagpack,
  },
];

function Home() {
  const { addToCart, toggleWishlist, wishlist } = useCartWishlist();

  return (
    <main className="capsule-home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span></span>
            THE CAPSULE PRO COLLECTION
          </div>

          <h1>
            Elevate Your
            <br />
            Everyday<span>.</span>
          </h1>

          <p>
            Discover exceptional products, timeless style, and everyday
            essentials — all in one destination.
          </p>

          <div className="hero-buttons">
            <a href="/products" className="hero-primary">
              Explore Collection <span>→</span>
            </a>

            <a href="/deals" className="hero-secondary">
              Discover Deals
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>Quality</strong>
              <span>Carefully selected</span>
            </div>

            <div>
              <strong>Secure</strong>
              <span>Protected checkout</span>
            </div>

            <div>
              <strong>Reliable</strong>
              <span>Customer support</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="/hero.jpg"
              alt="Elegant products from the Capsule Pro collection"
            />

            <div className="hero-image-label">
              <span>THE EDIT</span>
              <strong>Everyday Luxury</strong>
            </div>
          </div>

          <div className="hero-floating-card">
            <span className="floating-star">✦</span>
            <div>
              <strong>Made for your lifestyle</strong>
              <p>Discover something exceptional.</p>
            </div>
          </div>

          <div className="hero-orbit"></div>
        </div>
      </section>

      <section className="benefits">
        <div>
          <span>◇</span>
          <div>
            <strong>Quality-first shopping</strong>
            <p>Products selected with care</p>
          </div>
        </div>

        <div>
          <span>↗</span>
          <div>
            <strong>Convenient delivery</strong>
            <p>Delivery options at checkout</p>
          </div>
        </div>

        <div>
          <span>⌑</span>
          <div>
            <strong>Secure payments</strong>
            <p>Payment through trusted providers</p>
          </div>
        </div>

        <div>
          <span>♡</span>
          <div>
            <strong>Customer support</strong>
            <p>We're here to help</p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">EXPLORE OUR STORE</span>
            <h2>
              Shop by <span>Category</span>
            </h2>
            <p>Find the things that make everyday life better.</p>
          </div>

          <a href="/categories" className="section-link">
            All categories →
          </a>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <a
              href={`/products?category=${encodeURIComponent(
                category.name.toLowerCase().replaceAll(" ", "-"),
              )}`}
              className="category-card"
              key={category.name}
            >
              <span className="category-symbol">{category.icon}</span>

              <div>
                <h3>{category.name}</h3>
                <p>{category.count}</p>
              </div>

              <span className="category-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="home-section featured-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">HANDPICKED FOR YOU</span>
            <h2>
              Featured <span>Products</span>
            </h2>
            <p>Discover popular picks from our collection.</p>
          </div>

          <a href="/products" className="section-link">
            Shop all products →
          </a>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <a href={`/products/${product.id}`} className="product-image">
                <img src={product.image} alt={product.name} />

                <span className="product-badge">{product.badge}</span>

                <button
                  type="button"
                  className="product-wishlist"
                  aria-label={`Add ${product.name} to wishlist`}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    toggleWishlist(product);
                  }}
                >
                  {wishlist.some((item) => item.id === product.id) ? "♥" : "♡"}
                </button>
              </a>

              <div className="product-details">
                <span className="product-category">{product.category}</span>

                <h3>{product.name}</h3>

                <div className="product-prices">
                  <strong>{product.price}</strong>
                  <del>{product.oldPrice}</del>
                </div>

                <button
                  type="button"
                  style={{ backgroundColor: "transparent", cursor: "pointer" }}
                  className="product-button"
                  onClick={() => addToCart(product)}
                >
                  Add to cart <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;

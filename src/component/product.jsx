import { useState } from "react";
import { products } from "./productData/data";
import { useCartWishlist } from "./CartWhishList";

function Products() {
  const params = new URLSearchParams(window.location.search);

  const initialSearch = params.get("search") || "";
  const selectedCategory = params.get("category") || "";

  const { addToCart, toggleWishlist, wishlist } = useCartWishlist();

  const [search] = useState(initialSearch);

  function getCategorySlug(category) {
    const value = category.toLowerCase().trim();

    if (value.includes("electronic")) return "electronics";
    if (value.includes("fashion")) return "fashion";
    if (value.includes("home")) return "home-living";
    if (value.includes("beauty")) return "beauty";
    if (value.includes("sport")) return "sports";

    return value.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      !selectedCategory ||
      getCategorySlug(product.category) === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categoryNames = {
    electronics: "Electronics",
    fashion: "Fashion",
    "home-living": "Home & Living",
    beauty: "Beauty",
    sports: "Sports & Outdoors",
  };

  const pageTitle = categoryNames[selectedCategory] || "Our Products";

  return (
    <main className="capsule-home products-page">
      <section className="home-section featured-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">EXPLORE OUR COLLECTION</span>

            <h2>
              {pageTitle.split(" ")[0]}{" "}
              <span>{pageTitle.split(" ").slice(1).join(" ")}</span>
            </h2>

            <p>Discover exceptional products for your everyday life.</p>
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <a href={`/products/${product.id}`} className="product-image">
                <img src={product.image} alt={product.name} />

                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}

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
                  {product.oldPrice && <del>{product.oldPrice}</del>}
                </div>

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="product-button"
                >
                  Add to cart <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="products-empty">
            <h2>No products found</h2>
            <p>Try another category or search for another product.</p>

            <a href="/products" className="product-button">
              View All Products <span>→</span>
            </a>
          </div>
        )}
      </section>
    </main>
  );
}

export default Products;

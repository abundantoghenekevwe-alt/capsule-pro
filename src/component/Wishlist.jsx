import { useCartWishlist } from "./CartWhishList";

function Wishlist() {
  const { wishlist, toggleWishlist } = useCartWishlist();

  return (
    <main className="wishlist-page">
      <div className="section-heading">
        <div>
          <span className="section-eyebrow">YOUR SAVED ITEMS</span>

          <h2>
            My <span>Wishlist</span>
          </h2>

          <p>Your favourite products, all in one place.</p>
        </div>
      </div>

      {wishlist.length === 0 ? (
        <div className="wishlist-empty">
          <span>♡</span>
          <h3>Your wishlist is empty</h3>
          <p>Save products you love and find them here later.</p>
        </div>
      ) : (
        <div className="product-grid">
          {wishlist.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <div className="product-details">
                {product.category && (
                  <span className="product-category">{product.category}</span>
                )}

                <h3>{product.name}</h3>

                <strong>{product.price}</strong>

                <button type="button" onClick={() => toggleWishlist(product)}>
                  Remove from Wishlist
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default Wishlist;

import { useCartWishlist } from "./CartWhishList";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cart, removeFromCart } = useCartWishlist();
  const navigate = useNavigate();
  const total = cart.reduce(
    (sum, item) =>
      sum + Number(String(item.price).replace(/[₦,]/g, "")) * item.quantity,
    0,
  );

  return (
    <main className="cart-page">
      <div className="section-heading">
        <div>
          <span className="section-eyebrow">YOUR SELECTION</span>
          <h2>
            My Shopping <span>Cart</span>
          </h2>
          <p>Review your selected products before checkout.</p>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <span>🛒</span>
          <h3>Your cart is empty</h3>
          <p>You haven't added any products to your cart yet.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <span className="product-category">{item.category}</span>

                  <h3>{item.name}</h3>

                  <p className="cart-item-price">{item.price}</p>

                  <p>Quantity: {item.quantity}</p>

                  <button type="button" onClick={() => removeFromCart(item.id)}>
                    Remove from cart
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>

            <div>
              <span>Total items</span>
              <strong>
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </strong>
            </div>

            <div>
              <span>Subtotal</span>
              <strong>₦{total.toLocaleString("en-NG")}</strong>
            </div>

            <button
              type="button"
              className="cart-checkout"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout <span>→</span>
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;

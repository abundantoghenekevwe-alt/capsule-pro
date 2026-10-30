import { useState } from "react";
import { useCartWishlist } from "./CartWhishList";
import { useNavigate } from "react-router-dom";

function Checkout() {
const { cart, completeOrder } = useCartWishlist();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardType, setCardType] = useState("Visa");

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(String(item.price).replace(/[₦,]/g, "")) * item.quantity,
    0,
  );

 function handleCheckout(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const orderDetails = {
    orderNumber: `CP-${Date.now()}`,
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    city: formData.get("city"),
    state: formData.get("state"),
    paymentMethod,
    cardType: paymentMethod === "card" ? cardType : null,
    products: cart,
    total,
    orderDate: new Date().toLocaleString(),
    paymentStatus:
      paymentMethod === "cod"
        ? "Pay on delivery"
        : "Awaiting payment",
  };

  completeOrder(orderDetails);

  navigate("/order-confirmation");
}

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <div className="checkout-empty">
          <h2>Your cart is empty</h2>
          <p>Add some products before proceeding to checkout.</p>
          <button onClick={() => navigate("/products")}>Browse Products</button>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="section-heading">
        <div>
          <span className="section-eyebrow">COMPLETE YOUR PURCHASE</span>
          <h2>
            Secure <span>Checkout</span>
          </h2>
          <p>Enter your delivery details and choose how you want to pay.</p>
        </div>
      </div>

      <form className="checkout-layout" onSubmit={handleCheckout}>
        <section className="checkout-details">
          <div className="checkout-section">
            <h3>Delivery Information</h3>

            <div className="checkout-field">
              <label>Full Name</label>
              <input
                name="fullName"
                type="text"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="checkout-field">
              <label>Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="checkout-field">
              <label>Phone Number</label>
              <input
                name="phone"
                type="tel"
                placeholder="Your phone number"
                required
              />
            </div>

            <div className="checkout-field">
              <label>Delivery Address</label>
              <textarea
                name="address"
                placeholder="Enter your full delivery address"
                required
              />
            </div>

            <div className="checkout-two-columns">
              <div className="checkout-field">
                <label>City</label>
                <input name="city" type="text" placeholder="City" required />
              </div>

              <div className="checkout-field">
                <label>State</label>
                <input name="state" type="text" placeholder="State" required />
              </div>
            </div>
          </div>

          <div className="checkout-section">
            <h3>Payment Method</h3>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              <span>
                <strong>Debit / Credit Card</strong>
                <small>Pay securely using your preferred card.</small>
              </span>
            </label>

            {paymentMethod === "card" && (
              <div className="card-selection">
                <label htmlFor="cardType">Choose your card type</label>
                <select
                  id="cardType"
                  value={cardType}
                  onChange={(event) => setCardType(event.target.value)}
                >
                  <option value="Visa">Visa</option>
                  <option value="Mastercard">Mastercard</option>
                  <option value="Verve">Verve</option>
                </select>
                <p>
                  You'll enter your card details securely through the payment
                  provider.
                </p>
              </div>
            )}

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "transfer"}
                onChange={() => setPaymentMethod("transfer")}
              />
              <span>
                <strong>Bank Transfer</strong>
                <small>Receive payment instructions during checkout.</small>
              </span>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "ussd"}
                onChange={() => setPaymentMethod("ussd")}
              />
              <span>
                <strong>USSD</strong>
                <small>Pay using your bank's USSD service, if supported.</small>
              </span>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              <span>
                <strong>Cash on Delivery</strong>
                <small>Pay when your order is delivered.</small>
              </span>
            </label>
          </div>
        </section>

        <aside className="checkout-summary">
          <h3>Your Order</h3>

          {cart.map((item) => (
            <div className="checkout-product" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h4>{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
                <strong>{item.price}</strong>
              </div>
            </div>
          ))}

          <div className="checkout-total">
            <span>Total</span>
            <strong>₦{total.toLocaleString("en-NG")}</strong>
          </div>

          <button type="submit" className="checkout-submit">
            Place Order <span>→</span>
          </button>

          <p className="checkout-note">
            Your order will be processed after the required payment
            confirmation.
          </p>
        </aside>
      </form>
    </main>
  );
}

export default Checkout;

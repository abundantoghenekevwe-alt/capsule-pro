import { Link } from "react-router-dom";
import { useCartWishlist } from "./CartWhishList";

function OrderConfirmation() {
  const { order } = useCartWishlist();

  if (!order) {
    return (
      <main className="confirmation-page">
        <div className="confirmation-card">
          <h2>No recent order found</h2>
          <p>You haven't placed an order yet.</p>
          <Link to="/products">Continue Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="confirmation-page">
      <div className="confirmation-card">
        <div className="confirmation-icon">✓</div>

        <span className="auth-eyebrow">CAPSULE PRO</span>

        <h1>
          Order <span>Received!</span>
        </h1>

        <p className="confirmation-message">
          Thank you for shopping with Capsule Pro, {order.fullName}. Your order
          details have been saved.
        </p>

        <div className="confirmation-number">
          <span>Order Number</span>
          <strong>{order.orderNumber}</strong>
        </div>

        <div className="confirmation-section">
          <h3>Order Details</h3>

          {order.products.map((item) => (
            <div className="confirmation-product" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h4>{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
                <strong>{item.price}</strong>
              </div>
            </div>
          ))}

          <div className="confirmation-total">
            <span>Total Amount</span>
            <strong>₦{order.total.toLocaleString("en-NG")}</strong>
          </div>
        </div>

        <div className="confirmation-section">
          <h3>Delivery Information</h3>

          <p>{order.fullName}</p>
          <p>{order.phone}</p>
          <p>{order.email}</p>
          <p>
            {order.address}, {order.city}, {order.state}
          </p>
        </div>

        <div className="confirmation-section">
          <h3>Payment Information</h3>

          <p>
            Payment method:{" "}
            {order.paymentMethod === "card"
              ? `${order.cardType} Card`
              : order.paymentMethod === "cod"
                ? "Cash on Delivery"
                : order.paymentMethod === "transfer"
                  ? "Bank Transfer"
                  : "USSD"}
          </p>

          <p>Payment status: {order.paymentStatus}</p>
        </div>

        <Link to="/products" className="confirmation-button">
          Continue Shopping →
        </Link>
      </div>
    </main>
  );
}

export default OrderConfirmation;

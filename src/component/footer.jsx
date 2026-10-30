function Footer() {
  return (
    <footer className="capsule-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="footer-logo-icon">CP</span>
              <span>
                CAPSULE <strong>PRO</strong>
              </span>
            </a>

            <p>
              Your destination for quality products, timeless style, and a
              premium shopping experience.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                ig
              </a>
              <a href="#" aria-label="TikTok">
                tk
              </a>
              <a href="#" aria-label="X">
                x
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Shop</h3>
            <a href="/categories/electronics">Electronics</a>
            <a href="/categories/fashion">Fashion</a>
            <a href="/categories/home-living">Home &amp; Living</a>
            <a href="/categories/beauty">Beauty</a>
            <a href="/categories/sports">Sports &amp; Outdoors</a>
            <a href="/deals">Exclusive Deals</a>
          </div>

          <div className="footer-column">
            <h3>Customer Care</h3>
            <a href="/contact">Contact Us</a>
            <a href="/help">Help Center</a>
            <a href="/shipping">Shipping Information</a>
            <a href="/returns">Returns &amp; Refunds</a>
            <a href="/track-order">Track Your Order</a>
            <a href="/faq">FAQs</a>
          </div>

          <div className="footer-column">
            <h3>About Capsule Pro</h3>
            <a href="/about">About Us</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms &amp; Conditions</a>
            <a href="/careers">Careers</a>
          </div>
        </div>

        <div className="footer-newsletter">
          <div>
            <h3>Stay in the loop</h3>
            <p>
              Subscribe for new arrivals, special offers, and exclusive deals.
            </p>
          </div>

          <form
            className="footer-subscribe"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Newsletter signup will be connected soon!");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Capsule Pro. All rights reserved.</p>

          <div className="footer-payment">
            <span>Payment options:</span>
            <span className="payment-badge">VISA</span>
            <span className="payment-badge">Mastercard</span>
            <span className="payment-badge">Paystack</span>
          </div>

          <p className="footer-country">Proudly serving Nigeria 🇳🇬</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

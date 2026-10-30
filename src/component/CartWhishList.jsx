import { createContext, useContext, useState, useEffect } from "react";

const CartWishlistContext = createContext();

export function CartWishlistProvider({ children }) {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("capsule-cart") || "[]");
  });

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("capsule-wishlist") || "[]");
  });

  const [order, setOrder] = useState(() => {
    return JSON.parse(localStorage.getItem("capsule-order") || "null");
  });

  useEffect(() => {
    localStorage.setItem("capsule-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("capsule-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("capsule-order", JSON.stringify(order));
  }, [order]);

  function addToCart(product) {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    );
  }

  function toggleWishlist(product) {
    setWishlist((currentWishlist) => {
      const alreadySaved = currentWishlist.some(
        (item) => item.id === product.id,
      );

      if (alreadySaved) {
        return currentWishlist.filter((item) => item.id !== product.id);
      }

      return [...currentWishlist, product];
    });
  }

  function completeOrder(orderDetails) {
    setOrder(orderDetails);
    setCart([]);
  }

  return (
    <CartWishlistContext.Provider
      value={{
        cart,
        wishlist,
        order,
        addToCart,
        removeFromCart,
        toggleWishlist,
        completeOrder,
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
}

export function useCartWishlist() {
  return useContext(CartWishlistContext);
}

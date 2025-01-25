// src/components/CartView.jsx
import React from "react";

const CartView = () => {
  const cartItems = [
    { id: 1, name: "Product A", price: 25.0, quantity: 2 },
    { id: 2, name: "Product B", price: 15.5, quantity: 1 },
    { id: 3, name: "Product C", price: 40.0, quantity: 3 },
  ];

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-4 rounded-md shadow-sm"
          >
            <div>
              <h2 className="font-medium">{item.name}</h2>
              <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <div>
              <p className="font-semibold text-lg">
                ${item.price * item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 border-t font-semibold text-xl">
        Total: ${calculateTotal().toFixed(2)}
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartView;

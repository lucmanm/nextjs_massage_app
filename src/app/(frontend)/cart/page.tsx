"use client"

import { useState } from "react"
import { CartItemComponent } from "@/components/cart-items"
import { cartItems as initialCartItems } from "@/constant/data"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItemComponent key={item.id} item={item} onUpdateQuantity={updateQuantity} onRemove={removeItem} />
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
            <Button>Proceed to Checkout</Button>
          </div>
        </>
      )}
    </div>
  )
}


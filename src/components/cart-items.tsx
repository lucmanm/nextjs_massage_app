"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import type { CartItem } from "@/constant/data"
import { Button } from "@/components/ui/button"

interface CartItemProps {
  item: CartItem
  onUpdateQuantity: (id: string, newQuantity: number) => void
  onRemove: (id: string) => void
}

export function CartItemComponent({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center space-x-4 py-2">
      <Image src={item.image || "/placeholder.svg"} alt={item.name} width={100} height={100} className="rounded-md" />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}>
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button variant="outline" size="icon" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button variant="destructive" size="icon" onClick={() => onRemove(item.id)}>
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}


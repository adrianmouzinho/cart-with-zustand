import { CartItem, Item } from "../../store/cartStore"
import "./style.css"

interface CartProps {
  items: CartItem[]
  removeFromCart: (itemId: number) => void
  addToCart: (item: Item) => void
}

export function Cart({ items, addToCart, removeFromCart }: CartProps) {
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  const { format } = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return (
    <div className="cart-container">
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.quantity}x {item.name} - R${item.price}
              <div className="btn-container">
                <button onClick={() => addToCart(item)} className="add-item-btn">+</button>
                <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">-</button>
              </div>
            </li>
          ))}
        </ul>
      ) : <span>You cart is empty.</span>}

      <footer className="cart-footer">
        Total: {format(total)}
      </footer>
    </div>
  )
}
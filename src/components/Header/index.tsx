import { useCartStore } from "../../store/cartStore"
import { Cart } from "../Cart"
import "./style.css"

export function Header() {
  const [items, addToCart, removeFromCart, isCartOpen, toggleCart] = useCartStore((state) => [state.cart, state.addToCart, state.removeFromCart, state.isCartOpen, state.toggleCart])

  return (
    <header>
      <nav>
        <a href="">Amazon</a>

        <ul>
          <li className="cart-btn">
            <button onClick={() => toggleCart()}>Cart {items.length > 0 ? items.length : ''}</button>
            {isCartOpen && <Cart items={items} addToCart={addToCart} removeFromCart={removeFromCart} />}
          </li>
        </ul>
      </nav>
    </header>
  )
}
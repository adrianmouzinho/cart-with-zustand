import { useCartStore  } from "../store/cartStore"

export function Cart() {
  const [items, removeFromCart] = useCartStore((state) => [state.cart, state.removeFromCart])

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity}x {item.name} - {item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
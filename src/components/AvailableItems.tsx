import { useCartStore  } from "../store/cartStore"

export function AvailableItems() {
  const [items, addToCart] = useCartStore((state) => [state.availableItems, state.addToCart])

  const { format } = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return (
    <div>
      <h1>Available items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {format(item.price)}
            <button onClick={() => addToCart(item)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
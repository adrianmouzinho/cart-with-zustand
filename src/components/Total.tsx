import { useCartStore  } from "../store/cartStore"

export function Total() {
  const items = useCartStore((state) => state.cart)

  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  const { format } = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return (
    <div>
      <h1>Total: {format(total)}</h1>
    </div>
  )
}
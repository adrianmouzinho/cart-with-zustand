import './App.css'
import { AvailableItems } from './components/AvailableItems'
import { Cart } from './components/Cart'
import { Total } from './components/Total'

function App() {

  return (
    <>
      <Total />
      <AvailableItems />
      <Cart />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

const PRODUCTS = [
  { id: 1, name: 'Manzana', price: 1.5 },
  { id: 2, name: 'Banana', price: 0.8 },
  { id: 3, name: 'Naranja', price: 1.2 },
];

function App() {

  function reducer(state, action) {

  }

  const initialState = {
    cart: [],
    Cantidad: 0,
    PrecioTotal: 0,
  }


  return (
    <div>
      <h1>Carrito de Compras</h1>
      <button> Manzana ($10) </button >
      <br />
      <button> Naranja ($15) </button >

      <div>
        <p>Cantidad:</p>
        <p>Precio Total:</p>
      </div>
    </div>
  )
}

export default App
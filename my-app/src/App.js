import React, { useState } from 'react';
import './App.css';
import Title from './components/Title'
import ProductsList from './components/ProductsList';

function App() {
  const [newProduct, setNewProduct] = useState('');
  const defaultProducts = ["milk", "Juise", "agg"]
  const [products, setProducts] = useState(defaultProducts)
  const handleClick = () => {
    const updatedProducts = [newProduct, ...products]
    setProducts(updatedProducts)
    setNewProduct('')
  }
  return (
    <>
      <Title>
        Kate List
    </Title>
      <form>
        <label>
          New product:
       <input type="text" value={newProduct} onChange={(event) => {
            console.log(event.target.value)
            setNewProduct(event.target.value)
          }}
          />
          <button type="button" onClick={handleClick}>Add
       </button>
          <ProductsList products={products} setProductList={setProducts} />
        </label>
      </form>


    </>
  )
}



export default App
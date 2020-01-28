import React, { useState } from 'react';
import './App.css';
import Title from './components/Title'
import ProductsList from './components/ProductsList';
import styled from 'styled-components'

const Button = styled.button`
margin-left: 20px;
`
const StyledDiv = styled.div`
display: flex;
justify-content: center;
// max-width: 500px;
`


function App() {
  const [newProduct, setNewProduct] = useState('');
  const defaultProducts = [
    { name: 'milk', completed: false },
    { name: 'juice', completed: false },
    { name: 'eggs', completed: true },
  ]
  const [products, setProducts] = useState(defaultProducts)

  const handleClick = () => {
    const newItem = { name: newProduct, completed: false }
    const updatedProducts = [newItem, ...products]
    setProducts(updatedProducts)
    setNewProduct('')
  }

  return (
    <StyledDiv>
      <form>
        <Title>
          Kate List
    </Title>
        <label>
          New product:
       <input type="text" value={newProduct} onChange={(event) => {
            console.log(event.target.value)
            setNewProduct(event.target.value)
          }}

          />
          <Button type="button" onClick={handleClick} >Add
       </Button>
          <ProductsList products={products} setProductList={setProducts} />
        </label>
      </form>


    </StyledDiv>
  )
}



export default App
import React from "react"
import "./App.css"
import Title from "./components/Title"
import ProductsList from "./components/ProductsList"
import styled from "styled-components"
import { mediaSmall } from "./utils/screen(media)"
import { useLocalStorage } from "./components/useLocalStorage"
import Form from "./Form"

function App() {
  const defaultProducts = [
    { name: "milk", completed: false },
    { name: "juice", completed: false },
    { name: "eggs", completed: true }
  ]
  const [products, setProducts] = useLocalStorage("products", defaultProducts)
  return (
    <MainWrapper>
      <Title>Shopping List</Title>
      <Form products={products} setProducts={setProducts} />
      <ProductsList products={products} setProductList={setProducts} />
    </MainWrapper>
  )
}

export default App

const MainWrapper = styled.div`
  padding-top: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 500px;
  ${mediaSmall} {
    display: flex;
    justify-content: center;
  }
  h1 {
    color: #000;
    text-align: center;
    margin-top: 0;
  }
  div {
    display: flex;
    justify-content: center;
  }
`

import React, { useState } from "react"
import { updateObjectInArray, deleteObjectInArray } from "../utils/helper"
import styled from "styled-components"
import ProductListItem from "./ProductListItem"
import { Button } from "../Form"

const ProductsList = props => {
  const { products, setProductList } = props
  const [isCompletedProducts, setIsCompletedProducts] = useState(false)
  const deleteProduct = name => {
    const updatedProducts = deleteObjectInArray(products, name)
    setProductList(updatedProducts)
  }

  const toogleCompletedProducts = () => {
    setIsCompletedProducts(!isCompletedProducts)
  }

  const clickOnProduct = name => {
    const oneItem = products.find(item => {
      return name === item.name
    })
    // 1. Create new element with updates
    const updatedItem = { ...oneItem, completed: !oneItem.completed }

    // 2. Get new updated full products list
    const updatedProducts = updateObjectInArray(products, updatedItem)
    // 3. Set new state
    setProductList(updatedProducts)
  }

  const completedList = products.filter(({ completed }) => {
    return completed === true
  })
  const notCompletedList = products.filter(({ completed }) => {
    return completed === false
  })

  const mapProducts = items => {
    return items.map(({ name, completed }, i) => {
      return (
        <ProductListItem
          key={i}
          name={name}
          completed={completed}
          clickOnProduct={clickOnProduct}
          i={i}
          deleteProduct={deleteProduct}
        />
      )
    })
  }

  const mapedNotCompletedProducts = mapProducts(notCompletedList)
  const mapedCompletedProducts = mapProducts(completedList)

  return (
    <>
      <StyledUl>{mapedNotCompletedProducts}</StyledUl>
      {isCompletedProducts && (
        <StyledUl>
          <h1>Completed</h1>
          {mapedCompletedProducts}
        </StyledUl>
      )}

      <ButtonWrapper>
        <Button type="button" onClick={toogleCompletedProducts}>
          {isCompletedProducts === false ? "Show completed" : "Hide"}
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default ProductsList

const StyledUl = styled.ul`
  padding-left: 0;
  h1 {
    color: black;
    text-align: center;
    background-color: #0805f9;
    margin-top: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    background-color: white;
    color: #000000;
    border: 2px solid #000;
    margin: 10px;
    &:hover {
      background: #0805f9;
      color: #fff;
      text-decoration: none;
    }
    p {
      font-weight: bold;
      padding-left: 16px;
      flex: 1;
    }
  }
`
const ButtonWrapper = styled.div`
  margin-bottom: 50px;
  margin-right: 8px;
  margin-left: 8px;
  justify-content: center;
  display: flex;
`

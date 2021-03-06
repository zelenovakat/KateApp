import React, { useState } from "react"
import { updateObjectInArray, deleteObjectInArray } from "../utils/helper"
import styled from "styled-components"
import ProductListItem from "./ProductListItem"

const ProductsList = (props) => {
  const { products, setProductList } = props
  const [isCompletedProducts, setIsCompletedProducts] = useState(false)
  const deleteProduct = (name) => {
    const updatedProducts = deleteObjectInArray(products, name)
    setProductList(updatedProducts)
  }

  const toogleCompletedProducts = () => {
    setIsCompletedProducts(!isCompletedProducts)
  }

  const clickOnProduct = (name) => {
    const oneItem = products.find((item) => {
      return name === item.name
    })
    const updatedItem = { ...oneItem, completed: !oneItem.completed }
    const updatedProducts = updateObjectInArray(products, updatedItem)
    setProductList(updatedProducts)
  }

  const completedList = products.filter(({ completed }) => {
    return completed === true
  })
  const notCompletedList = products.filter(({ completed }) => {
    return completed === false
  })

  const mapProducts = (items) => {
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
          {completedList.length > 0 && <h1>Completed</h1>}
          {mapedCompletedProducts}
        </StyledUl>
      )}
      {completedList.length > 0 && (
        <ButtonWrapper>
          <Button type="button" onClick={toogleCompletedProducts}>
            {isCompletedProducts === false ? "Show completed" : "Hide"}
          </Button>
        </ButtonWrapper>
      )}
    </>
  )
}

export default ProductsList
const Button = styled.button`
  cursor: pointer;
  min-width: 250px;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid gray;
  background-color: #3c96d39e;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
`
const StyledUl = styled.ul`
  padding-left: 0;
  h1 {
    color: #000;
    text-align: center;
    margin-top: 0;
    font-weight: normal;
    font-size: 25px;
    padding-bottom: 20px;
  }

  li {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    background-color: white;
    color: #000000;
    margin: 3px;
    min-width: 300px;
    &:hover {
      p {
        opacity: 0.5;
      }
    }
    p {
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

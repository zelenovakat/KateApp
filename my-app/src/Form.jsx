import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointer } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Form = props => {
  const { products, setProducts} = props
  const [newProduct, setNewProduct] = useState("")
  const handleClick = () => {
    const newItem = { name: newProduct, completed: false }
    const updatedProducts = [newItem, ...products]
    setProducts(updatedProducts)
    setNewProduct("")
  }
  return (
    <form onSubmit={handleClick}>
        <StyledDiv>
          <Input
            type="text"
            value={newProduct}
            onChange={event => {
              console.log(event.target.value)
              setNewProduct(event.target.value)
            }}
          />
          <Button type="button" onClick={handleClick}>
            <FontAwesomeIcon icon={faHandPointer} />
          </Button>
        </StyledDiv>
      </form>
  )
}

export default Form

const StyledDiv = styled.div`
  display: flex;
  margin: 0 8px;
`
export const Button = styled.button`
  background-color: darkgrey;
  border-top: 2px solid #fff;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  border-left: 2px solid #fff;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
`
const Input = styled.input`
width: 100%;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid;
font-size: 25px;
`

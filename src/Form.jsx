import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointer } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Form = props => {
  const { products, setProducts } = props
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
        <InputButton type="button" onClick={handleClick}>
          <FontAwesomeIcon icon={faHandPointer} />
        </InputButton>
      </StyledDiv>
    </form>
  )
}

export default Form

const StyledDiv = styled.div`
  display: flex;
  margin: 0 8px;
  padding-top: 20px;
`
export const Button = styled.button`
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid gray;
  background-color: lavender;
`
const Input = styled.input`
  min-width: 250px;
  border: 1px solid gray;
  font-size: 18px;
`
const InputButton = styled(Button)`
  border-left: 0;
  border: 1px solid gray;
  background-color: lavender;
`

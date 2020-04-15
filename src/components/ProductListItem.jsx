import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
const ProductListItem = props => {
  const { name, completed, clickOnProduct, deleteProduct } = props
  return (
    <li
      key={name}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}>
      <p
        onClick={() => {
          clickOnProduct(name)
        }}>
        {name}
        {""}
      </p>

      <DeleteButton onClick={() => deleteProduct(name)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </DeleteButton>
    </li>
  )
}

export default ProductListItem
const DeleteButton = styled.button`
  color: #413e3ed4;
`

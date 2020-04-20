import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { mediaSmall } from "../utils/screen(media)"
import styled from "styled-components"
const ProductListItem = (props) => {
  const { name, completed, clickOnProduct, deleteProduct } = props
  return (
    <List
      key={name}
      style={{
        textDecoration: completed ? "line-through" : "none",
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
    </List>
  )
}

export default ProductListItem
const List = styled.li`
  border-radius: 7px;
  max-width: 318px;

  p {
    word-break: break-word;
  }
`
const DeleteButton = styled.button`
  cursor: pointer;
  color: #6f6565;
  font-size: 15px;
  ${mediaSmall} {
    border: none;
  }
`

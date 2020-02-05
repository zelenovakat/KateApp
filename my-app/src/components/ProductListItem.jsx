import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { Button } from '../Form'

const ProductListItem = props => {
  const { name, completed, clickOnProduct, deleteProduct } = props
  return (
    <li
      key={name}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}>
      <p
        onClick={() => {
          clickOnProduct(name)
        }}>
        {name}{""}
      </p>

      <Button onClick={() => deleteProduct(name)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
    </li>
  )
}

export default ProductListItem



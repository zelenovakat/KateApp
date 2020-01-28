import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { updateObjectInArray, deleteObjectInArray } from "../utils/helper"

const ProductsList = (props) => {
  const { products, setProductList } = props
  const handleClick = (i) => {
    const updatedProducts = deleteObjectInArray(products, i)
    setProductList(updatedProducts)
  }

  const clickOnProduct = (i) => {
    // 1. Create new element with updates
    const oneItem = {...products[i], completed: !products[i].completed}
    // 2. Prepare action for update
    const action = {
      index: i,
      item: oneItem
    }
    // 3. Get new updated full products list
    const updatedProducts = updateObjectInArray(products, action)
    // 4. Set new state
    setProductList(updatedProducts)
  }


  const mapedProducts = products.map(({ name, completed }, i) => {
    console.log(name)
    return (
      <li key={name}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}>
       <p onClick={() => {clickOnProduct(i) }
         }>{name}</p>
        <button onClick={() => handleClick(i)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </li>

    )
  })

  return (
    <ul>
      {mapedProducts}
    </ul>
  )
}

export default ProductsList

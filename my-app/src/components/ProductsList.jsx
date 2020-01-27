import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ProductsList = (props) => {
  const { products, setProductList } = props
  const handleClick = (i) => {
    const updatedProducts = [...products.slice(0, i ), ...products.slice(i + 1)]
    setProductList(updatedProducts)
  }
  const mapedProducts = products.map((item, i) => {

    return (
      <li key={item}>
        {item}
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

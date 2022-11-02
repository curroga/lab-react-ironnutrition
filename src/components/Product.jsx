import React from 'react'
import '../styles/Product.css'

function Product(props) {
  return (
    <div className='container-principal'>
      <p>{props.eachItem.name}</p>
      <img src={props.eachItem.image} alt={props.eachItem.name} width="200px" />
      <p>Calories: {props.eachItem.calories}</p>
      <p>Servings: {props.eachItem.servings}</p>
    </div>
  )
}

export default Product
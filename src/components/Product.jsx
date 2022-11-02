import React from 'react'
import '../styles/Product.css'

function Product(props) {
  //console.log(props)

  const borrarComida = (comidaName) => {
    console.log(comidaName)
    props.borrarComida(comidaName)

  }

  return (
    <div className='container-principal'>
      <p>{props.eachItem.name}</p>
      <img src={props.eachItem.image} alt={props.eachItem.name} width="200px" />
      <p>Calories: {props.eachItem.calories}</p>
      <p>Servings: <strong>{props.eachItem.servings}</strong></p>
      <p><strong>Total Calories: {(props.eachItem.calories)*(props.eachItem.servings)}</strong>kcal</p>
      <button onClick={() => borrarComida(props.eachItem.name)}>Borrar</button>
    </div>
  )
}

export default Product
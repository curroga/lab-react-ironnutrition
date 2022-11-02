import React, { useState } from 'react'

function AddFoodForm(props) {

  const [nameInput, setnameInput] = useState("")
  const [imageInput, setImageInput] = useState("")
  const [caloriesInput, setCaloriesInput] = useState(0)
  const [servingsInput, setServingsInput] = useState(0)
  
  const añadirAlimento = (event) => {
    event.preventDefault()

    console.log(nameInput, imageInput, caloriesInput, servingsInput)
    const comida = {
      name: nameInput,
      image: imageInput,
      calories: caloriesInput,
      servings: servingsInput
    }

    props.addComida(comida)

  }
  const handleChangeName = (event) => {
    setnameInput(event.target.value)
  }
  const handleChangeImage = (event) => {
    setImageInput(event.target.value)
  }
  const handleChangeCalories = (event) => {
    setCaloriesInput(event.target.value)
  }
  const handleChangeServings = (event) => {
    setServingsInput(event.target.value)
  }
  return (
    <div>
      <h4>Formulario de agregar nueva comida</h4>

      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={nameInput} onChange={handleChangeName} />

        <label htmlFor="image">Imagen</label>
        <input type="text" name="image" value={imageInput} onChange={handleChangeImage} />

        <label htmlFor="calories">Calories</label>
        <input type="number" name="calories" value={caloriesInput} onChange={handleChangeCalories} />

        <label htmlFor="servings">Servings</label>
        <input type="number" name="servings" value={servingsInput} onChange={handleChangeServings} />

        <button onClick={añadirAlimento}>Crear</button>

      </form>
    </div>
  )
}

export default AddFoodForm
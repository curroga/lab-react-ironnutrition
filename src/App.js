import './App.css';
// src/index.js
import 'antd/dist/antd.min.css';

import foods from './foods.json';
import { useState } from 'react';
import Product from './components/Product';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search'
import Mensaje from './components/Mensaje';

function App() {

  const [foodsList, setFoodsList] = useState(foods)
  const [foodsListShow, setFoodsListShow] = useState(foods)
  const [formIsShowing, setFormIsShowing] = useState(false)
  

  const addComida = (comida) => {
    console.log("añadiendo comida desde AddFoodForm", comida)
    const copy = [...foodsList]
    copy.push(comida)
    setFoodsList(copy)

    const copy2 = [...foodsListShow]
    copy2.push(comida)
    setFoodsListShow(copy2)
  }

  const filterComida = (filterQuery) => {
    //console.log(filterQuery)
    const filteredComida = foodsList.filter((eachComida) => {
      return eachComida.name.startsWith(filterQuery)
    })

    setFoodsListShow(filteredComida)
  }
  const borrarComida = (deleteComida) => {
    const filteredComida = foodsListShow.filter((eachComida) => {
      if(eachComida.name === deleteComida){
        return false
      }else{
        return true
      }
    })
    
    setFoodsListShow(filteredComida)
  }
  
  const toggleForm = () => {
    setFormIsShowing(true)
    if(formIsShowing === true){
      setFormIsShowing(false)
    } else{
      setFormIsShowing(true)
    }
  }
  
  



  return (
    <div className="App">
      
      <button onClick={toggleForm}>Abrir el form</button>
      {formIsShowing === true && <AddFoodForm addComida={addComida} /> }
      
      <hr />
      <Search filterComida={filterComida} />
      <hr />

      <h1>Food List</h1>
      <div className='container-foods'>
      {foodsListShow.map((eachFood, index) => {
        return(
          <Product
           key={eachFood.name + index}
           eachItem = {eachFood}
           borrarComida={borrarComida}
           />
        )
      })}
      {foodsListShow.length === 0 && <Mensaje /> }


      </div>
      
    </div>
  );
}

export default App;

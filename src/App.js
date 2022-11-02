import './App.css';
// src/index.js
import 'antd/dist/antd.min.css';

import foods from './foods.json';
import { useState } from 'react';
import Product from './components/Product';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search'

function App() {

  const [foodsList, setFoodsList] = useState(foods)
  const [foodsListShow, setFoodsListShow] = useState(foods)

  const addComida = (comida) => {
    console.log("añadiendo comida desde AddFoodForm", comida)
    const copy = [... foodsList]
    copy.push(comida)
    setFoodsList(copy)

    const copy2 = [... foodsListShow]
    copy2.push(comida)
    setFoodsListShow(copy2)
  }

  const filterComida = (filterQuery) => {
    console.log(filterQuery)
    const filteredComida = foodsList.filter((eachComida) => {
      return eachComida.name.startsWith(filterQuery)
    })

    setFoodsListShow(filteredComida)
  }

  



  return (
    <div className="App">
      
      <AddFoodForm addComida={addComida} />
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
           />
        )
      })}

      </div>
      
    </div>
  );
}

export default App;

import './App.css';
// src/index.js
import 'antd/dist/antd.min.css';

import foods from './foods.json';
import { useState } from 'react';
import Product from './components/Product';
import AddFoodForm from './components/AddFoodForm';

function App() {

  const [foodsList, setFoodsList] = useState(foods)

  const addComida = (comida) => {
    console.log("añadiendo comida desde AddFoodForm", comida)
    const copy = [... foodsList]
    copy.push(comida)
    setFoodsList(copy)
  }



  return (
    <div className="App">
      
      <AddFoodForm addComida={addComida} />

      <h1>Food List</h1>
      <div className='container-foods'>
      {foodsList.map((eachFood, index) => {
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

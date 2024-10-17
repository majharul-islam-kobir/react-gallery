/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState } from "react"
import FoodCard from "./FoodCard/FoodCard"
import { foodData } from "./FoodCard/jeson";


function App() {

  
  let [index , setIndex] = useState(0);

  
  let clickNextHendeler = () => {
    setIndex ( ( old => {
      let newData = old + 1 ;
      if ( newData >= foodData.length ){
        return 0;
      }
      return newData;
    }))
    
  }


  let clickPrevHendeler = () => {
    setIndex ( ( old => {
      let newData = old - 1 ;
      if ( newData < 0  ){
        return foodData.length -1 ;
      }
      return newData;
    }))
    
  }

  return (
    <>
      <FoodCard onClick ={clickNextHendeler} test={clickPrevHendeler} dataIndex={index} data={foodData[index]} />
      
      
      
    </>
  )

  

  
}

export default App
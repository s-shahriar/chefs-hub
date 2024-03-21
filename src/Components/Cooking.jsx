import React, { useState } from 'react'
import "./Cooking.css"
import CurrentCook from './CurrentCook'
import WantCook from './WantCook'
const Cooking = ({cookData, prepareLoader}) => {

  const [wantCook, setWantCook] = useState([]);

  const cookingHandler =(cooking)=> {
    const newWantCook = [...wantCook,cooking]
    setWantCook(newWantCook)
  }

  return (
    <div className='cook border-2 border-xl max-h-min'>
      <CurrentCook cookData={cookData} cookingHandler={cookingHandler} prepareLoader={prepareLoader}></CurrentCook>
      <WantCook wantCook={wantCook}></WantCook>
    </div>
  )
}

export default Cooking

import React from "react";
import "./CurrentCook.css";
const CurrentCook = ({cookData,cookingHandler, prepareLoader}) => {

  const handlePrepare =(cook)=> {
    cookingHandler(cook);
    prepareLoader(cook)
  }

  return (
    <div className="current-cook flex flex-col justify-center items-center mb-10 p-4">
      <h1>Want to cook: {cookData.length}</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {
            cookData.map((cook,index)=> (
              <tr key={index}>
              <td>{index+1}</td>
              <td>{cook.recipe_name}</td>
              <td>{cook.preparing_time}</td>
              <td>{cook.calories}</td>
              <td>
              <button className="prepare-btn btn btn-accent" onClick={()=> handlePrepare(cook)}>Preparing</button>
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default CurrentCook;

import React from "react";
import "./WantCook.css";

const WantCook = ({ wantCook}) => {
  const totalCalories = wantCook.reduce((total, cook)=> {
    const calories = parseInt(cook.calories);
    return total+calories
  }, 0  )

  const totalTime = wantCook.reduce((total, cook)=> {
    const time = parseInt(cook.preparing_time);
    return total+time
  }, 0  )

  return (
    <div className="want-cook flex flex-col justify-center items-center mb-10 p-4">
      <h1>Currently cooking: {wantCook.length}</h1>
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
          {wantCook.map((cook, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{cook.recipe_name}</td>
              <td>{cook.preparing_time}</td>
              <td>{cook.calories}</td>
            </tr>
          ))}
          <tr className="calc">
            <td colSpan={3} className="text-bold">
              Total Time = <br></br>
              {totalTime} minutes
            </td>
            <td className="text-bold">
              Total Calories = <br></br>
              {totalCalories} calories
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WantCook;

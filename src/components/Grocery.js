import React from "react"

const Grocery = ({grocery, onDeleteGrocery, onUpdateGrocery}) => {
  return (
    <li>
      <p style={{textDecoration: grocery.isBought ? "line-through" : ""}} onClick={onUpdateGrocery}>{grocery.name}</p>
      <button onClick={onDeleteGrocery}>Delete Grocery</button>
    </li>
  )
}

export default Grocery
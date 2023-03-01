import React from 'react'
import DessertButton from './UI/DessertButton';
import backgroundImage from '../images/home-img.jpeg';
import classes from './Meals/MealsSummary.module.css'

const SelectMenu = ({setPageIDProp}) => {

const showDesserts = () =>{
    setPageIDProp(3);
}
const showShakes = () =>{
    setPageIDProp(2);
}
  return (
    <div >
      <img src={backgroundImage} alt='Random Background Image'></img>
        <ul className={classes.summary}>
        <button onClick={showDesserts}><DessertButton /></button>
        <br></br>
        <button onClick={showShakes}>Shakes</button>
        </ul>
    </div>
  )
}

export default SelectMenu
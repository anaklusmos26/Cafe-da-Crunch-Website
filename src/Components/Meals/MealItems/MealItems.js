import classes from './MealItems.module.css';
import MealItemForm from './MealItemForm';

const MealItem=({id,name,price,items,setItems})=>
{
    return(
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div>Rs {price} </div>
            </div>
            <div className={classes.price}>
                <MealItemForm id={id} name={name} price={price} items={items} setItems={setItems}/>
            </div>
        </li>
    )
}
export default MealItem;
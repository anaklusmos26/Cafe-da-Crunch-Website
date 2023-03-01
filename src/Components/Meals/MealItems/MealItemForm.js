import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import CartItems from '../../Cart/CartItems';
import {useState} from 'react';

const MealItemForm = ({name,price, id,items,setItems})=>
{
    const [quantity,setQuantity]=useState(1);
    const addToCart = () => {
        console.log(id);
        console.log(quantity);
        setItems([...items,{product:name,price:quantity*price, quantity:quantity}])
        console.log(items)
    }

    return(
        <form className={classes.form}>
            {/* <Input label="Amount" input={{
                id: 'amount',
                type: 'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue: '1'
            }} setQuantity={setQuantity}/> */}
            <input
             type='number' 
             onChange={e => setQuantity(parseInt(e.target.value))}
             ></input>
            <div onClick={addToCart}>+ Add</div>

        </form>
    )
};

export default MealItemForm;
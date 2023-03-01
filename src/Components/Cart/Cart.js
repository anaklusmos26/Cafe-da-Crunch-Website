import classes from './Cart.module.css';
import Card from '../UI/card';
import React from 'react';


const Cart = ({items,setItems})=>
{
    const remove=(e)=>{
        const product= e.target.getAttribute("product")
        setItems(items.filter(item=>item.product !== product))
    }
    return<section className={classes.meals}>
    <div>
        {items.map((item) => <div>
            <text>{item.product} </text>
            <text>{item.quantity} </text>
            <text>Rs.{item.price} </text>
            <div product={item.product} onClick={remove}>-</div>
        </div>)}
    </div>
    </section>
};

export default Cart;    
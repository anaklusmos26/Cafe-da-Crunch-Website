import CartIcon from '../Cart/CartIcon';
import { useEffect, useState } from 'react';

// eslint-disable-next-line no-unused-vars
import classes from './Button.module.css';

const CartButton = ({items}) => {
    const[total,setTotal]=useState(0);
    useEffect(()=>{
        items.forEach((item)=>{
            setTotal(total + item.quantity)
        })
    },[items]);

    return <button className={classes.button} >
        <span className={classes.icon}><CartIcon /></span>
        <span>Cart</span>
        <span className={classes.badge}>{total}</span>
    </button>
};

export default CartButton;
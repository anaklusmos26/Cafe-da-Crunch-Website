import React from 'react'
import Cart from './Cart'

const ShowCart = ({setPageIDProp}) => {

     const Close = () =>{
        setPageIDProp(0);
    }
    const Checkout = () =>{
        setPageIDProp(5);
    }
      return (
        <div >
            <Cart />
            <button onClick={Close}>Close</button>
            <button onClick={Checkout}>Checkout</button>
           
        </div>
      );
    };
    
    export default ShowCart
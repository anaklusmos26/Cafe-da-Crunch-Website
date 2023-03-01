import { Fragment } from 'react';
import HomeButton from './HomeButton';
import CartButton from './CartButton';
import MenuButton from './MenuButton'


import Logo from '../../images/logo.png';
//import Coffee from '../../images/home-img.jpeg';

import classes from './Header.module.css';

const Header = ({setPageIDProp,items}) =>
{
    const showHome = () => {
        setPageIDProp(0);
    }

    const showMenu = () =>{
        console.log("showMenu");
        setPageIDProp(1);
    }

  

    const showCart = () =>{
        console.log("showCart");
        setPageIDProp(4);
    }

    return (
    <Fragment>
        <header className={classes.header}>
         
        <img src={Logo} alt='random background'></img>
            <div className={classes.header1}>
                <h1><strong>Da Cafe Crunch</strong></h1>
             
             </div>   
             
             <div className={classes.header1}>
            <div className={classes.menuBtn} onClick={showHome}>
            <HomeButton /></div>
            <h1> | </h1>
            

            <div className={classes.menuBtn} onClick={showMenu}>
            <MenuButton />
            </div>
            <h1> | </h1>
            
            <div className={classes.menuBtn} onClick={showCart}>
            <CartButton items={items}/>
            </div>
            </div>
        </header>
    </Fragment>
    );
    } ;

    export default Header;
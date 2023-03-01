import {Fragment,useState} from 'react';

import Shakes from './Components/Meals/Shakes';
import Desserts from './Components/Meals/Desserts';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Cart/Checkout'

import './index.css'



import Header from './Components/Layout/Header';
import HomePage from './Components/Homepage/HomePage';
//import backgroundImage from './images/home-img.jpeg';
import SelectMenu from './Components/SelectMenu';

function App() {
  const[pageID,setPageID]=useState(0);
  const[items,setItems]=useState([]);
  return (
    <Fragment>
      <div >
      <Header setPageIDProp={setPageID} items={items}/>
      {(pageID===0)?(<HomePage/>):(<></>)}
      {(pageID===1)?(<SelectMenu setPageIDProp={setPageID}/>):(<></>)}
      {(pageID===2)?(<Shakes items={items} setItems={setItems}/>):(<></>)}
      {(pageID===3)?(<Desserts  items={items} setItems={setItems}/>):(<></>)}
      {(pageID===4)?(<Cart items={items} setItems={setItems}/>):(<></>)}
      {(pageID===5)?(<Checkout  />):(<></>)}</div>
    </Fragment>
  );
}

export default App;

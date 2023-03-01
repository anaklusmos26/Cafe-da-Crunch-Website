import Card from '../UI/card';
import MealItem from './MealItems/MealItems';
import classes from './Menu.module.css';


const Desserts = [
    {
        id:'d1',
        name:'Walnut Brownie',
        price:60,
    },
    {
        id:'d2',
        name:'Chocolate passion',
        price:110,
    },
    {
        id:'d3',
        name:'Sizzling Brownie ',
        price:150,
    },
    {
        id:'d4',
        name:'Brownie with IceCream',
        price:90,
    },
    {
        id:'d5',
        name:'Brwonie cheese Passion',
        price:130,
    },
    {
        id:'d6',
        name:'White Brownie',
        price:80,
    },
    {
        id:'d7',
        name:'Doughnut',
        price:50,
    },
    {
        id:'d8',
        name:'White Doughnut',
        price:80,
    },
   
];

const AvailableDesserts=({items,setItems})=>{
    const DessertsList=Desserts.map(dessert => <MealItem 
        id={dessert.id} 
        name={dessert.name} 
        price={dessert.price}
        items={items} setItems={setItems}/>);
     
    return <section className={classes.meals}>
        <Card><ul>
            {DessertsList}
        </ul>
        </Card>
        
    </section>
};

export default AvailableDesserts;
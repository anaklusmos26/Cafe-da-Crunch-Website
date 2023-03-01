import Card from '../UI/card';
import MealItems from './MealItems/MealItems';
import classes from './Menu.module.css';
import Shakes from './shakesList'

const AvailableShakes=({items,setItems})=>{
    const ShakesList=Shakes.map((shake) => <MealItems 
        id={shake.id} 
        name={shake.name} 
        price={shake.price}
        items={items} setItems={setItems}/>);
     
    return <section className={classes.meals}>
        <Card>
        <ul>
            {ShakesList}
        </ul>
        </Card>
        
    </section>
};

export default AvailableShakes;
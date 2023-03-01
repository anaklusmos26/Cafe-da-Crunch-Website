import classes from './MealsSummary.module.css';
import Coffee from '../../images/home-img.jpeg'


const MealsSummary = () => {
  return (
    <div>
      <img src={Coffee} alt='Random Background'></img>
      <section className={classes.summary}>
      <h2>"Making Life Tastier"</h2>
      <h4>Email:dacafe.crunch12@gmail.com</h4>
      <h4>Contact:7301221111</h4>
      <p>Free home Deliveries on orders orders above Rs299</p>
   
      </section>
      </div>
    
  );
};

export default MealsSummary;

import React from 'react';
import classes from './meals-grid.module.css';
import MealItem from "@/components/meals/meal-item";
interface MealProps{
    id: string,
    title: string,
    slug: string,
    image: string,
    summary: string,
    creator: string
}
const MealsGrid = ({meals}: {meals: MealProps[]}) => {
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal}/>
                </li>
            ))}
        </ul>
    );
};

export default MealsGrid;

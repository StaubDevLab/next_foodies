import React from 'react';
import classes from './page.module.css';
import Image from "next/image";
import {getMealsBySlug} from "@/lib/meals";
import {Meal} from "@/@types/meal";
import {notFound} from "next/navigation";
import MealDeleteBtn from "@/components/meals/meal-delete-btn";

export async function generateMetadata({params}) {
    const meal = await getMealsBySlug(params.mealSlug) as Meal;
    if (!meal) {
        notFound()
    }
    return {
        title: meal.title,
        description: meal.summary
    }
}

async function MealDetailPage({params}: { params: { mealSlug: string } }) {

    const meal = await getMealsBySlug(params.mealSlug) as Meal;

    if (!meal) {
        notFound()
    }
    meal.instructions = meal.instructions.replaceAll('\n', '<br>');
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={`https://next-foodies.s3.eu-west-3.amazonaws.com${meal.image}`} alt={""} fill/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions
                }}></p>
            </main>
            <MealDeleteBtn id={meal.id}/>

        </>
    );
}

export default MealDetailPage;
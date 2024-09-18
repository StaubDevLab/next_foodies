'use server'

import {deleteMeal, saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {Meal} from "@/@types/meal";
import {revalidatePath} from "next/cache";

function iSInvalidText(text: string) {
    return !text || text.trim() === '';
}

function isInvalidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !regex.test(email);
}

export async function shareMeal(prevState, formData: FormData) {

    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
    } as Meal;
    if (iSInvalidText(meal.title) ||
        iSInvalidText(meal.summary) ||
        iSInvalidText(meal.instructions) ||
        iSInvalidText(meal.creator) ||
        iSInvalidText(meal.creator_email) ||
        isInvalidEmail(meal.creator_email) ||
        !meal.image ) {

        return {
            message: 'Invalid input. '
        }
    }
    await saveMeal(meal);
    revalidatePath('/meals','layout');
    redirect('/meals')

}

export async function removeMeal(mealID: string) {
    await deleteMeal(mealID)
    redirect('/meals')
}
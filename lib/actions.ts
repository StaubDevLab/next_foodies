'use server'

import {deleteMeal, saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {Meal} from "@/@types/meal";

export async function shareMeal(formData: FormData) {

    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator : formData.get("name"),
        creator_email: formData.get("email"),
    }
    await saveMeal(meal)
    redirect('/meals')

}

export async function removeMeal(mealID: string) {
    await deleteMeal(mealID)
    redirect('/meals')
}
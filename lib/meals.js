import fs from 'fs';
import slugify from "slugify";
import xss from "xss";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function getMeals() {
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    return await prisma.meal.findMany()
}

export async function getMealsBySlug(slug) {
    return await prisma.meal.findUnique({where: {slug: slug}})
}

export async function saveMeal(meal) {
    await new Promise((resolve) => setTimeout(resolve, 5000));   meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);
    const extension = meal.image.name.split(".").pop()
   const fileName = `${meal.slug}.${extension}`
    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer()
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error(`Could not write image: ${error}`);
        }
    });
    meal.image = `/images/${fileName}`
    await prisma.meal.create({
        data : meal
    })

}

export async function deleteMeal(mealId) {
    await prisma.meal.delete({where: {id: mealId}})

}
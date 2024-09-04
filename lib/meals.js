import sql from 'better-sqlite3';
const db = sql('db/meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return db.prepare("SELECT * FROM meals").all();
}

export async function getMealsBySlug(slug) {

    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
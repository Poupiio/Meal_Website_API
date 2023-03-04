const db = require('../utils/db');


const getAll = async () => {
    const [burgers, err] = await db.query("SELECT name FROM items WHERE category = 2");
    return burgers;
};

const getById = async (id) => {
    const [burger, err] = await db.query("SELECT categories.name AS category, items.name AS item FROM categories INNER JOIN items ON categories.id = 2 AND categories.id = items.category", [id]);
    if (!burger) {
        return null;
    }
    return burger[0];
};

const add = async (data) => {

    const [burger, err] = await db.query("INSERT INTO items (name, description, price, image, category) VALUES (?, ?, ?, ?, ?)", [data.name, data.description, data.price, data.image, data.category]);
    if (!burger) {
        return null;
    }

    return burger;
};

const remove = async (id) => {
    const [req, err] = await db.query("DELETE FROM items WHERE category = 2 AND id = ? LIMIT 1", [id]);
    if (!req) {
        return false;
    }
    return true;
};


module.exports = {
    getAll,
    getById,
    add,
    remove
}
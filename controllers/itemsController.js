const db = require('../utils/db');


const getAll = async () => {
    const [items, err] = await db.query("SELECT * FROM items");
    return items;
};

const getAllItemsInfos = async () => {
    const [infos, err] = await db.query("SELECT items.name, items.description, items.price, categories.name AS category FROM items LEFT JOIN categories ON items.category = categories.id");
    return infos;
}


module.exports = {
    getAll,
    getAllItemsInfos
}
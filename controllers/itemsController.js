const db = require('../utils/db');


const getAll = async () => {
    const [items, err] = await db.query("SELECT * FROM items");
    return items;
};


module.exports = {
    getAll
}
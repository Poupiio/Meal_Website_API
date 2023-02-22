const db = require('../utils/db');


const getAll = async () => {
    const [categories, err] = await db.query("SELECT * FROM categories");
    return categories;
};


module.exports = {
    getAll
}
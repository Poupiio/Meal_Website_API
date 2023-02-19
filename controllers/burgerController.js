const db = require('../utils/db');

const getAll = async () => {
    const [burgers, err] = await db.query("SELECT * FROM items");
    return burgers;
};



module.exports = {
    getAll
}
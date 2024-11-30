const db = require('../db');

const ConfigModel = {
    updateDefaultPages: (defaultPages, callback) => {
        const query = 'UPDATE config SET default_pages = ?';
        db.query(query, [defaultPages], callback);
    },

    updatePagePrice: (pagePrice, callback) => {
        const query = 'UPDATE config SET page_price = ?';
        db.query(query, [pagePrice], callback);
    }
};

module.exports = ConfigModel;

const ConfigModel = require('../models/configModel');

const ConfigService = {
    updateDefaultPages: (defaultPages, callback) => {
        if (defaultPages < 0) {
            return callback(new Error('default_pages must be a positive number'));
        }
        ConfigModel.updateDefaultPages(defaultPages, callback);
    },

    updatePagePrice: (pagePrice, callback) => {
        if (pagePrice < 0) {
            return callback(new Error('page_price must be a positive number'));
        }
        ConfigModel.updatePagePrice(pagePrice, callback);
    }
};

module.exports = ConfigService;

const ConfigService = require('../services/configService');

const ConfigController = {
    updateDefaultPages: (req, res) => {
        const { default_pages } = req.query;

        if (default_pages === undefined) {
            return res.status(400).json({ message: 'Missing required field: default_pages' });
        }

        ConfigService.updateDefaultPages(default_pages, (err) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }
            res.status(200).json({ message: 'Cập nhật thành công' });
        });
    },

    updatePagePrice: (req, res) => {
        const { page_price } = req.query;

        if (page_price === undefined) {
            return res.status(400).json({ message: 'Missing required field: page_price' });
        }

        ConfigService.updatePagePrice(page_price, (err) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }
            res.status(200).json({ message: 'Cập nhật thành công' });
        });
    }
};

module.exports = ConfigController;

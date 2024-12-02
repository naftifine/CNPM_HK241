const configPrintService = require('../services/configPrintService');

// Controller to handle the request for printing configurations
const configPrintController = {
    submitConfigPrintJob: async (req, res) => {
        const { userId, file, copies, pageRange, paperSize, color } = req.body;

        // Validate the input
        if (!userId || !file || !copies || !pageRange || !paperSize) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        try {
            // Call the service to send the print job to the printer
            const printerResponse = await configPrintService.sendToPrinter({
                userId,
                file,
                copies,
                pageRange,
                paperSize,
                color,
            });

            res.status(200).json(printerResponse);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = configPrintController;

const userModel = require('../models/userModel');

function convertToA4Pages(pageSize, numberOfPages) {
    switch (pageSize) {
        case 'A3':
            return numberOfPages * 2;
        case 'A2':
            return numberOfPages * 4; 
        case 'A1':
            return numberOfPages * 8; 
        case 'A0':
            return numberOfPages * 16; 
        default:
            return numberOfPages;
    }
}

exports.getUserInfo = async (student_id) => {
    try {
        const user = await userModel.getUserById(student_id);

        if (!user) {
            throw new Error('Không tìm thấy người dùng');
        }

        const printHistory = await userModel.getPrintHistoryByUserId(student_id);
        let printed_pages = 0;
        printHistory.forEach(printRecord => {
            printed_pages += convertToA4Pages(printRecord.page_size, printRecord.number_of_pages);
        });

        return { user, printed_pages: printed_pages };
    } catch (err) {
        throw err;
    }
};

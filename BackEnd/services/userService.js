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

const getUserInfo = (student_id, callback) => {
    userModel.getUserById(student_id, (err, user) => {
        if (err) return callback(err);

        if (!user) {
            return callback(new Error('Không tìm thấy người dùng'));
        }

        userModel.getPrintHistoryByUserId(student_id, (err, printHistory) => {
            if (err) return callback(err);

            let printed_pages = 0;
            printHistory.forEach(printRecord => {
                printed_pages += convertToA4Pages(printRecord.page_size, printRecord.number_of_pages);
            });

            callback(null, { user, printed_pages });
        });
    });
};

module.exports = { getUserInfo };

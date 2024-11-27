const userService = require('../services/userService');

const getUserInfo = (req, res) => {
    const { student_id } = req.query;

    if (!student_id) {
        return res.status(400).json({ error: 'student_id là bắt buộc' });
    }

    userService.getUserInfo(student_id, (err, userInfo) => {
        if (err) {
            console.error('Error in getUserInfo:', err);
            return res.status(500).json({ error: 'Lỗi server' });
        }

        const response = {
            student_id: userInfo.user.student_id,
            name: userInfo.user.name,
            major: userInfo.user.major,
            remaining_pages: userInfo.user.remaining_pages, 
            printed_pages: userInfo.printed_pages
        };

        res.status(200).json(response);
    });
};

module.exports = { getUserInfo };

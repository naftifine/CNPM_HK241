const userService = require('../services/userService');

exports.getUserInfo = async (req, res) => {
    const { student_id } = req.query;

    if (!student_id) {
        return res.status(400).json({ error: 'student_id là bắt buộc' });
    }

    try {
        const userInfo = await userService.getUserInfo(student_id);
        const response = {
            student_id: userInfo.user.student_id,
            name: userInfo.user.name,
            major: userInfo.user.major,
            remaining_pages: userInfo.user.remaining_pages, 
            printed_pages: userInfo.printed_pages
        };

        res.status(200).json(response);
    } catch (err) {
        console.error('Error in getUserInfo:', err);
        res.status(500).json({ error: 'Lỗi server' });
    }
};

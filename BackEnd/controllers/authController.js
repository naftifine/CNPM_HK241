const { login } = require('../services/authService');

const authHandler = (req, res) => {
  const { bknetid, password } = req.query;

  login(bknetid, password, (err, result) => {
    if (err) {
      return res.status(err.status).json({ error: err.message });
    }
    res.status(200).json(result);
  });
};

module.exports = { authHandler };

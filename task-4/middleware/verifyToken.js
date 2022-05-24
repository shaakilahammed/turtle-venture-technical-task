const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json('Invalid Token');
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json('Unauthorized');
  }
};

module.exports = {
  verifyToken,
};

// authorizeAdmin.js
const authorizeAdmin = async (req, res, next) => {
    try {
      if (req.user.role !== 'admin') {
        throw new Error();
      }
      next();
    } catch (error) {
      res.status(403).send({ error: 'Unauthorized access.' });
    }
  };
  
  module.exports = authorizeAdmin;
  
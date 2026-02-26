const jwt = require('jsonwebtoken')

async function identifyUser(req, res, next) {

  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({
      message: "Token not provided, Unauthorized access."
    })
  }

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET)
  } catch (err) {
    res.status(401).json({
      message: "User not authorized."
    })
  }
  
  req.user = decoded

  // middleware se request controller pr forward krni padti hai tab next() ka use krte hai
  next()
  
}

module.exports = identifyUser;
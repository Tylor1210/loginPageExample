const jwt = require('jsonwebtoken')
const jwtSecret = '198a0f03dfb1d137c068681579d6d0ef59535966a30270204a6fd0f3bab7f31efd9f9f'
exports.adminAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err) {
                return res.status(401).json({message: "Not authorized"})
            } else {
                if(decodedToken.role !== "Admin") {
                    return res.status(401).json({message: "Not Authorized"})
                } else {
                    next()
                }
            }
        })
    } else{
        return res
        .status(401)
        .json({message: "Not Authorized, token not available."})
    }
}
exports.userAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err) {
                return res.status(401).json({message: "Not authorized"})
            } else {
                if(decodedToken.role !== "Basic") {
                    return res.status(401).json({message: "Not Authorized"})
                } else {
                    next()
                }
            }
        })
    } else{
        return res
        .status(401)
        .json({message: "Not Authorized, token not available."})
    }
}
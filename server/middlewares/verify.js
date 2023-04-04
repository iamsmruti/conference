import jwt from 'jsonwebtoken'

export const verify = (req, res, next) => {
    console.log(req.headers.token)
    const token = req.headers.token

    if (!token) {
        return res.status(403).json({error: "You are not logged in"});
    } else {
        try {
            const data = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = data
            return next()
          } catch {
            return res.status(403).json({error: "You are forbidden"});
          }
    }
}
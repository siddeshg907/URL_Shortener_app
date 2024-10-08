import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "green", (err, decoded) => {
      if (decoded) {
        req.body.userID = decoded.userID;
        req.body.name = decoded.name;
        next();
      } else {
        res.send({ error: err });
      }
    });
  } else {
    res.send({ msg: "Please Login" });
  }
};

export { auth };

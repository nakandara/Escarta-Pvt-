var jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const User = require("../models/User");

const auth = async (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[1]
  ) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      const decode = await jwt.verify(token, "facke-jwt-token");
      const _id = new ObjectId(decode.user._id);
      const user = await User.findOne({ _id });
      console.log(user);
      if (!user) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }
      next();
    } catch (error) {
      res.status(401).json({ error: "Unauthorized" });
    }
  }
};
module.exports = auth;

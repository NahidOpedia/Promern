import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "dihan", {
    expiresIn: "30d",
  });
};

export default generateToken;

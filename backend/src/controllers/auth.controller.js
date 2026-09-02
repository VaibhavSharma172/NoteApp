import Auth from "../schema/auth.schema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Data",email,password);
    // email = email?.trim().toLowerCase();
    // password = password?.trim();

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at less than 8 characters" });
    }
    const newPassword = await bcrypt.hash(password, 10);
    const register = await Auth.create({
      email,
      password: newPassword,
    });

    console.log("reg", register);

    const token = jwt.sign(
      { _id: register._id, email: register.email },
      process.env.JWT_SECRET,
      { expiresIn: "15d" },
    );

    console.log("TOKEN", token);
    res.cookie("token", token);
    res.status(200).json({ message: "user created", register });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

export const login = async (req, res) => {
  let  { email, password } = req.body;
  email = email?.trim();
  password = password?.trim();
console.log("password", password);
  if (!email || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  const login = await Auth.findOne({ email });
  console.log("login", login);
  if (!login) {
    return res.status(404).json({ message: "register first" });
  }
  const checkPassword = await bcrypt.compare(password, login.password);
  console.log("login.password", login.password)
console.log("checkPassword", checkPassword);
  if (!checkPassword) {
    return res.status(401).json({ message: "invalid creds" });
  }
  const token = jwt.sign(
    { _id: login._id, email: login.email },
    process.env.JWT_SECRET,
    { expiresIn: "15d" },
  );

  res.cookie("token", token);
  return res.status(200).json({ message: "Login successful", login, token });
};
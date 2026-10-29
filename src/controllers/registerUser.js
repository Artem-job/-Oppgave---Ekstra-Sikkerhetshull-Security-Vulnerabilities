
import User from "../models/user.model.js";


// Register a new user
export const registerUser = async (req, res, next) => {
  try {
    console.log("Registration request:", req.body);
    
    const user = await User.create(req.body)
    
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        password: user.password
      }
    });
  } catch (error) {
    next(error)
  }
};

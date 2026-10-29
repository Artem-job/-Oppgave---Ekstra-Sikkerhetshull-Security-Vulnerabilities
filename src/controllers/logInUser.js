import User from "../models/user.model.js";

export const logInUser = async (req, res, next) => {
  try {
    const { email, password } = req.validated.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Compare passwords directly
    if (user.password !== password) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Login successful
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};
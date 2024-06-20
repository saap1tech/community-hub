const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {
  getUserByEmail,
  createUser,
  updateUserVerificationToken,
  verifyUserEmail,
  updatePasswordResetToken,
  resetPass,
} = require("../models/userModel");
const { hashPassword, comparePassword } = require("../utils/hashPassword");
const sendEmail = require("../utils/sendEmail");

const register = async (req, res) => {
  const { name, email, password, profile_picture } = req.body;

  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);
    const userId = await createUser(
      name,
      email,
      hashedPassword,
      profile_picture
    );

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    await updateUserVerificationToken(userId, verificationCode);

    const message = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Community Hub - Email Verification</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet">
        <style>
          body {
            font-family: 'Aldrich', Arial, sans-serif;
            background-color: #fff;
            margin: 0;
            padding: 0;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            padding: 20px 0;
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: 700;
            color: rgb(56, 178, 172);
          }
          .logo {
            width: 150px;
            height: auto;
            display: block;
            margin: 0 auto;
          }
          .content {
            padding: 20px 0;
            text-align: center;
          }
          h1 {
            font-size: 2.5em;
            color: #333;
            margin: 0;
          }
          .code {
            font-size: 2em;
            font-weight: bold;
            margin-top: 20px;
            color: rgb(56, 178, 172);
          }
          .footer {
            padding: 20px 0;
            text-align: center;
            font-size: 0.9em;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            COMMUNITY HUB
          </div>
          <div class="content">
            <h1>Welcome to Community Hub</h1>
            <p>Please enter the following code in the website to verify your email address:</p>
            <h1 class="code">${verificationCode}</h1>
          </div>
          <div class="footer">
            <p>${new Date().getFullYear()} Community Hub</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await sendEmail(email, "Community Hub - Email Verification", message);

    res.status(201).json({
      message:
        "User registered. Please check your email to verify your account.",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (!user.is_verified) {
      return res.status(400).json({ message: "Email not verified" });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token: token, user: user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const verifyEmail = async (req, res) => {
  const { token } = req.query;

  try {
    const result = await verifyUserEmail(token);
    if (result === 0) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    res.json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    await updatePasswordResetToken(user.id, resetToken);

    const resetUrl = `http://localhost:${process.env.PORT}/api/auth/reset-password?token=${resetToken}`;
    const message = `Reset your password by clicking this link: <a href="${resetUrl}">Reset Password</a>`;

    await sendEmail(email, "Password Reset", message);

    res.json({ message: "Password reset link sent to your email" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const resetPassword = async (req, res) => {
  const { token } = req.query;
  const { password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    const result = await resetPass(token, hashedPassword);
    if (result === 0) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    res.json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  register,
  login,
  verifyEmail,
  forgotPassword,
  resetPassword,
};

const db = require("./db");

const getUserByEmail = async (email) => {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};

const getUserById = async (id) => {
  const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
};

const createUser = async (name, email, password, profilePicture) => {
  const [result] = await db.query(
    "INSERT INTO users (name, email, password, profile_picture) VALUES (?, ?, ?, ?)",
    [name, email, password, profilePicture]
  );
  return result.insertId;
};

const updateUserVerificationToken = async (userId, token) => {
  await db.query("UPDATE users SET verification_token = ? WHERE id = ?", [
    token,
    userId,
  ]);
};

const verifyUserEmail = async (token) => {
  const [result] = await db.query(
    "UPDATE users SET is_verified = 1 WHERE verification_token = ?",
    [token]
  );
  return result.affectedRows;
};

const updatePasswordResetToken = async (userId, token) => {
  await db.query(
    "UPDATE users SET reset_token = ?, reset_token_expires = DATE_ADD(NOW(), INTERVAL 1 HOUR) WHERE id = ?",
    [token, userId]
  );
};

const resetPass = async (token, newPassword) => {
  const [result] = await db.query(
    "UPDATE users SET password = ? WHERE reset_token = ? AND reset_token_expires > NOW()",
    [newPassword, token]
  );
  return result.affectedRows;
};

module.exports = {
  getUserByEmail,
  getUserById,
  createUser,
  updateUserVerificationToken,
  verifyUserEmail,
  updatePasswordResetToken,
  resetPass,
};

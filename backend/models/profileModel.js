const db = require("./db");

const getUserExperiences = async (userId) => {
  const [rows] = await db.query(
    "SELECT * FROM user_experience WHERE user_id = ?",
    [userId]
  );
  return rows;
};

const addUserExperience = async (userId, title, company, years) => {
  const [result] = await db.query(
    "INSERT INTO user_experience (user_id, title, company, years) VALUES (?, ?, ?, ?)",
    [userId, title, company, years]
  );
  return result.insertId;
};

const getUserEducations = async (userId) => {
  const [rows] = await db.query(
    "SELECT * FROM user_education WHERE user_id = ?",
    [userId]
  );
  return rows;
};

const addUserEducation = async (userId, degree, university, years) => {
  const [result] = await db.query(
    "INSERT INTO user_education (user_id, degree, university, years) VALUES (?, ?, ?, ?)",
    [userId, degree, university, years]
  );
  return result.insertId;
};

const getUserSkills = async (userId) => {
  const [rows] = await db.query("SELECT * FROM user_skills WHERE user_id = ?", [
    userId,
  ]);
  return rows;
};

const addUserSkill = async (userId, skill) => {
  const [result] = await db.query(
    "INSERT INTO user_skills (user_id, skill) VALUES (?, ?)",
    [userId, skill]
  );
  return result.insertId;
};

const getUserProjects = async (userId) => {
  const [rows] = await db.query(
    "SELECT * FROM user_projects WHERE user_id = ?",
    [userId]
  );
  return rows;
};

const addUserProject = async (userId, name, description, link) => {
  const [result] = await db.query(
    "INSERT INTO user_projects (user_id, name, description, link) VALUES (?, ?, ?, ?)",
    [userId, name, description, link]
  );
  return result.insertId;
};

module.exports = {
  getUserExperiences,
  addUserExperience,
  getUserEducations,
  addUserEducation,
  getUserSkills,
  addUserSkill,
  getUserProjects,
  addUserProject,
};

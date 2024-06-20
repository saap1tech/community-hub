const { getUserById } = require("../models/userModel");
const {
  getUserExperiences,
  addUserExperience,
  getUserEducations,
  addUserEducation,
  getUserSkills,
  addUserSkill,
  getUserProjects,
  addUserProject,
} = require("../models/profileModel");

const getProfile = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const experiences = await getUserExperiences(userId);
    const educations = await getUserEducations(userId);
    const skills = await getUserSkills(userId);
    const projects = await getUserProjects(userId);

    res.json({ user, experiences, educations, skills, projects });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const addExperience = async (req, res) => {
  const userId = req.user.id;
  const { title, company, years } = req.body;

  try {
    const experienceId = await addUserExperience(userId, title, company, years);
    res.status(201).json({ id: experienceId });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const addEducation = async (req, res) => {
  const userId = req.user.id;
  const { degree, university, years } = req.body;

  try {
    const educationId = await addUserEducation(
      userId,
      degree,
      university,
      years
    );
    res.status(201).json({ id: educationId });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const addSkill = async (req, res) => {
  const userId = req.user.id;
  const { skill } = req.body;

  try {
    const skillId = await addUserSkill(userId, skill);
    res.status(201).json({ id: skillId });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const addProject = async (req, res) => {
  const userId = req.user.id;
  const { name, description, link } = req.body;

  try {
    const projectId = await addUserProject(userId, name, description, link);
    res.status(201).json({ id: projectId });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getProfile,
  addExperience,
  addEducation,
  addSkill,
  addProject,
};

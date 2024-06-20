const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const {
  register,
  login,
  verifyEmail,
  forgotPassword,
  resetPassword,
} = require("./controllers/authController");
const {
  getProfile,
  addExperience,
  addEducation,
  addSkill,
  addProject,
} = require("./controllers/profileController");
const protect = require("./middlewares/authMiddleware");

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/profile", protect, getProfile);
router.post("/profile/experience", protect, addExperience);
router.post("/profile/education", protect, addEducation);
router.post("/profile/skill", protect, addSkill);
router.post("/profile/project", protect, addProject);

app.use("/", router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

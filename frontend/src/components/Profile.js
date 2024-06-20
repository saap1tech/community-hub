import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios";

const Profile = ({ currentUserId }) => {
  const { userId } = useParams();
  const [profile, setProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const profileData = response.data.user;
        setProfile(profileData);
        setEditedProfile({
          ...profileData,
          experience: response.data.experiences || [],
          education: response.data.educations || [],
          skills: response.data.skills
            ? response.data.skills.map((skill) => skill.skill)
            : [],
          projects: response.data.projects || [],
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
        setErrorMessage("Profile not found");
      }
    };

    fetchProfile();
  }, [userId]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      await axios.post(
        `/profile`,
        {
          name: editedProfile.name,
          headline: editedProfile.headline,
          bio: editedProfile.bio,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (profilePicture) {
        const formData = new FormData();
        formData.append("profilePicture", profilePicture);
        await axios.post(`/profile`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      }

      await Promise.all([
        editedProfile.experience.map(async (exp, index) => {
          if (index < profile.experience.length) {
            await axios.post(
              `/profile/experience`,
              {
                title: exp.title,
                company: exp.company,
                years: exp.years,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
          } else {
            await axios.post(
              `/profile/experience`,
              {
                title: exp.title,
                company: exp.company,
                years: exp.years,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
          }
        }),
        editedProfile.education.map(async (edu, index) => {
          if (index < profile.education.length) {
            await axios.post(
              `/profile/education`,
              {
                degree: edu.degree,
                university: edu.university,
                years: edu.years,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
          } else {
            await axios.post(
              `/profile/education`,
              {
                degree: edu.degree,
                university: edu.university,
                years: edu.years,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
          }
        }),
        editedProfile.skills.map(async (skill, index) => {
          if (index < profile.skills.length) {
            // ...
          } else {
            await axios.post(
              `/profile/skill`,
              { skill },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
          }
        }),
        editedProfile.projects.map(async (project, index) => {
          if (index < profile.projects.length) {
            // ...
          } else {
            await axios.post(
              `/profile/project`,
              {
                name: project.name,
                description: project.description,
                link: project.link,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
          }
        }),
      ]);

      const updatedProfileResponse = await axios.get(`/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProfile(updatedProfileResponse.data.user);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving changes:", error);
      setErrorMessage("Failed to save changes. Please try again.");
    }
  };

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleAddExperience = () => {
    setEditedProfile((prev) => ({
      ...prev,
      experience: [...prev.experience, { title: "", company: "", years: "" }],
    }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = editedProfile.experience.map((exp, i) =>
      i === index ? { ...exp, [name]: value } : exp
    );
    setEditedProfile((prev) => ({
      ...prev,
      experience: updatedExperience,
    }));
  };

  const handleRemoveExperience = (index) => {
    const updatedExperience = editedProfile.experience.filter(
      (_, i) => i !== index
    );
    setEditedProfile((prev) => ({
      ...prev,
      experience: updatedExperience,
    }));
  };

  const handleAddEducation = () => {
    setEditedProfile((prev) => ({
      ...prev,
      education: [...prev.education, { degree: "", university: "", years: "" }],
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = editedProfile.education.map((edu, i) =>
      i === index ? { ...edu, [name]: value } : edu
    );
    setEditedProfile((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = editedProfile.education.filter(
      (_, i) => i !== index
    );
    setEditedProfile((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  const handleAddSkill = () => {
    setEditedProfile((prev) => ({
      ...prev,
      skills: [...prev.skills, ""],
    }));
  };

  const handleSkillChange = (index, e) => {
    const { value } = e.target;
    const updatedSkills = editedProfile.skills.map((skill, i) =>
      i === index ? value : skill
    );
    setEditedProfile((prev) => ({
      ...prev,
      skills: updatedSkills,
    }));
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = editedProfile.skills.filter((_, i) => i !== index);
    setEditedProfile((prev) => ({
      ...prev,
      skills: updatedSkills,
    }));
  };

  const handleAddProject = () => {
    setEditedProfile((prev) => ({
      ...prev,
      projects: [...prev.projects, { name: "", description: "", link: "" }],
    }));
  };

  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = editedProfile.projects.map((project, i) =>
      i === index ? { ...project, [name]: value } : project
    );
    setEditedProfile((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };

  const handleRemoveProject = (index) => {
    const updatedProjects = editedProfile.projects.filter(
      (_, i) => i !== index
    );
    setEditedProfile((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };

  if (!profile) {
    return <h1 className="text-center">Profile not found!</h1>;
  }

  return (
    <div className="container mx-auto p-8 bg-gray-900 text-white min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl">
          <img
            src={profile.profile_picture || "https://via.placeholder.com/200"}
            alt="Profile"
            className="rounded-full mb-4 w-48 h-48 mx-auto"
          />
          {isEditing ? (
            <>
              <input
                type="file"
                onChange={handleProfilePictureChange}
                className="text-center bg-gray-800 border-none focus:ring-2 focus:ring-[#38b2ac]"
              />
              <input
                type="text"
                name="name"
                value={editedProfile.name}
                onChange={handleInputChange}
                className="text-3xl font-bold text-center bg-gray-800 border-none focus:ring-2 focus:ring-[#38b2ac]"
              />
              <input
                type="text"
                name="headline"
                value={editedProfile.headline}
                onChange={handleInputChange}
                className="text-lg text-center text-[#38b2ac] bg-gray-800 border-none focus:ring-2 focus:ring-[#38b2ac]"
              />
              <textarea
                name="bio"
                value={editedProfile.bio}
                onChange={handleInputChange}
                className="mt-4 text-center bg-gray-800 border-none focus:ring-2 focus:ring-[#38b2ac]"
              />
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center">{profile.name}</h2>
              <p className="text-lg text-center text-[#38b2ac]">
                {profile.headline}
              </p>
              <p className="mt-4 text-center">{profile.bio}</p>
            </>
          )}
          {currentUserId === parseInt(userId) && (
            <div className="mt-4 text-center">
              {isEditing ? (
                <button
                  onClick={handleSaveChanges}
                  className="bg-[#38b2ac] text-white px-4 py-2 rounded-lg hover:bg-[#2d928d] transition duration-300"
                >
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={handleEditToggle}
                  className="bg-[#38b2ac] text-white px-4 py-2 rounded-lg hover:bg-[#2d928d] transition duration-300"
                >
                  Edit Profile
                </button>
              )}
            </div>
          )}
        </div>
        <div className="md:col-span-2 bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-[#38b2ac]">
              Experience
            </h3>
            {isEditing ? (
              <div>
                {editedProfile.experience && editedProfile.experience.map((exp, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg mb-4">
                    <input
                      type="text"
                      name="title"
                      value={exp.title}
                      onChange={(e) => handleExperienceChange(index, e)}
                      className="text-xl font-bold bg-gray-700 border-none focus:ring-2 focus:ring-[#38b2ac]"
                    />
                    <input
                      type="text"
                      name="company"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(index, e)}
                      className="mt-2 bg-gray-700 border-none focus:ring-2 focus:ring-[#38b2ac]"
                    />
                    <input
                      type="text"
                      name="years"
                      value={exp.years}
                      onChange={(e) => handleExperienceChange(index, e)}
                      className="mt-2 bg-gray-700 border-none focus:ring-2 focus:ring-[#38b2ac]"
                    />
                    <button
                      onClick={() => handleRemoveExperience(index)}
                      className="mt-2 bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-500 transition duration-300"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={handleAddExperience}
                  className="bg-[#38b2ac] text-white px-4 py-2 rounded-lg hover:bg-[#2d928d] transition duration-300"
                >
                  Add Experience
                </button>
              </div>
            ) : (
              <ul className="mt-4 space-y-4">
                {profile.experience && profile.experience.map((exp, index) => (
                  <li key={index} className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="text-xl font-bold">{exp.title}</h4>
                    <p>{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.years}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-[#38b2ac]">Education</h3>
            {isEditing ? (
              <div>
                {editedProfile.education && editedProfile.education.map((edu, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg mb-4">
                    <input
                      type="text"
                      name="degree"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, e)}
                      className="text-xl font-bold bg-gray-700 border-none focus:ring-2 focus:ring-[#38b2ac]"
                    />
                    <input
                      type="text"
                      name="university"
                      value={edu.university}
                      onChange={(e) => handleEducationChange(index, e)}
                      className="mt-2 bg-gray-700 border-none focus:ring-2 focus:ring-[#38b2ac]"
                    />
                    <input
                      type="text"
                      name="years"
                      value={edu.years}
                      onChange={(e) => handleEducationChange(index, e)}
                      className="mt-2 bg-gray-700 border-none focus:ring-2 focus:ring-[#38b2ac]"
                    />
                    <button
                      onClick={() => handleRemoveEducation(index)}
                      className="mt-2 bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-500 transition duration-300"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={handleAddEducation}
                  className="bg-[#38b2ac] text-white px-4 py-2 rounded-lg hover:bg-[#2d928d] transition duration-300"
                >
                  Add Education
                </button>
              </div>
            ) : (
              <ul className="mt-4 space-y-4">
                {profile.education && profile.education.map((edu, index) => (
                  <li key={index} className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <p>{edu.university}</p>
                    <p className="text-sm text-gray-400">{edu.years}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-[#38b2ac]">Skills</h3>
            {isEditing ? (
              <div>
                {editedProfile.skills && editedProfile.skills.map((skill, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg mb-4">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e)}
                      className="bg-gray-700 border-none focus:ring-2 focus:ring-[#38b2ac]"
                    />
                    <button
                      onClick={() => handleRemoveSkill(index)}
                      className="mt-2 bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-500 transition duration-300"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={handleAddSkill}
                  className="bg-[#38b2ac] text-white px-4 py-2 rounded-lg hover:bg-[#2d928d] transition duration-300"
                >
                  Add Skill
                </button>
              </div>
            ) : (
              <ul className="mt-4 flex flex-wrap gap-4">
                {profile.skills && profile.skills.map((skill, index) => (
                  <li key={index} className="bg-gray-700 px-4 py-2 rounded-lg">
                    {skill}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#38b2ac]">Projects</h3>
            {isEditing ? (
              <div>
                {editedProfile.projects && editedProfile.projects.map((project, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg mb-4">
                    <input
                      type="text"
                      name="name"
                      value={project.name}
                      onChange={(e) => handleProjectChange(index, e)}
                      className="text-xl font-bold bg-gray-700 border-none focus:ring-2 focus:ring-[#38b2ac]"
                    />
                    <textarea
                      name="description"
                      value={project.description}
                      onChange={(e) => handleProjectChange(index, e)}
                      className="mt-2 bg-gray-700 border-none focus:ring-2 focus:ring-[#38b2ac]"
                    />
                    <input
                      type="text"
                      name="link"
                      value={project.link}
                      onChange={(e) => handleProjectChange(index, e)}
                      className="mt-2 bg-gray-700 border-none focus:ring-2 focus:ring-[#38b2ac]"
                    />
                    <button
                      onClick={() => handleRemoveProject(index)}
                      className="mt-2 bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-500 transition duration-300"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={handleAddProject}
                  className="bg-[#38b2ac] text-white px-4 py-2 rounded-lg hover:bg-[#2d928d] transition duration-300"
                >
                  Add Project
                </button>
              </div>
            ) : (
              <ul className="mt-4 space-y-4">
                {profile.projects && profile.projects.map((project, index) => (
                  <li key={index} className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="text-xl font-bold">{project.name}</h4>
                    <p>{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#38b2ac] hover:underline"
                    >
                      View Project
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Resources() {
  const { resourceType } = useParams();

  const schoolData = {
    ENSNN: {
      "Year 1": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 2": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 3": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 4": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 5": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
    },
    NSAST: {
      "Year 1": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 2": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 3": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 4": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 5": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
    },
    ENSIA: {
      "Year 1": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 2": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 3": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 4": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 5": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
    },
    NHSM: {
      "Year 1": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 2": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 3": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 4": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 5": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
    },
    NSCS: {
      "Year 1": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 2": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 3": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 4": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
      "Year 5": {
        Semester1: ["Module", "Module", "Module"],
        Semester2: ["Module", "Module", "Module"],
      },
    },
  };

  const schools = ["ENSNN", "NSAST", "ENSIA", "NHSM", "NSCS"];
  const years = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];

  const [selectedSchool, setSelectedSchool] = useState(schools[0]);
  const [selectedYear, setSelectedYear] = useState("");

  const filteredData =
    selectedSchool && selectedYear
      ? {
          [selectedSchool]: {
            [selectedYear]: schoolData[selectedSchool][selectedYear],
          },
        }
      : selectedSchool
      ? { [selectedSchool]: schoolData[selectedSchool] }
      : schoolData;

  const handleSchoolChange = (e) => setSelectedSchool(e.target.value);
  const handleYearChange = (e) => setSelectedYear(e.target.value);

  const renderCourses = (courses) => (
    <ul className="list-disc pl-4">
      {courses.map((course) => (
        <li key={course} className="text-gray-300 hover:underline">
          <a
            href="https://drive.google.com/drive/folders/1b3l4mRTWcvWn0_QlFT3MqkZNIyPjel9l?usp=drive_link"
            target="_blank"
          >
            {course}
          </a>
        </li>
      ))}
    </ul>
  );

  const renderSemesters = (semesters) => (
    <div className="w-full flex space-x-5">
      {Object.entries(semesters).map(([semester, courses]) => (
        <div key={semester} className="flex-[0.5] bg-gray-700 rounded-lg p-4 transition-transform transform hover:scale-105">
          <h5 className="text-lg font-bold mb-2 text-[#5cd8d2]">{semester}</h5>
          {renderCourses(courses)}
        </div>
      ))}
    </div>
  );

  const renderYears = (years) => (
    <div className="grid grid-cols-1 gap-4">
      {Object.entries(years).map(([year, semesters]) => (
        <div key={year} className="bg-gray-900 rounded-lg p-4 shadow-xl">
          <h4 className="text-center text-xl font-bold mb-2 text-[#4cc6c0]">
            {year}
          </h4>
          {renderSemesters(semesters)}
        </div>
      ))}
    </div>
  );

  const renderSchoolCards = () => (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 mx-auto w-3/4">
      <h3 className="text-2xl font-bold mb-2 text-[#38b2ac] text-center">
        {selectedSchool}
      </h3>
      {renderYears(filteredData[selectedSchool])}
    </div>
  );

  let title = "";
  switch (resourceType) {
    case "courses":
      title = "Courses";
      break;
    case "problems":
      title = "Problems";
      break;
    case "projects":
      title = "Projects";
      break;
    default:
      title = "Resources";
      break;
  }

  return (
    <section className="container mx-auto p-10">
      <h1 className="text-5xl font-bold mb-8 text-[#2d938e] text-center">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="mb-4 md:mb-0 md:mr-4">
          <label className="block mb-2 font-bold text-[#38b2ac]">
            Filter by School
          </label>
          <select
            className="p-3 rounded bg-gray-700 text-white focus:outline-none"
            onChange={handleSchoolChange}
          >
            {schools.map((school) => (
              <option key={school} value={school}>
                {school}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2 font-bold text-[#38b2ac]">
            Filter by Year
          </label>
          <select
            className="p-3 rounded bg-gray-700 text-white focus:outline-none"
            onChange={handleYearChange}
          >
            <option value="">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">{renderSchoolCards()}</div>
    </section>
  );
}

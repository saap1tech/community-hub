import React from "react";
import { useParams } from "react-router-dom";
import { schools } from "../data/example";

function School() {
  const { abriviation } = useParams();
  const school = schools.find(
    (school) =>
      school.abriviation.toLowerCase() === abriviation.toLocaleLowerCase()
  );

  if (!school) {
    return <h1 className="text-center">School not found!</h1>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="flex-[0.7] bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <a
          target="_blank"
          href={school.url}
          className="overflow-hidden rounded-t-xl"
        >
          <img
            src={school.image}
            alt={`img of ${school.abriviation}`}
            className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="p-4">
          <a target="_blank" href={school.url}>
            <h3 className="text-3xl font-bold text-white mb-2">
              {school.abriviation}
            </h3>
          </a>
          <p className="text-xl text-gray-400 mb-4">{school.name}</p>
          <p className="text-gray-300 leading-relaxed">{school.information}</p>
        </div>
      </div>
    </div>
  );
}

export default School;

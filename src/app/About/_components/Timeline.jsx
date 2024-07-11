import React from "react";

const Timeline = () => {
  const experiences = [
    {
      institute: "Indian Institute of Technology, Mandi",
      desc: "B.Tech in Computer Science and Engineering",
      dateRange: "Expected 2026",
      grade: "Grade - 8.54",
    },
    {
      institute: "Seth Anadram Jaipuria School",
      desc: "Senior secondary (PCMB)",
      dateRange: "2022",
      grade: "Percentage - 98.2%",
    },
    {
      institute: "Seth Anadram Jaipuria School",
      desc: "Secondary (CBSE board)",
      dateRange: "2020",
      grade: "Percentage - 96.8%",
    },
  ];

  return (
    <div className="relative container mx-auto p-4">
      <div className="absolute w-1 h-full bg-gray-300 left-1/2 transform -translate-x-1/2"></div>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`mb-8 flex justify-between items-center w-full ${
            index % 2 === 0 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="order-1 w-5/12"></div>
          <div className="order-1 w-5/12 px-1 py-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="mb-2 text-xl font-bold">{experience.institute}</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                {experience.desc}
              </p>
              <p className="mt-2 text-sm font-medium">{experience.dateRange}</p>
              <p className="text-sm font-medium">{experience.grade}</p>
            </div>
          </div>
          <div
            className="w-4 h-4 bg-white border-2 border-red-500 rounded-full absolute transform -translate-y-1/2"
            style={{ left: "calc(50% - 0.5rem)", top: `${(index + 1) * 10}rem` }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

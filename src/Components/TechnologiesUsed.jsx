import React from "react";

const techStack = [
  { id: 1, name: "React.js", src: "https://wallpapercave.com/wp/wp2465923.jpg" },
  { id: 2, name: "Node.js", src: "/images/nodejs.png" },
  { id: 3, name: "Express.js", src: "/images/express.png" },
  { id: 4, name: "MongoDB", src: "/images/mongodb.png" },
  { id: 5, name: "JavaScript", src: "/images/javascript.png" },
  { id: 6, name: "Redux", src: "/images/redux.png" },
  { id: 7, name: "Tailwind CSS", src: "/images/tailwindcss.png" },
  { id: 8, name: "HTML5", src: "/images/html5.png" },
  { id: 9, name: "CSS3", src: "/images/css3.png" },
  { id: 10, name: "PostgreSQL", src: "/images/postgresql.png" },
  { id: 11, name: "GitHub", src: "/images/github.png" },
  { id: 12, name: "Docker", src: "/images/docker.png" },
];

const TechnologiesUsed = () => {
  return (
    <div className="py-16 px-6 bg-gray-950">
      <h2 className="text-center text-4xl font-extrabold text-white mb-12 tracking-wide">
        Technologies We Use
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 place-items-center">
        {techStack.map((tech) => (
          <div
            key={tech.id}
            className="p-4 w-36 h-36 flex flex-col items-center justify-center bg-gray-900 rounded-2xl transition-transform duration-300 hover:scale-105"
          >
            <img src={tech.src} alt={tech.name} className="w-16 h-16 object-contain" />
            <p className="text-white text-sm mt-3 font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesUsed;

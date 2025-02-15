import { motion } from "framer-motion";

const team = [
  { name: "Alice Brown", role: "CEO", image: "/team1.jpg" },
  { name: "Mike Johnson", role: "CTO", image: "/team2.jpg" },
  { name: "Sara Lee", role: "Head of Design", image: "/team3.jpg" },
  { name: "John Doe", role: "Marketing Lead", image: "/team4.jpg" },
];

const Team = () => {
  return (
    <div className="bg-black py-16 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-10">Meet Our Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(255, 255, 0, 0.5)" }}
            className="bg-gray-800 text-white rounded-xl p-6 text-center shadow-lg border border-gray-700"
          >
            <img
              src={member.image}
              className="w-32 h-32 rounded-full mx-auto border-4 border-yellow-500"
              alt={member.name}
            />
            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            <p className="text-yellow-400 text-sm">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;

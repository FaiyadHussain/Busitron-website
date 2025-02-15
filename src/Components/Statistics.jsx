import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 1000, label: "Industries" },
  { value: 20000, label: "Business Owners" },
  { value: 2000, label: "Collaborations" },
  { value: 1500, label: "Cups of Coffee" },
];

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.5, // Starts animation when 50% of the section is visible
  });

  return (
    <section ref={ref} className="bg-black/50 text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">
              {inView ? <CountUp start={0} end={stat.value} duration={2.5} separator="," /> : 0}+
            </h2>
            <p className="text-lg text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;

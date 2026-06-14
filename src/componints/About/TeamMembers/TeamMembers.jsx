import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import Team1 from "../../../assets/Team1.png";
import Team2 from "../../../assets/Team2.png";
import Team3 from "../../../assets/Team3.jpg";
import Team4 from "../../../assets/Team4.png";
const teamMembers = [
  {
    image: Team1,
    name: "Michael Carter",
    role: "Lead Agent",
  },
  {
    image: Team2,
    name: "Sophia Williams",
    role: "Property Consultant",
  },
  {
    image: Team3,
    name: "Daniel Smith",
    role: "Investment Advisor",
  },
  {
    image: Team4,
    name: "Emma Johnson",
    role: "Marketing Specialist",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2 uppercase text-sm mb-4">
              <FaRegDotCircle />
              <span>Our Team</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold">
              Dedicated experts,
              <br />
              working for you
            </h2>
          </div>

          <div className="flex items-end">
            <p className="text-gray-600 max-w-md">
              Behind every successful property journey is a team of
              professionals committed to guiding you.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[420px] object-cover rounded-xl"
              />

              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>

              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

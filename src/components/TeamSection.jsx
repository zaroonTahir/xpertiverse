import React from "react";
import { motion } from "framer-motion";
import { TEAM_CONTENT } from "../utils/constants/text";
import { AppIcons } from "../components/ui/AppIcons"; 
import { useNavigate } from "react-router-dom";

export default function TeamSection() {
  const navigate = useNavigate();
  const { sectionTag, heading, heading1, description, teamMembers } = TEAM_CONTENT;

  return (
    <section className="w-full bg-black text-white py-24 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Top Buttons */}
        <div className="flex justify-between items-center mb-10">
          <button className="px-6 py-2 border border-[#1E293B] rounded-lg text-[#DC2828] text-sm xl:text-lg font-semibold">
            {sectionTag}
          </button>

          <button
            onClick={() => navigate("/all-team-members")}
            className="
              px-6 py-3 rounded-xl
              bg-[#DC2828] 
              text-white text-sm
              border border-transparent
              transition cursor-pointer
              hover:bg-transparent hover:border-[#DC2828] hover:text-[#DC2828]
            "
          >
            Learn More
          </button>
        </div>

        {/* Heading */}
         <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-white">
            {heading}
            </span><br />
          
           <span class="bg-linear-to-r from-[#F56716] to-[#EA4920] text-transparent bg-clip-text">
            {heading1}
            </span>
          </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-3xl mb-14">{description}</p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.slice(0, 4).map((member, i) => {
            const { Fb, Twitter, Pinterest } = AppIcons;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-[#1E293B] bg-[#0F1623] overflow-hidden shadow-xl"
              >
                {/* Hover Area Only On Image */}
                <div className="relative h-80 p-4 w-full overflow-hidden group text-center">

                  {/* Image */}
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-3xl"
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute bottom-0 left-0 right-0 
                      bg-black/50 
                      h-22 group-hover:h-35
                      transition-all duration-900 
                      flex flex-col justify-end
                      group-hover:pb-10 
                    "
                  >
                    <h3 className="text-xl font-semibold transition-all duration-900 group-hover:-translate-y-2">
                      {member.name}
                    </h3>
                    <p className="text-[#DC2828] text-sm transition-all duration-900 group-hover:-translate-y-2">
                      {member.role}
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-3 opacity-0 justify-center translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <Fb className="text-black text-xl cursor-pointer p-1 bg-[#DC2828] rounded-full" />
                      <Twitter className="text-black text-xl cursor-pointer p-1 bg-[#DC2828] rounded-full" />
                      <Pinterest className="text-black text-xl cursor-pointer p-1 bg-[#DC2828] rounded-full" />
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

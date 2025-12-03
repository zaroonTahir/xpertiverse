import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../utils/constants/projectsdata";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D0F14] text-white">
        <h2>Project not found!</h2>
      </div>
    );
  }

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-20 bg-[#0D0F14] min-h-screen">
      <div className="max-w-7xl mx-auto text-white">
        <button
          onClick={() => navigate(-1)}
          className="
    mb-6 px-4 py-2 
    bg-[#DC2828] text-white 
    border border-transparent 
    rounded cursor-pointer 
    transition
    hover:bg-transparent hover:text-[#DC2828] hover:border-[#DC2828]
  "
        >
          Back
        </button>

        {/* Main Image */}
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />

        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          <span className="text-white">{project.heading}</span>

          <span class="bg-linear-to-r from-[#F56716] to-[#EA4920] text-transparent bg-clip-text">
            {project.heading1}
          </span>
        </h2>
        <span className="text-[#DC2828] text-sm font-semibold">
          {project.tag}
        </span>
        <p className="text-gray-300 mt-4">{project.desc}</p>

        {/* Rating */}
        <div className="flex mt-4">
          {Array.from({ length: 5 }).map((_, idx) => (
            <svg
              key={idx}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                idx < project.rating ? "text-yellow-400" : "text-gray-600"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.955a1 1 0 00-.364-1.118L2.067 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.282-3.955z" />
            </svg>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[#1F2937] text-gray-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;

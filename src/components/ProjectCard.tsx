// ProjectCard.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { tagColors } from "../config/portfolioData";
import type { Project } from "../types/portfolio";

import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { CardContainer } from "./CardContainer";

export const ProjectCard: React.FC<{
  project: Project;
  onOpen?: (p: Project) => void;
}> = ({ project }) => {
  const [showAll, setShowAll] = useState(false);

  // how many tags to show before "+x"
  const VISIBLE_COUNT = 3;


  const visibleTags = showAll
    ? project?.tags
    : project?.tags?.slice(0, VISIBLE_COUNT);
  const hiddenCount = (project?.tags?.length ?? 0) - VISIBLE_COUNT;

  return (
    <CardContainer
     className="cursor-pointer"
      containerClassName="w-full h-full"
    >
      <motion.article
        layout
        whileHover={{ y: -6 }}
        className="p-4 group rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow h-full"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            {/* Arrow overlay */}
            <a href={project.href} target="_blank">

            <button
              title="Open"
              type="button"
             
              className="absolute top-2 right-2 
                    bg-[var(--surface)]/80 backdrop-blur-sm 
                    rounded-full shadow-md cursor-pointer
                    hover:scale-110 transition duration-300
                    opacity-0 group-hover:opacity-100"
            >
              <span className="leading-none text-[var(--brand)]">
                <BsArrowUpRightCircleFill size={32} />
              </span>
            </button>
            </a>
            {project.image && (
              <div className="w-full flex justify-center mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg border border-[var(--border)] w-full object-cover h-45"
                />
              </div>
            )}
            {/* Title + Description */}
            <button
              title="Open project"
              type="button"
             
              className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit normal-case"
            >
              {project.title}
            </button>
            
            <p className="block antialiased font-sans text-base leading-relaxed text-white mb-6 font-normal ">
              {project.description}
            </p>
       

            {/* Tags */}
            <div className="mt-3 flex gap-2 flex-wrap">
              {visibleTags?.map((t) => (
                <span
                  key={t}
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    tagColors[t] || "bg-gray-100 text-gray-800"
                  }`}
                >
                  {t}
                </span>
              ))}

              {!showAll && hiddenCount > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAll(true);
                  }}
                  className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-pointer"
                >
                  +{hiddenCount}
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </CardContainer>
  );
};

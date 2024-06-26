"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { openAsBlob } from "fs";

interface projectsDataProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  Url: string;
}

const projectsData: projectsDataProps[] = [
  {
    id: 1,
    title: "Pudgy Penguins Dashboard",
    description: "Description of Pudgy Penguins Dashboard",
    image: "/images/projects/pudgy.png",
    tag: ["All", "Dune"],
    Url: "https://dune.com/jondar/pudgypenguins",
  },
  {
    id: 2,
    title: "$BUILD Dashboard",
    description: "Description of $BUILD Dashboard",
    image: "/images/projects/build.png",
    tag: ["All", "Dune"],
    Url: "https://dune.com/jondar/build",
  },
  {
    id: 3,
    title: "Powerbald Dashboard",
    description: "Description of Powerbald Dashboard",
    image: "/images/projects/powerbald.png",
    tag: ["All", "Dune"],
    Url: "https://dune.com/jondar/powerbald",
  },
  {
    id: 4,
    title: "$AZUR Dashboard",
    description: "Description of $AZUR Dashboard",
    image: "/images/projects/azuro.png",
    tag: ["All", "Dune"],
    Url: "https://dune.com/jondar/azur",
  },
  {
    id: 5,
    title: "Brian",
    description: "Description of Brian",
    image: "/images/projects/brian.png",
    tag: ["All", "Brianino"],
    Url: "https://www.brianknows.org/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <>
      <section id="project">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Dune"
            isSelected={tag === "Dune"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Brianino"
            isSelected={tag === "Brianino"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gaop-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                Url={project.Url}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ProjectsSection;

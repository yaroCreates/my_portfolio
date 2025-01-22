import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoClock } from "react-icons/go";
import LinkPreview from "./LinkPreview";
import Image from "next/image";
import Link from "next/link";

const ProjectList = () => {
  return (
    <div className="text-white bg-black py-10">
      <Project />
    </div>
  );
};

export default ProjectList;

const Project = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {projectData.map((project, index) => {
        const { name, description, tools, img, link, year } = project;
        return (
          <>
            <Link
              href={link}
              target="_blank"
              className="flex flex-col md:flex-row gap-4 cursor-pointer hover:bg-white/5 p-5 rounded-md group duration-200 hover:duration-300 ease-in-out"
            >
              <div className="flex-none h-[150px] w-full sm:w-[320px] bg-white/30 text-white rounded-md group-hover:border">
                <Image
                  className="rounded-md"
                  alt={name}
                  width={500}
                  height={200}
                  src={img}
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-white text-xl flex items-center gap-1 group-hover:text-brand-yellow">
                  {name}
                  <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition group-hover:duration-300 ease-in-out">
                    <MdArrowOutward />
                  </span>
                </h2>
                <p className="text-sm">{description}</p>
                <div className="flex items-center gap-2">
                  <GoClock className="size-5"/>
                  <p className="text-sm font-medium">{year}</p>
                </div>
                <div className="flex items-center flex-wrap gap-3">
                  {tools.map((item, index) => (
                    <span
                      key={index}
                      className="text-xs text-brand-yellow bg-brand-yellow/10 py-1 px-2 rounded-xl"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
};

const projectData = [
  {
    name: "Paycrest",
    link: "https://paycrest.io",
    description: "Decentralized Cryto-to-Fiat Payment Protocol.",
    img: "/projects/paycrest.png",
    tools: ["TypeScript", "Remix", "Next", "Tailwind css", "Framer motion"],
    year: 2024
  },
  {
    name: "Clocker",
    link: "https://dev.clocker.databaord.ai",
    description:
      "Product that helps top brands and organizations create the most engaging events",
    img: "/projects/clocker.png",
    tools: ["React", "Redux", "Chakra UI", "Tailwind css"],
    year: 2023
  },
  {
    name: "Portfolio",
    link: "",
    description:
      "My personal portfolio! You're already here.",
    img: "/projects/portfolio.png",
    tools: ["Next","Tailwind css","Framer motion"],
    year: 2025
  },
  {
    name: "DSUST School Portal",
    link: "https://dsustportal.ng/",
    description:
      "This is the portal of Delta State University of Science and Technology, Ozoro. It comprises of Student, Applications and Polytechnic modules",
    img: "/projects/ozoro.png",
    tools: ["React", "Bootstrap", "CSS", "Tailwind css"],
    year: 2023
  },
  {
    name: "Movie web app",
    link: "https://movie-appz.netlify.app",
    description: "Built a movie app using React and the The Movie Database (TMDB)",
    img: "/projects/movieapp.png",
    tools: ["React", "CSS", "HTML", "REST API"],
    year: 2022
  },
  {
    name: "Jersey store",
    link: "https://yarocreates.github.io/shopping-cart/",
    description: "A football jersey site, showcasing the frontend point of an E-commence site. when a product is clicked, it is added to the cart section of the site.",
    img: "/projects/jerseystore.png",
    tools: ["React", "CSS", "HTML"],
    year: 2021
  },
];

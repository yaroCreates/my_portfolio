import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import LinkPreview from "./LinkPreview";
import Image from "next/image";

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
        const { name, description, tools, img, link } = project;
        return (
          <>
            <div className="flex flex-col md:flex-row gap-4 cursor-pointer hover:bg-white/5 p-5 rounded-md group duration-200 hover:duration-300 ease-in-out">
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
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  illo dignissimos, laudantium eligendi tempora repellendus?
                  Dignissimos animi facere ipsum doloribus aspernatur dolores
                  quasi voluptatum, dolorem adipisci quidem iusto. Veritatis,
                  rem. Labore vitae, reiciendis ea culpa sequi repudiandae at
                  velit rerum, ad dolores deleniti incidunt dolor debitis
                  voluptatibus omnis a nam? Iure labore saepe totam quos sit ea
                  animi quaerat atque.
                </p>
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
            </div>
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
    description: "",
    img: "/projects/paycrest.png",
    tools: ["TypeScript", "Remix", "Next", "Tailwind css"],
  },
  {
    name: "Paycrest",
    link: "https://paycrest.io",
    description: "",
    img: "/projects/paycrest.png",
    tools: ["TypeScript", "Remix", "Next", "Tailwind css"],
  },
  {
    name: "Paycrest",
    link: "https://paycrest.io",
    description: "",
    img: "/projects/paycrest.png",
    tools: ["TypeScript", "Remix", "Next", "Tailwind css"],
  },
];

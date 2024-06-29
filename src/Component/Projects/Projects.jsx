import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  const title = document.getElementById("title");

  title.innerText = "Projects";
  return (
    <div className="w-[80%] md:w-[90%] mx-auto py-[120px]">
      <h3 className=" text-white text-[30px] text-[500] text-center my-[100px]  border-b-2 pb-2  border-blue-500 w-[27%] mx-auto    ">
        All Projects
      </h3>

      <ProjectCard />
    </div>
  );
};

export default Projects;

import ProjectItem from "./ProjectItem";
import { projectList } from "@/data/projects";

const Projects = () => {
  return (
    <div
      id="projects"
      className={projectList.length <= 2 ? "w-full h-screen" : "w-full"}
    >
      <div className="max-w-[1240px] mx-auto px-2 py-28">
        <p className="text-xl text-[#5651e5] uppercase tracking-widest">
          Projects
        </p>
        <h2 className="py-4 uppercase">What I&apos;ve Built</h2>
        {projectList.length === 0 ? (
          <p className="text-gray-600">
            No projects in{" "}
            <code className="text-sm">public/assets/data/projects.jsonc</code>.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projectList.map((project) => (
              <ProjectItem
                key={project.projURL}
                title={project.title}
                bgImg={project.bgImg}
                projURL={project.projURL}
                mainTech={project.mainTech}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

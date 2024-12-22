import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import MainTitle from "../components/MainTitle";
import { LinkButton } from "../components/MainButton";
import { projects } from "../data";
import { Image } from "./About";
import "./projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <MainTitle title="Projects" />
      <div className="container">
        <div className="content">
          {projects.map((project: any) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectProps {
  project: any;
}
function Project({ project }: ProjectProps) {
  return (
    <div className="project">
      <Image img={project.poster} alt={project.title + " project image"} />
      <Text project={project} />
    </div>
  );
}

interface TextProps {
  project: any;
}
function Text({ project }: TextProps) {
  return (
    <div className="text">
      <h3>{project.title}</h3>

      <div className="software">
        {project.skills.map((skill: string, index: number) => (
          <div key={skill + index}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>{skill}</span>
          </div>
        ))}
      </div>

      <div className="link-buts">
        <LinkButton title="GitHub" link={project?.github} icon={faCodeBranch} />
        <LinkButton
          title="Live Preview"
          link={project?.linkProject}
          icon={faArrowUpRightFromSquare}
        />
      </div>
    </div>
  );
}

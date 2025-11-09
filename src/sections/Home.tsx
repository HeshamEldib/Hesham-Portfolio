import { skills } from "../data";
import homeImg from "../../public/H68.png";
import Media from "../components/Media";
import "./home.css";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="container">
        <Text />

        <Image />
      </div>
    </section>
  );
}

function Text() {
  return (
    <div className="text">
      <TextContent />
      <Media />
      <Skills />
    </div>
  );
}

function TextContent() {
  return (
    <>
      <h1>
        Front-End <br /> <span>React & Next.js</span> Developer
      </h1>
      <h6>Hi, I'm Hesham Eldib. I'm a Front End React & Next.js Developer</h6>
    </>
  );
}

function Skills() {
  return (
    <div id="skills">
      <ul>
        {skills.map((skill) => (
          <li key={skill.title}>
            <figure>
              <img src={skill.image} alt={skill.title} />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Image() {
  return (
    <div className="image">
      <div className="cover">
        <figure>
          {/* <img src={homeImg} alt="" /> */}
        </figure>
      </div>
    </div>
  );
}

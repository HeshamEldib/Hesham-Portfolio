import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MainTitle from "../components/MainTitle";
import CV_pdf from "../../public/Hesham Eldib Front-End Web Developer Resume.pdf";
import aboutImg from "../../public/about.svg";
import "../components/MainButton";
import "./about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <MainTitle title="About" />

      <div className="container">
        <div className="text">
          <div className="ctaDescription">
            <p>
              Good day, My name is Hesham and I studied at Fayoum University,
              Faculty of Science, Department of Computer Science and
              Mathematics.
            </p>
            <p>
              Ever since high school, I have had a passion for information
              technology and self-learned HTML and CSS programming. During my
              university studies, I discovered my interest in developing modern
              applications and web technologies.
            </p>
            <p>
              I have experience in JavaScript, React, NodeJS, MongoDB
              programming and have developed some small projects like games
              websites and e-commerce websites using MERN stack. I also have
              skills in designing user-friendly and responsive user interfaces.
            </p>
            <p>
              Although I am still a student, the hands-on experience I gained
              will be valuable for companies. I am enthusiastic and committed to
              work as part of a team.
            </p>
            <p>
              I dream of joining real life projects to gain more experience,
              with opportunities for learning and growth. I will be happy to
              contribute to the success of your projects.
            </p>
            <p>
              If you have any projects or internship opportunities available,
              please feel free to contact me. I would appreciate your
              consideration of my resume.
            </p>
            <p>
              Thank you for your time and I look forward to hearing from you.
            </p>
          </div>

          <div className="main-button">
            <a
              className="magnet-button"
              href={CV_pdf}
              download="Hesham Eldib Front-End Web Developer Resume"
              target="_break"
            >
              <span className="hover-filp-item">
                <span data-text="Download CV ">Download CV </span>
                <FontAwesomeIcon icon={faDownload} />
              </span>
            </a>
          </div>
        </div>

        <Image img={aboutImg} alt="about image" />
      </div>
    </section>
  );
}

// image
interface ImageProps {
  img: string;
  alt: string;
}
export function Image({ img, alt }: ImageProps) {
  return (
    <div className="image">
      <figure>
        <img src={img} alt={alt} />
      </figure>
    </div>
  );
}

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
              Results-oriented final-year Computer Science student specializing
              in front-end development.
              <br />
              Proficient in building and maintaining responsive web applications
              using React.js, Next.js, and TypeScript.
              <br />
              Experienced in developing full-stack (MERN) projects with a focus
              on clean code, complex state management, and API integration.
              <br />
              Eager to contribute to a challenging junior developer role and
              grow within a fast-paced team.
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

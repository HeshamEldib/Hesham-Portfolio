import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./media.css";

export default function Media() {
  return (
    <div id="media">
      <a
        href="https://linkedin.com/in/hesham-eldib"
        target="_break"
        className="linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a
        href="https://github.com/HeshamEldib"
        target="_break"
        className="github"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}

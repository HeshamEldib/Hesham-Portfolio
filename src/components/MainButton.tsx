import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./main-button.css";

interface MainButtonProps {
  title: string;
  icon: any;
}
export default function MainButton({ title, icon }: MainButtonProps) {
  return (
    <div className="main-button">
      <button className="magnet-button">
        <span className="hover-filp-item">
          <span data-text={title}>{title}</span>
          <FontAwesomeIcon icon={icon} />
        </span>
      </button>
    </div>
  );
}

interface LinkButtonProps {
  title: string;
  icon: any;
  link: string;
}
export function LinkButton({ title, icon, link }: LinkButtonProps) {
  return (
    <div className="main-button">
      <a className="magnet-button" href={link} target="_break">
        <span className="hover-filp-item">
          <span data-text={title}>{title}</span>
          <FontAwesomeIcon icon={icon} />
        </span>
      </a>
    </div>
  );
}

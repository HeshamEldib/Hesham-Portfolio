import MainTitle from "../components/MainTitle";
import MainButton from "../components/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons/faMapLocationDot";
import { Image } from "./About";
import contactImg from "../../public/contact.svg";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <MainTitle title="contact" />

      <div className="container">
        <ContactTop />

        <div className="content">
          <Form />
          <Image img={contactImg} alt="contact image" />
        </div>
      </div>
    </section>
  );
}

function ContactTop() {
  return (
    <div className="contact-top">
      <ContactSel
        icon={faPhone}
        title="Contact Numbers"
        contentIcon={faWhatsapp}
        content="+(20) 1145471405"
      />
      <ContactSel
        icon={faEnvelope}
        title="Email Address"
        contentIcon={faPaperPlane}
        content="heshameldib27@gmail.com"
      />
      <ContactSel
        icon={faMapLocationDot}
        title="Address"
        contentIcon={faLocationDot}
        content="Egypt, Cairo"
      />
    </div>
  );
}
interface ContactSelProps {
  icon: any;
  title: string;
  contentIcon: any;
  content: string;
}
function ContactSel({ title, icon, contentIcon, content }: ContactSelProps) {
  return (
    <div className="contact-sel">
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      <h5>{title}</h5>
      <span className="cont">
        <FontAwesomeIcon icon={contentIcon} />

        {content}
      </span>
    </div>
  );
}

function Form() {
  return (
    <div className="form">
      <h4>Contact Us</h4>

      <form
        action="https://formspree.io/f/xbjerbkp"
        method="POST"
        id="contactForm"
      >
        <div className="input-field">
          <input
            type="text"
            id="name"
            name="Full Name"
            placeholder="Type here"
            required
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="input-field">
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="Type you email"
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field">
          <textarea
            name="Message"
            id="message"
            placeholder="Type message"
            required
          ></textarea>
          <label htmlFor="message">Message</label>
        </div>

        <MainButton title="Send" icon={faPaperPlane} />
      </form>
    </div>
  );
}

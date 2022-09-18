import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faNewspaper } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div id="contact" className="w-full">
      <ul className="flex flex-wrap justify-start gap-4 my-6 sm:flex-nowrap">
        <li className="flex-[0_1_100px]">
          <a
            href="mailto:matiasfacello@gmail.com"
            target="_blank"
            className="flex flex-col items-center justify-center py-4 transition rounded hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faEnvelope} fixedWidth size="2xl" className="pb-2" />
            Mail me!
          </a>
        </li>
        <li className="flex-[0_1_100px]">
          <a
            href="https://www.linkedin.com/in/matias-facello"
            target="_blank"
            className="flex flex-col items-center justify-center py-4 transition rounded hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faLinkedin} fixedWidth size="2xl" className="pb-2" />
            LinkedIn
          </a>
        </li>
        <li className="flex-[0_1_100px]">
          <a
            href="https://github.com/matiasfacello"
            target="_blank"
            className="flex flex-col items-center justify-center py-4 transition rounded hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faGithub} fixedWidth size="2xl" className="pb-2" />
            GitHub
          </a>
        </li>
        <li className="flex-[0_1_100px]">
          <a href="./resume.pdf" target="_blank" className="flex flex-col items-center justify-center py-4 transition rounded hover:text-blue-300">
            <FontAwesomeIcon icon={faNewspaper} fixedWidth size="2xl" className="pb-2" />
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faNewspaper } from "@fortawesome/free-solid-svg-icons";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

function Contact() {
  const elCt = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline().fromTo(".st-contact-icon", { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 2, ease: "power1.out", stagger: 0.2 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div id="contact" className="w-full">
      <ul className="flex flex-wrap justify-center sm:justify-start md:gap-4 my-6 text-sm md:text-md font-bold sm:flex-nowrap" ref={elCt}>
        <li className="flex-[0_1_85px] ">
          <a
            href="mailto:matiasfacello@gmail.com"
            target="_blank"
            className="flex flex-col items-center justify-center py-2 md:py-4 text-yellow-200 transition-colors rounded hover:text-yellow-300"
          >
            <FontAwesomeIcon icon={faEnvelope} fixedWidth size="2xl" className="pb-2 st st-contact-icon" />
            <span className="st-contact-icon">Mail me!</span>
          </a>
        </li>
        <li className="flex-[0_1_85px]">
          <a
            href="https://www.linkedin.com/in/matias-facello"
            target="_blank"
            className="flex flex-col items-center justify-center py-2 md:py-4 text-yellow-200 transition-colors rounded hover:text-yellow-300"
          >
            <FontAwesomeIcon icon={faLinkedin} fixedWidth size="2xl" className="pb-2 st st-contact-icon" />
            <span className="st-contact-icon">LinkedIn</span>
          </a>
        </li>
        <li className="flex-[0_1_85px]">
          <a
            href="https://github.com/matiasfacello"
            target="_blank"
            className="flex flex-col items-center justify-center py-2 md:py-4 text-yellow-200 transition-colors rounded hover:text-yellow-300"
          >
            <FontAwesomeIcon icon={faGithub} fixedWidth size="2xl" className="pb-2 st st-contact-icon" />
            <span className="st-contact-icon">GitHub</span>
          </a>
        </li>
        <li className="flex-[0_1_85px]">
          <a
            href="https://files.pristineshock.com/wl/?id=kyyQwKE4GiD2DAheuzyjHy3MJ3DhipCA&fmode=open"
            target="_blank"
            className="flex flex-col items-center justify-center py-2 md:py-4 text-yellow-200 transition-colors rounded hover:text-yellow-300"
          >
            <FontAwesomeIcon icon={faNewspaper} fixedWidth size="2xl" className="pb-2 st st-contact-icon" />
            <span className="st-contact-icon">Resume</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;

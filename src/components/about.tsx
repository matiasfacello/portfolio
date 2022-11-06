import Icon from "./ui/icon";
import imgMe from "../assets/me.png";
import { H1Title, H2Title } from "./ui/Titles";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
  const el = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap
        .timeline({ scrollTrigger: { trigger: "#about" }, start: "top center" })
        .fromTo(".st-about-h1", { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: "power1.out" })
        .fromTo(".st-about-text", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power1.out" })
        .fromTo(".st-about-img", { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 0, ease: "power1.out", duration: 1 })
        .fromTo(".st-about-h2", { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: "power1.out", duration: 1, stagger: 1 })
        .fromTo(".st-brand-icon", { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: -1, ease: "power1.out", stagger: 0.2 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="container min-h-screen px-6 m-auto" ref={el}>
      <H1Title text="About me" className="st st-about-h1" />
      <div className="flex flex-col-reverse justify-between text-center md:text-left md:flex-row md:items-start">
        <div className="my-3 text-lg md:max-w-4xl md:pr-12 st st-about-text">
          <p className="mb-6">
            I am a young man who thinks of a solution for every problem, always trying to find the best method to achieve it. Efficiency, compromise,
            and order are the most valuable keywords in my life.
          </p>
          <p className="mb-6">
            Computers were always a big part of my life, and I love working with them. I learned to write code as a hobby, but now I believe I am
            ready to be a professional.
          </p>
          <p className="mb-6">
            My wish is to work with a company to grow as a professional and improve my skills. In return, I offer all my commitment and the best of my
            qualities.
          </p>
        </div>
        <div className="p-6 lg:p-0 md:flex-[0_0_250px] lg:flex-[1_0_350px] flex justify-center st st-about-img">
          <img src={imgMe} alt="me" width={250} height={250} />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 p-8 font-bold">
        <div className="p-2">
          <H2Title text="Tech I use daily" className="st st-about-h2" />
          <div className="flex flex-wrap justify-center gap-2 align-center">
            <Icon name="HTML" src="html" />
            <Icon name="CSS" src="css" />
            <Icon name="JavaScript" src="javascript" />
            <Icon name="Tailwind" src="tailwind" />
            <Icon name="React" src="react" />
            <Icon name="PHP" src="php" />
            <Icon name="Git" src="git" />
            <Icon name="Figma" src="figma" />
            <Icon name="Photoshop" src="photoshop" />
            <Icon name="Illustrator" src="illustrator" />
          </div>
        </div>
        <div>
          <H2Title text="Tech I have worked with" className="st-about-h2" />
          <div className="flex flex-wrap justify-center gap-2 align-center">
            <Icon name="Lua" src="lua" />
            <Icon name="NginX" src="nginx" />
            <Icon name="Docker" src="docker" />
            <Icon name="Bootstrap" src="bootstrap" />
            <Icon name="Laravel" src="laravel" />
            <Icon name="WordPress" src="wordpress" />
          </div>
        </div>
        <div>
          <H2Title text="Tech I learned" className="st-about-h2" />
          <div className="flex flex-wrap justify-center gap-2 align-center">
            <Icon name="NodeJS" src="nodejs" />
            <Icon name="Svelte" src="svelte" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

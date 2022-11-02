import Icon from "./ui/icon";
import imgMe from "../assets/me.png";
import { H1Title, H2Title } from "./ui/Titles";

function About() {
  return (
    <section id="about" className="container min-h-screen px-6 m-auto">
      <H1Title text="About me" />
      <div className="flex flex-col-reverse justify-between text-center md:text-left md:flex-row md:items-start">
        <div className="my-3 text-lg md:max-w-4xl md:pr-12">
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
        <div className="p-6 lg:p-0 md:flex-[0_0_250px] lg:flex-[1_0_350px] flex justify-center">
          <img src={imgMe} alt="me" width={250} height={250} />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 p-8 font-bold">
        <div className="p-2">
          <H2Title text="Tech I use daily" />
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
          <H2Title text="Tech I have worked with" />
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
          <H2Title text="Tech I learned" />
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

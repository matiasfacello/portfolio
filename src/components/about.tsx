import Icon from "./ui/icon";

function About() {
  return (
    <section id="about" className="container min-h-screen px-6 m-auto">
      <h1 className="pt-24 mt-16 text-4xl">About me</h1>
      <div className="my-6">
        <p className="mb-6">
          I am a young man who thinks of a solution for every problem, always trying to find the best method to achieve it. Efficiency, compromise,
          and order are the most valuable keywords in my life.
        </p>
        <p className="mb-6">
          Computers were always a big part of my life, and I love working with them. I learned to write code as a hobby, but now I believe I am ready
          to be a professional.
        </p>
        <p className="mb-6">
          My wish is to work with a company to grow as a professional and improve my skills. In return, I offer all my commitment and the best of my
          qualities.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-6 p-8">
        <div className="p-2">
          <h2 className="p-2 text-xl text-center">Tech I use daily</h2>
          <div className="flex flex-wrap items-center justify-center gap-2 align-center">
            <Icon name="HTML" src="html" />
            <Icon name="CSS" src="css" />
            <Icon name="JavaScript" src="javascript" />
            <Icon name="Tailwind" src="tailwind" />
            <Icon name="React" src="react" />
            <Icon name="PHP" src="php" />
            <Icon name="Git" src="git" />
            <Icon name="Photoshop" src="photoshop" />
          </div>
        </div>
        <div>
          <h2 className="p-2 text-xl text-center">Tech I have worked with</h2>
          <div className="flex flex-wrap items-center justify-center gap-2 align-center">
            <Icon name="Lua" src="lua" />
            <Icon name="NginX" src="nginx" />
            <Icon name="Docker" src="docker" />
            <Icon name="bootstrap" src="bootstrap" />
            <Icon name="Laravel" src="laravel" />
            <Icon name="WordPress" src="wordpress" />
          </div>
        </div>
        <div>
          <h2 className="p-2 text-xl text-center">Tech I learned</h2>
          <div className="flex flex-wrap items-center justify-center gap-2 align-center">
            <Icon name="Node" src="nodejs" />
            <Icon name="Svelte" src="svelte" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

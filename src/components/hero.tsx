import Contact from "./contact";

function Hero() {
  return (
    <section id="home" className="container min-h-screen m-auto">
      <div className="flex flex-row justify-start">
        <div className="flex flex-col items-start justify-center min-h-screen p-16">
          <h1 className="my-1 text-4xl md:text-8xl">matias facello</h1>
          <h2 className="text-2xl md:text-4xl">fullstack web developer</h2>
          <h2 className="mb-16 text-2xl md:text-4xl">front-end web developer</h2>
          <Contact />
        </div>
      </div>
    </section>
  );
}

export default Hero;

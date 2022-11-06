import Contact from "./contact";
import { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import ReactGA from "react-ga4";

function Hero() {
  useEffect(() => {
    ReactGA.initialize("G-GQ08BR7J6F");
    ReactGA.send("pageview");
  }, []);

  const elHr = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(".st-hero-h1", { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: 1, ease: "power1.out", stagger: 0.2 })
        .fromTo(".st-hero-h2", { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: "power1.out", stagger: 0.2 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="container min-h-screen m-auto" ref={elHr}>
      <div className="flex flex-col items-start justify-center min-h-screen p-16">
        <h1 className="my-1 text-6xl md:text-8xl st st-hero-h1">Matias Facello</h1>
        <h2 className="mb-16 text-2xl md:text-4xl st st-hero-h2">Designer / Web Developer</h2>
        <Contact />
      </div>
    </section>
  );
}

export default Hero;

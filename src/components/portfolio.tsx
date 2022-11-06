import Project from "./ui/project";
import { H1Title } from "./ui/Titles";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Portfolio() {
  const elPt = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap
        .timeline({ scrollTrigger: { trigger: "#portfolio", start: "top center" } })
        .fromTo(".st-portfolio-h1", { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: "power2.out" })
        .fromTo(".st-portfolio-card", { opacity: 0, y: 300 }, { opacity: 1, y: 0, ease: "power3.out", duration: 1, stagger: 1, delay: 1 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" className="container min-h-screen px-6 m-auto mb-32" ref={elPt}>
      <H1Title text="Portfolio" className="st st-portfolio-h1" />
      <div className="flex flex-wrap justify-center gap-8 py-6">
        <Project
          name="PristineShock"
          tech="HTML, CSS, AstroJs, Svelte, PHP"
          description="Website for my own freelance work. "
          git="https://github.com/pristineshock/web"
          visit="https://www.pristineshock.com"
          image
          className="st st-portfolio-card"
        />
        <Project
          name="Portfolio"
          tech="HTML, CSS, React"
          description="This website. Website made for showcasing projects and skills."
          git="https://github.com/matiasfacello/portfolio"
          visit="https://matias.pristineshock.com"
          image
          className="st st-portfolio-card"
        />
        <Project
          name="FM Zurich"
          tech="HTML, CSS, JS, PHP, MySQL, AJAX"
          description="Website of a local radio, having the radio streaming and some news RSS feed of multiple newspapers of the country."
          visit="https://www.fmzurich.com"
          image
          className="st st-portfolio-card"
        />
        <Project
          name="Cartagena"
          tech="Adobe Photoshop"
          description="Cartagena is a local food store. Logo, Brochures and Wall boards were made making a rustic but modern stetic for the shop"
          visit="https://files.pristineshock.com/wl/?id=XL31gkGoGEWdUMWy9MDRg6N9cKRmSHIo&fmode=open"
          image
          className="st st-portfolio-card"
        />
      </div>
    </section>
  );
}

export default Portfolio;

import Project from "./ui/project";

function Portfolio() {
  return (
    <section id="portfolio" className="container min-h-screen px-6 m-auto">
      <h1 className="pt-24 mt-16 text-4xl">Portfolio</h1>
      <div className="flex flex-wrap justify-center gap-8 py-6">
        <Project
          name="Portfolio"
          tech="HTML, CSS, React"
          description="This website. Website made for showcasing projects and skills."
          git="https://github.com/matiasfacello/portfolio"
          image={false}
        />
        <Project
          name="FM Zurich"
          tech="HTML, CSS, JS, PHP, MySQL, AJAX"
          description="Website of a local radio, having the radio streaming and some news RSS feed of multiple newspapers of the country."
          visit="https://www.fmzurich.com"
          image
        />
        <Project
          name="Cartagena"
          tech="Adobe Photoshop"
          description="Cartagena is a local food store. Logo, Brochures and Wall boards were made making a rustic but modern stetic for the shop"
          visit="https://files.pristineshock.com/wl/?id=XL31gkGoGEWdUMWy9MDRg6N9cKRmSHIo&fmode=open"
          image
        />
      </div>
    </section>
  );
}

export default Portfolio;

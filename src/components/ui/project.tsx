import imgs from "./project_images";

interface ProjectInterface {
  name: string;
  tech?: string;
  description: string;
  image: boolean;
  git?: string;
  visit?: string;
  className?: string;
}

const Project: React.FC<ProjectInterface> = ({ name, tech, description, image, git, visit, className }) => {
  let imgSrc = name.toLowerCase().replace(" ", "");
  imgSrc = imgs[imgSrc as keyof typeof imgs];

  return (
    <div
      className={
        "p-6 bg-zinc-900 border shadow-md shadow-zinc-700 border-zinc-800 hover:bg-zinc-800 transition-colors backdrop-blur rounded-md flex-[0_1_400px] " +
        className
      }
    >
      {image && <img src={imgSrc} width="368" height="250" alt={name} className="mb-6 rounded-md" />}

      <h2 className="my-3 text-3xl font-bold text-center underline underline-offset-4">
        <a href={visit} target="_blank" className="transition-colors hover:text-yellow-400">
          {name}
        </a>
      </h2>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="p-2">
          {tech && (
            <p className="mb-3 italic font-md text-md">
              <strong>Tech:</strong> {tech}
            </p>
          )}
          <p className="mb-3 text-md font-md">
            <strong>Description:</strong> {description}
          </p>
        </div>
      </div>

      <footer className="flex items-end justify-center gap-4 p-2 my-3 text-sm font-bold uppercase">
        {visit && (
          <a href={visit} className="py-2 mr-2 text-black transition-colors bg-yellow-400 rounded px-7 hover:bg-orange-400" target="_blank">
            View
          </a>
        )}
        {git && (
          <a href={git} className="py-2 mr-2 text-black transition-colors bg-yellow-400 rounded px-7 hover:bg-orange-400" target="_blank">
            Code
          </a>
        )}
      </footer>
    </div>
  );
};

export default Project;

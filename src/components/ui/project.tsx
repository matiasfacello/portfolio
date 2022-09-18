import imgs from "./project_images";

interface ProjectInterface {
  name: string;
  tech?: string;
  description: string;
  image: boolean;
  git?: string;
  visit?: string;
}

const Project = ({ name, tech, description, image, git, visit }: ProjectInterface) => {
  let imgSrc = name.toLowerCase().replace(" ", "");
  imgSrc = imgs[imgSrc as keyof typeof imgs];

  return (
    <div className="p-4 border rounded-md flex-[0_1_700px]">
      <h2 className="mb-3 text-xl font-bold text-center">{name}</h2>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="p-2">
          {tech && <p className="mb-3 italic text-md">Tech: {tech}</p>}
          <p className="mb-3 text-md">Description: {description}</p>
        </div>
        {image && <img src={imgSrc} width="300" height="240" alt={name} className="p-2 rounded" />}
      </div>

      <footer className="flex justify-start gap-4 p-2 my-3">
        {visit && (
          <a href={visit} className="px-6 py-2 mr-2 transition border rounded hover:text-neutral-900 hover:bg-neutral-100" target="_blank">
            View
          </a>
        )}
        {git && (
          <a href={git} className="px-6 py-2 mr-2 transition border rounded hover:text-neutral-900 hover:bg-neutral-100" target="_blank">
            Code
          </a>
        )}
      </footer>
    </div>
  );
};

export default Project;

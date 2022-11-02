import icon_list from "./icon_list";

interface IconInterface {
  name: string;
  src: keyof typeof icon_list;
}

const Icon: React.FC<IconInterface> = ({ src, name }) => {
  let imgSrc = icon_list[src];
  let imgId = src + "Icon";

  return (
    <div className="flex flex-col items-center justify-end px-2 mb-2 transition hover:scale-125">
      <img src={imgSrc} alt={name} id={imgId} width="60" height="66" className="p-1 mb-1" />
      <p className="text-sm font-bold">{name}</p>
    </div>
  );
};

export default Icon;

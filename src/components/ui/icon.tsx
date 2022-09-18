import icon_list from "./icon_list";

interface IconInterface {
  name: string;
  src: string;
}

const Icon = ({ src, name }: IconInterface) => {
  let imgSrc = icon_list[src as keyof typeof icon_list];
  let imgId = src + "Icon";

  return <img src={imgSrc} alt={name} id={imgId} width="60" height="66" className="p-2" />;
};

export default Icon;

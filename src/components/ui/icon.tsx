import icon_list from "./icon_list";

interface IconInterface {
  name: string;
  src: keyof typeof icon_list;
}

const Icon: React.FC<IconInterface> = ({ src, name }) => {
  let imgSrc = icon_list[src];
  let imgId = src + "Icon";

  return <img src={imgSrc} alt={name} id={imgId} width="60" height="66" className="p-2" />;
};

export default Icon;

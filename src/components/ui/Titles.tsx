interface H1TitleInterface {
  text: string;
}

export const H1Title: React.FC<H1TitleInterface> = ({ text }) => {
  return <h1 className="py-16 text-6xl font-bold text-center scroll-mt-16">{text}</h1>;
};

interface H2TitleInterface {
  text: string;
}

export const H2Title: React.FC<H2TitleInterface> = ({ text }) => {
  return <h2 className="p-3 text-xl text-center">{text}</h2>;
};

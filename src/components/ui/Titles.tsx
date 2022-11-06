interface H1TitleInterface {
  text: string;
  className?: string;
}

export const H1Title: React.FC<H1TitleInterface> = ({ text, className }) => {
  return <h1 className={"py-16 text-6xl font-bold text-center scroll-mt-16 " + className}>{text}</h1>;
};

interface H2TitleInterface {
  text: string;
  className?: string;
}

export const H2Title: React.FC<H2TitleInterface> = ({ text, className }) => {
  return <h2 className={"p-3 text-xl text-center " + className}>{text}</h2>;
};

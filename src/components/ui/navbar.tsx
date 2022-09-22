import "./navbar.css";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-12">
      <div className="container flex flex-wrap items-center justify-end h-full gap-2 m-auto text-lg md:gap-6 text-stone-300">
        <a href="#home" className="px-2 link hover:text-blue-300 active:text-blue-300">
          home
        </a>
        <a href="#about" className="px-2 link hover:text-blue-300 active:text-blue-300">
          about me
        </a>
        <a href="#portfolio" className="px-2 link hover:text-blue-300 active:text-blue-300">
          portfolio
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

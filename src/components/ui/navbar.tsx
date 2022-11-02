import "./navbar.css";

function Navbar() {
  return (
    <nav className="fixed top-0 z-30 w-full h-12">
      <div className="container flex flex-wrap items-center justify-end h-full gap-2 m-auto text-lg md:gap-6 text-zinc-100">
        <a href="#home" className="px-2 transition link hover:text-yellow-400 active:text-yellow-400">
          home
        </a>
        <a href="#about" className="px-2 transition link hover:text-yellow-400 active:text-yellow-400">
          about me
        </a>
        <a href="#portfolio" className="px-2 transition link hover:text-yellow-400 active:text-yellow-400">
          portfolio
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

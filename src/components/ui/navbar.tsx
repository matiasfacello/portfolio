function Navbar() {

  return (
  <nav className="container fixed top-0 h-20 m-auto">
    <div className="flex flex-wrap items-center justify-center h-full gap-4 text-2xl md:gap-12 text-stone-300">
      <a href="#home" className="link hover:text-stone-100 md:p-2 active:text-stone-100">home</a>
      <a href="#about" className="link hover:text-stone-100 md:p-2 active:text-stone-100">about me</a>
      <a href="#portfolio" className="link hover:text-stone-100 md:p-2 active:text-stone-100">portfolio</a>
      <a href="#contact" className="link hover:text-stone-100 md:p-2 active:text-stone-100">contact</a>
    </div>
  </nav>
  );
}

export default Navbar;
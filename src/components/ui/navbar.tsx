import "./navbar.css";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

function Navbar() {
  const elNb = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline().fromTo(".st-navbar-item", { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 2, ease: "power1.out", stagger: 0.2 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav className="fixed top-0 z-30 w-full h-12" ref={elNb}>
      <div className="container flex flex-wrap items-center justify-end h-full gap-2 m-auto text-lg md:gap-6 text-zinc-100">
        <a href="#home" className="px-2 transition link hover:text-yellow-400 active:text-yellow-400 st st-navbar-item">
          home
        </a>
        <a href="#about" className="px-2 transition link hover:text-yellow-400 active:text-yellow-400 st st-navbar-item">
          about me
        </a>
        <a href="#portfolio" className="px-2 transition link hover:text-yellow-400 active:text-yellow-400 st st-navbar-item">
          portfolio
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

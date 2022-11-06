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
    <nav className="fixed top-0 z-30 w-full h-16" ref={elNb}>
      <div className="container flex flex-wrap items-center justify-end h-full gap-2 m-auto font-bold md:gap-8 text-zinc-100">
        <a href="/#home" className="px-2 transition-colors link hover:text-yellow-400 active:text-yellow-400 st st-navbar-item">
          HOME
        </a>
        <a href="/#about" className="px-2 transition-colors link hover:text-yellow-400 active:text-yellow-400 st st-navbar-item">
          ABOUT ME
        </a>
        <a href="/#portfolio" className="px-2 transition-colors link hover:text-yellow-400 active:text-yellow-400 st st-navbar-item">
          PORTFOLIO
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

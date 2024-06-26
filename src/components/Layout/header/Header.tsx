import React, { useEffect, useState } from "react";
import scss from "../header/Header.module.scss";
import logo from "../../../assets/Logo (1).svg";
import BurgerMenu from "./BurgerMenu";

const links = [
  {
    name: "Products",
    href: "/",
  },
  {
    name: "Developers",
    href: "/",
  },
  {
    name: "Company",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/",
  },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src={logo} alt="logo" />
          </div>

          {isMobile ? (
            <>
              <button onClick={() => setIsOpen(!isOpen)}>Burger</button>
              <BurgerMenu links={links} isOpen={isOpen} />
            </>
          ) : (
            <>
              <div className={scss.nav}>
                <ul>
                  {links.map((item, index) => (
                    <li key={index}>
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={scss.buutons}>
                <button>Support</button>
                <button>Sing in</button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

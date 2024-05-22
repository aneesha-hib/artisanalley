"use client";
import { usePathname } from "next/navigation";
import { link } from "../lib/links";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [pathname, setPathname] = useState("");

  // Fetch pathname using Next.js usePathname hook
  const currentPathname = usePathname();

  useEffect(() => {
    // Set the initial pathname on component mount
    setPathname(currentPathname);

    // Update the pathname whenever the URL changes
    const handleRouteChange = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [currentPathname]); // Include currentPathname in dependency array
  return (
    <header
      id="header"
      className={clsx("fixed-top d-flex align-items-center", {
        "header-scrolled": pathname !== link.HOME,
        "header-transparent": pathname === link.HOME,
      })}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <h1 className="text-light">
            <a href={link.HOME}>
              <span>ArtisanAlley</span>
            </a>
          </h1>
          
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a
                className={pathname === link.HOME ? "active" : ""}
                href={link.HOME}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={pathname === link.ABOUT ? "active" : ""}
                href={link.ABOUT}
              >
                About
              </a>
            </li>

            <li>
              <a
                className={pathname === link.PORTFOLIO ? "active" : ""}
                href={link.PORTFOLIO}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className={pathname === link.ARTISTS ? "active" : ""}
                href={link.ARTISTS}
              >
                Artists
              </a>
            </li>

            <li>
              <a href={link.SIGNIN}>Sign in</a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};
export default Header;

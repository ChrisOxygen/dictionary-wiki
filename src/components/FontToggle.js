import { useState } from "react";

export function FontToggle() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFont, setActiveFone] = useState("Serif");

  function handleFontToggle(e) {
    if (e.target.textContent === "Serif") {
      document.body.classList.remove("MonoBody");
      document.body.classList.remove("sanSerifBody");
    }
    if (e.target.textContent === "Sans Serif") {
      document.body.classList.add("sanSerifBody");
      document.body.classList.remove("MonoBody");
    }
    if (e.target.textContent === "Mono") {
      document.body.classList.add("MonoBody");
      document.body.classList.remove("sanSerifBody");
    }

    setActiveFone(e.target.textContent);
    setMenuOpen((curr) => !curr);
  }

  const fontList = ["Serif", "Sans Serif", "Mono"];

  return (
    <div className="font-dropdown">
      <div className="select" onClick={() => setMenuOpen((curr) => !curr)}>
        <span className="selected">{activeFont}</span>
        <span className={menuOpen ? "svg-icon rotateIcon" : "svg-icon"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.45 0.450001L5 3.9L1.55 0.450001L0.5 1.5L5 6L9.5 1.5L8.45 0.450001Z"
            />
          </svg>
        </span>
      </div>
      <ul
        className={
          menuOpen
            ? "font-dropdown__menu font-dropdown__menu--active"
            : "font-dropdown__menu"
        }
      >
        <li
          class={
            activeFont === "Sans Serif" ? "activeFont sansSerif" : "sansSerif"
          }
          onClick={handleFontToggle}
        >
          Sans Serif
        </li>
        <li
          class={activeFont === "Mono" ? "activeFont mono" : "mono"}
          onClick={handleFontToggle}
        >
          Mono
        </li>
        <li
          class={activeFont === "Serif" ? "activeFont serif" : "serif"}
          onClick={handleFontToggle}
        >
          Serif
        </li>
      </ul>
    </div>
  );
}

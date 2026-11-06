import React from "react";
import type { LogoProps } from "../types";

export function Logo({ light = false, onClick }: LogoProps): React.JSX.Element {
  return (
    <a
      className={`journal-logo ${light ? "light" : ""}`}
      href="/"
      onClick={onClick}
    >
      <img
        src="/tosh-icon-circle.webp"
        alt="TOSH Foundation"
        className="journal-logo-img"
      />
      <span>
        <strong>TOSH</strong>
        <small>FOUNDATION</small>
      </span>
    </a>
  );
}

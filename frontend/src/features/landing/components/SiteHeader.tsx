import React from "react";
import type { SiteHeaderProps } from "../types";
import { NAV_LINKS } from "../data/landingData";
import { Logo } from "./Logo";
import { Icon } from "./Icon";

export function SiteHeader({
  menu,
  setMenu,
  route,
  navigate,
  loginTarget,
  onLogin,
}: SiteHeaderProps): React.JSX.Element {
  const login = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (onLogin) {
      e.preventDefault();
      onLogin(e);
    }
  };
  return (
    <header className={`journal-header ${menu ? "open" : ""}`}>
      <div className="journal-shell">
        <Logo
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        />
        <nav>
          {NAV_LINKS.map((item) => (
            <a
              href={item.path}
              key={item.path}
              className={route === item.path ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                navigate(item.path);
              }}
            >
              {item.label}
            </a>
          ))}
          <a className="mobile-login" href={loginTarget} onClick={login}>
            Login <Icon n="arrow" s={15} />
          </a>
        </nav>
        <a className="journal-login" href={loginTarget} onClick={login}>
          Login <Icon n="arrow" s={15} />
        </a>
        <button
          className="journal-menu"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle navigation"
        >
          <Icon n={menu ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}


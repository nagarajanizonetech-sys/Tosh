import React from "react";
import { SOCIAL_LINKS } from "../data/landingData";

export function SocialLinks({
  compact = false,
}: {
  compact?: boolean;
}): React.JSX.Element {
  return (
    <div className={`social-links ${compact ? "compact" : ""}`}>
      <span className="social-label">
        {compact ? "SHARE" : "STAY CONNECTED"}
      </span>
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Share TOSH Foundation on ${item.label}`}
        >
          <b>{item.short}</b>
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}


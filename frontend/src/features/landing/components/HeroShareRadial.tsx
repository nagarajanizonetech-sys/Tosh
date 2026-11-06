import React, { useEffect, useRef, useState } from "react";
import { TbMessages } from "./TbMessages";

export function HeroShareRadial(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leaveTimerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (leaveTimerRef.current) {
      window.clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearTimer();
    setOpen(true);
  };

  const handleMouseLeave = () => {
    clearTimer();
    // Smooth exit delay so brief accidental movements don't abruptly close, but moving off closes smoothly
    leaveTimerRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 240);
  };

  const handleTriggerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    clearTimer();
    setOpen((prev) => !prev);
  };

  // Close when clicking anywhere outside
  useEffect(() => {
    const handleDocClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", handleDocClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimer();
      document.removeEventListener("click", handleDocClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Project's 5 official social media links
  const items = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://api.whatsapp.com/send?text=https://www.toshfoundation.in",
      bg: "#25D366",
      shadow: "0 8px 24px rgba(37, 211, 102, 0.5)",
      dx: -114,
      dy: -6,
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
        </svg>
      ),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/sharing/share-offsite/?url=https://www.toshfoundation.in",
      bg: "#0A66C2",
      shadow: "0 8px 24px rgba(10, 102, 194, 0.5)",
      dx: -98,
      dy: -52,
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M7.86 18.5v-8.37H5.07v8.37h2.79z" />
        </svg>
      ),
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/sharer/sharer.php?u=https://www.toshfoundation.in",
      bg: "#1877F2",
      shadow: "0 8px 24px rgba(24, 119, 242, 0.5)",
      dx: -74,
      dy: -92,
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com",
      bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      shadow: "0 8px 24px rgba(220, 39, 67, 0.5)",
      dx: -42,
      dy: -126,
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      id: "twitter",
      label: "X (Twitter)",
      href: "https://twitter.com/intent/tweet?text=TOSH+Foundation+Tiruchirappalli&url=https://www.toshfoundation.in",
      bg: "#000000",
      shadow: "0 8px 24px rgba(0, 0, 0, 0.55)",
      dx: 0,
      dy: -148,
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      ref={containerRef}
      className={`hero-radial-share ${open ? "is-open" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Invisible hover-bridge hit zone so moving mouse toward any icon stays fully inside the container */}
      <div className="hero-radial-hitbox" />
      <div className="hero-radial-items">
        {items.map((item, idx) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="hero-radial-btn"
            style={{
              "--dx": `${item.dx}px`,
              "--dy": `${item.dy}px`,
              "--item-bg": item.bg,
              "--item-shadow": item.shadow,
              "--item-idx": idx,
            } as React.CSSProperties}
            aria-label={item.label}
          >
            <span className="hero-radial-icon">{item.icon}</span>
            <span className="hero-radial-tooltip">{item.label}</span>
          </a>
        ))}
      </div>
      <button
        type="button"
        className="hero-radial-trigger"
        onClick={handleTriggerClick}
        aria-label={open ? "Close menu" : "Connect and Message"}
        aria-expanded={open}
        title={open ? "Close" : "Connect & Message"}
      >
        {/* Animated breathing pulse radar aura */}
        <span className="hero-radial-pulse-aura" aria-hidden="true" />
        {/* Animated spinning neon gradient ring */}
        <span className="hero-radial-glow-ring" aria-hidden="true" />
        {/* Center core */}
        <span className="hero-radial-core">
          <span className="hero-radial-trigger-icon share-icon">
            <TbMessages size={28} />
          </span>
          <span className="hero-radial-trigger-icon close-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </span>
        </span>
      </button>
    </div>
  );
}

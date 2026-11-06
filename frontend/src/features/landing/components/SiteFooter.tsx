import React from "react";
import type { RouteNavigate } from "../types";
import { clinic, NAV_LINKS } from "../data/landingData";
import { Logo } from "./Logo";
import { Icon } from "./Icon";

const FOOTER_SOCIAL_LINKS = [
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?text=https://www.toshfoundation.in",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sharer/sharer.php?u=https://www.toshfoundation.in",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/intent/tweet?text=Check+out+TOSH+Foundation&url=https://www.toshfoundation.in",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/sharing/share-offsite/?url=https://www.toshfoundation.in",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M7.86 18.5v-8.37H5.07v8.37h2.79z" />
      </svg>
    ),
  },
];




export function SiteFooter({
  navigate,
}: {
  navigate: RouteNavigate;
}): React.JSX.Element {
  return (
    <footer className="journal-footer">
      <div className="footer-ambient-aura footer-aura-left" aria-hidden="true" />
      <div className="footer-ambient-aura footer-aura-right" aria-hidden="true" />
      <div className="journal-shell">
        <div className="footer-grid">
          {/* Column 1: Brand & Credentials */}
          <div className="footer-brand-col">
            <Logo
              light
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            />
            <p className="footer-brand-desc">
              Specialized orthopaedic care and clinical dermatology shaped
              around your health, comfort, mobility and lifelong confidence.
            </p>
            <div className="footer-trust-chips">
              <span className="footer-trust-chip chip-teal">
                <Icon n="check" s={12} /> Govt Reg. 111745 · 150098
              </span>
              <span className="footer-trust-chip chip-purple">
                <Icon n="spark" s={12} /> MMC Alumni Specialists
              </span>
            </div>
            <div className="footer-social-bar">
              {FOOTER_SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="footer-social-btn"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-nav-col">
            <b className="footer-col-title">TOSH CLINIC</b>
            <div className="footer-links-list">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.path);
                  }}
                  className="footer-link-item"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Clinical Disciplines & Pathways */}
          <div className="footer-disciplines-col">
            <b className="footer-col-title">SPECIALTIES</b>
            <div className="footer-links-list">
              <a
                href="/specialties"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/specialties");
                }}
                className="footer-link-item specialty-item"
              >
                <span className="footer-disc-dot dot-teal" />
                Joint Replacement
              </a>
              <a
                href="/specialties"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/specialties");
                }}
                className="footer-link-item specialty-item"
              >
                <span className="footer-disc-dot dot-teal" />
                Arthroscopic Surgery
              </a>
              <a
                href="/specialties"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/specialties");
                }}
                className="footer-link-item specialty-item"
              >
                <span className="footer-disc-dot dot-teal" />
                PRP & Joint Preservation
              </a>
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/services");
                }}
                className="footer-link-item specialty-item"
              >
                <span className="footer-disc-dot dot-purple" />
                Clinical Dermatology
              </a>
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/services");
                }}
                className="footer-link-item specialty-item"
              >
                <span className="footer-disc-dot dot-purple" />
                Advanced Laser Care
              </a>
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/services");
                }}
                className="footer-link-item specialty-item"
              >
                <span className="footer-disc-dot dot-purple" />
                Hair & Scalp Science
              </a>
            </div>
          </div>

          {/* Column 4: Contact Details, Location & Google Maps */}
          <div className="footer-contact-col">
            <b className="footer-col-title">CONTACT & LOCATION</b>
            <div className="footer-contact-list">
              <a
                href={`tel:${clinic.phone.replace(/\D/g, "")}`}
                className="footer-contact-row"
              >
                <span className="footer-icon-badge badge-teal">
                  <Icon n="phone" s={14} />
                </span>
                <div className="footer-contact-meta">
                  <strong>{clinic.phone}</strong>
                  <small>Direct Line · Consultations</small>
                </div>
              </a>

              <a
                href={`mailto:${clinic.email}`}
                className="footer-contact-row"
              >
                <span className="footer-icon-badge badge-purple">
                  <Icon n="mail" s={14} />
                </span>
                <div className="footer-contact-meta">
                  <strong>{clinic.email}</strong>
                  <small>Medical Inquiries & Reports</small>
                </div>
              </a>
              <div className="footer-contact-row footer-hours-row">
                <span className="footer-icon-badge badge-emerald">
                  <Icon n="clock" s={14} />
                </span>
                <div className="footer-contact-meta">
                  <strong>Mon – Sun: 07:30 AM – 08:00 PM</strong>
                  <small>
                    Open Daily · Walk-ins Welcome
                  </small>
                </div>
              </div>
              {/* Location Card with integrated Google Maps action */}
              <div className="footer-location-card">
                <div className="footer-location-header">
                  <span className="footer-icon-badge badge-rose">
                    <Icon n="pin" s={14} />
                  </span>
                  <div className="footer-contact-meta">
                    <strong>West Thillai Nagar, Tennur</strong>
                    <small>C88, 10th Cross St, Tiruchirappalli</small>
                  </div>
                </div>
                <a
                  href={clinic.map}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-map-action-pill"
                  title="View TOSH location on Google Maps"
                >
                  <Icon n="pin" s={12} /> View on Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TOSH Foundation. All rights reserved.</span>
          <span className="footer-bottom-tagline">Care with context · Orthopaedics & Dermatology</span>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer-back-to-top"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}



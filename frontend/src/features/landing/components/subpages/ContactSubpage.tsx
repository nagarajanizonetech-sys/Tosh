import React, { useState } from "react";
import type { RouteNavigate } from "../../types";
import { clinic } from "../../data/landingData";
import { Icon } from "../Icon";
import { HeroShareRadial } from "../HeroShareRadial";
import { SocialLinks } from "../SocialLinks";
import { AnimatedHeroTitle } from "../AnimatedHeroTitle";

export function ContactSubpage({ navigate }: { navigate: RouteNavigate }): React.JSX.Element {
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState("");
  const updateContact = (key: keyof typeof contactForm, value: string): void =>
    setContactForm((current) => ({ ...current, [key]: value }));
  const submitContact = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!contactForm.name || !contactForm.phone || !contactForm.specialty) {
      setContactStatus(
        "Please add your name, phone number and preferred specialty.",
      );
      return;
    }
    const phoneDigits = contactForm.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 13) {
      setContactStatus(
        "Please enter a valid phone number (10 to 13 digits).",
      );
      return;
    }
    setContactStatus(
      `Thank you, ${contactForm.name}. Please call ${clinic.phone} or email ${clinic.email} to complete your enquiry.`,
    );
  };

  return (

    <main className="subpage contact-route-hero">
      <section className="contact-hero-section">
        <div className="journal-shell contact-hero-container">
          <div className="contact-hero-grid">
            {/* Left Column: Heading, Badge, Description, Quick Actions */}
            <div className="contact-hero-left">
              <div className="contact-hero-meta">
                <span className="subpage-number">05 / 05</span>
                <span className="journal-kicker">
                  <i /> TOSH FOUNDATION / REACH OUT
                </span>
              </div>

              <div className="contact-hero-badge">
                <span className="contact-badge-icon">
                  <Icon n="phone" s={13} />
                </span>
                <span>CONTACT US</span>
              </div>

              <AnimatedHeroTitle
                className="contact-hero-title"
                line1="Your questions,"
                line2="our caring guidance."
              />

              <p className="contact-hero-desc">
                On West Thillai Nagar Main Road, in the heart of Tiruchirappalli.
                We are here to assist with consultations, appointments, specialist
                second opinions, and all your orthopaedic &amp; dermatology inquiries.
              </p>

              <div className="contact-hero-nav-bar">
                <div className="contact-hero-breadcrumbs">
                  <span onClick={() => navigate("/")} className="crumb-link">Home</span>
                  <span className="crumb-sep">›</span>
                  <span className="crumb-current">Contact</span>
                </div>

                <div className="contact-hero-cta-group">
                  <a href={`tel:${clinic.phone.replace(/\D/g, "")}`} className="contact-hero-cta primary">
                    <Icon n="phone" s={14} />
                    <span>Call Clinic</span>
                  </a>
                  <a href="#contact-form" className="contact-hero-cta secondary">
                    <Icon n="mail" s={14} />
                    <span>Send Message</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Clear Full-View Image Naturally Integrating into Hero Canvas */}
            <div className="contact-hero-right">
              <div className="contact-hero-seamless-pane">
                <img
                  src="/images/tosh-receptionist-hero.webp"
                  alt="TOSH Foundation Receptionist & Helpdesk Executive at West Thillai Nagar, Tiruchirappalli"
                  className="contact-hero-seamless-img"
                />
              </div>
            </div>
          </div>

          {/* Bottom Floating Highlights Bar */}
          <div className="contact-hero-highlights">
            <div className="contact-highlight-item">
              <div className="contact-highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="contact-highlight-text">
                <strong>24/7</strong>
                <span>Patient Support</span>
              </div>
            </div>

            <div className="contact-highlight-divider" />

            <div className="contact-highlight-item">
              <div className="contact-highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="contact-highlight-text">
                <strong>10+</strong>
                <span>Consultation Slots</span>
              </div>
            </div>

            <div className="contact-highlight-divider" />

            <div className="contact-highlight-item">
              <div className="contact-highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div className="contact-highlight-text">
                <strong>Fast</strong>
                <span>Response Time</span>
              </div>
            </div>

            <div className="contact-highlight-divider" />

            <div className="contact-highlight-item">
              <div className="contact-highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div className="contact-highlight-text">
                <strong>100%</strong>
                <span>Dedicated Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subpage-section contact-page" id="contact-form">
        <div className="journal-shell contact-page-grid">
          <div className="contact-info-card">
            <span className="journal-kicker light">FIND THE CLINIC</span>
            <h2>
              Visit, call
              <br />
              <em>or write to us.</em>
            </h2>
            <a href={clinic.map} target="_blank" rel="noreferrer">
              <Icon n="pin" s={18} />
              {clinic.address}
            </a>
            <a href={`tel:${clinic.phone.replace(/\D/g, "")}`}>
              <Icon n="phone" s={18} />
              {clinic.phone}
            </a>
            <a href={`mailto:${clinic.email}`}>
              <Icon n="mail" s={18} />
              {clinic.email}
            </a>
            <a
              href="https://wa.me/918838623336"
              target="_blank"
              rel="noreferrer"
            >
              <Icon n="arrow" s={18} />
              Chat on WhatsApp
            </a>
            <SocialLinks />
          </div>
          <form className="contact-form-card" onSubmit={submitContact}>
            <span className="journal-kicker">SEND A MESSAGE</span>
            <h2>
              Start the
              <br />
              <em>conversation.</em>
            </h2>
            <div className="contact-form-grid">
              <label>
                Name
                <input
                  type="text"
                  maxLength={60}
                  value={contactForm.name}
                  onChange={(e) => updateContact("name", e.target.value)}
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Phone
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={13}
                  value={contactForm.phone}
                  onChange={(e) => {
                    const onlyNums = e.target.value.replace(/\D/g, "").slice(0, 13);
                    updateContact("phone", onlyNums);
                  }}
                  placeholder="Your phone number (digits only)"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  maxLength={80}
                  value={contactForm.email}
                  onChange={(e) => updateContact("email", e.target.value)}
                  placeholder="Your email address"
                />
              </label>
              <label>
                Specialty
                <select
                  value={contactForm.specialty}
                  onChange={(e) => updateContact("specialty", e.target.value)}
                >
                  <option value="">Choose a specialty</option>
                  <option>Orthopaedics</option>
                  <option>Dermatology</option>
                  <option>Cosmetology</option>
                </select>
              </label>
              <label className="form-full">
                Message
                <textarea
                  value={contactForm.message}
                  onChange={(e) => updateContact("message", e.target.value)}
                  placeholder="How can we help?"
                  rows={4}
                />
              </label>
            </div>
            <button className="journal-button" type="submit">
              Send enquiry <Icon n="arrow" s={15} />
            </button>
            {contactStatus && <p className="form-status">{contactStatus}</p>}
          </form>
        </div>
      </section>
      <HeroShareRadial />
    </main>
  )
}

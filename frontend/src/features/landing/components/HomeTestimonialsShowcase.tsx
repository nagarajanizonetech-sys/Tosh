import React, { useEffect, useState } from "react";
import type { RouteNavigate } from "../types";
import { HOME_TESTIMONIALS } from "../data/landingData";
import { Icon } from "./Icon";

export const HomeTestimonialsShowcase: React.FC<{ navigate: RouteNavigate }> = ({ navigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fade, setFade] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const goTo = (index: number) => {
    if (index === currentIndex) return;
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 140);
  };

  const handleNext = () => {
    goTo((currentIndex + 1) % HOME_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    goTo((currentIndex - 1 + HOME_TESTIMONIALS.length) % HOME_TESTIMONIALS.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % HOME_TESTIMONIALS.length);
        setFade(true);
      }, 140);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const current = HOME_TESTIMONIALS[currentIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 45) handleNext();
    if (distance < -45) handlePrev();
  };

  return (
    <section className="home-testi-section">
      <div className="journal-shell">
        {/* Section Title & Explanation */}
        <div className="home-testi-header">
          <div className="home-testi-header-copy">
            <span className="journal-kicker home-testi-kicker">
              <i /> REAL VOICES · 4.9 ★ RATING
            </span>
            <h2 className="home-testi-heading">
              Real recoveries.
              <br />
              <em>Honest words.</em>
            </h2>
          </div>
          <p className="home-testi-explanation">
            Every recovery milestone reflects our commitment to ethical joint preservation,
            advanced dermatology, and unhurried care at TOSH Foundation, Tiruchirappalli.
          </p>
        </div>

        {/* Carousel stage with flanking centered nav buttons (pure white card, borders only) */}
        <div className="home-testi-carousel-wrapper">
          <button
            type="button"
            className="home-testi-nav-btn desktop-nav btn-prev"
            onClick={handlePrev}
            aria-label="Previous patient story"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div
            className="home-testi-stage"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <span className={`home-testi-watermark-quote theme-${current.theme}`}>“</span>

            {/* Top metadata bar inside card */}
            <div className="home-testi-top-bar">
              <div className="home-testi-stars-wrap">
                <div className="home-testi-stars">★★★★★</div>
                <span className="home-testi-verified-pill">
                  <Icon n="check" s={12} /> Verified Patient Care
                </span>
                <span className={`home-testi-highlight-pill theme-${current.theme}`}>
                  {current.highlight}
                </span>
              </div>
            </div>

            {/* Single Review Quote Body with smooth transition */}
            <div className={`home-testi-quote-wrap ${fade ? "fade-in" : "fade-out"}`}>
              <blockquote className="home-testi-quote">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author info row */}
              <div className="home-testi-author-row">
                <div className="home-testi-author-left">
                  <span className={`home-testi-avatar bg-${current.theme}`}>
                    {current.initials}
                  </span>
                  <div className="home-testi-author-meta">
                    <strong className="home-testi-name">{current.name}</strong>
                    <span className="home-testi-role">
                      {current.role} · <span className="home-testi-loc">{current.location}</span>
                    </span>
                  </div>
                  <span className={`home-testi-dept-badge dept-${current.theme}`}>
                    {current.dept}
                  </span>
                </div>

                <div className="home-testi-author-actions">
                  <button
                    type="button"
                    className="home-testi-nav-btn mobile-nav btn-prev"
                    onClick={handlePrev}
                    aria-label="Previous patient story"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="home-testi-read-all-btn"
                    onClick={() => navigate("/testimonials")}
                  >
                    Read all verified stories <Icon n="arrow" s={13} />
                  </button>

                  <button
                    type="button"
                    className="home-testi-nav-btn mobile-nav btn-next"
                    onClick={handleNext}
                    aria-label="Next patient story"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>

          <button
            type="button"
            className="home-testi-nav-btn desktop-nav btn-next"
            onClick={handleNext}
            aria-label="Next patient story"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};


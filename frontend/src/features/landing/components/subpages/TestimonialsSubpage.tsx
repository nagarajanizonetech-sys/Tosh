import React from "react";
import type { RouteNavigate } from "../../types";
import { ORBITAL_REVIEWS, STREAM_REVIEWS_ROW_1, STREAM_REVIEWS_ROW_2 } from "../../data/landingData";
import { Icon } from "../Icon";
import { HeroShareRadial } from "../HeroShareRadial";
import { AnimatedHeroTitle } from "../AnimatedHeroTitle";

export function TestimonialsSubpage({ navigate }: { navigate: RouteNavigate }): React.JSX.Element {
  return (

      <main className="subpage testimonials-route-page">
        {/* Section 1: Hero with 360-degree rotating orbital review design */}
        <section className="testimonials-hero-section">
          <div className="journal-shell testimonials-hero-container">
            <div className="testimonials-hero-grid">
              {/* Left Column: Heading, Subtitle, Trust Badges, Breadcrumb */}
              <div className="testimonials-hero-left">
                <div className="testimonials-hero-meta">
                  <span className="subpage-number">05 / 06</span>
                  <span className="journal-kicker">
                    <i /> TOSH FOUNDATION / PATIENT VOICES
                  </span>
                </div>

                <div className="testimonials-hero-badge">
                  <span className="testimonials-badge-spark">✦</span>
                  <span>FAMILY STORIES &amp; RECOVERIES</span>
                </div>

                <AnimatedHeroTitle
                  className="testimonials-hero-title"
                  line1="Care our patients"
                  line2="take the time to write about"
                />

                <p className="testimonials-hero-desc">
                  A few of the many heartfelt stories and kind words shared with us
                  by the families we care for every day at TOSH Foundation, Tiruchirappalli.
                </p>

                <div className="testimonials-hero-breadcrumbs">
                  <span onClick={() => navigate("/")} className="crumb-link">Home</span>
                  <span className="crumb-sep">›</span>
                  <span className="crumb-current">Testimonials</span>
                </div>

                <div className="testimonials-hero-quick-stats">
                  <div className="hero-stat-pill">
                    <span className="stat-star">★★★★★</span>
                    <b>4.9 / 5.0</b>
                    <small>(250+ Verified Reviews)</small>
                  </div>
                  <div className="hero-trust-badge">
                    <Icon n="check" s={13} />
                    <span>Thillai Nagar, Trichy · Ethical Medical Practice</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 360-degree Rotating Orbital Animated Experience */}
              <div className="testimonials-hero-right">
                <div className="orbital-showcase-container">
                  {/* Glowing ambient backgrounds */}
                  <div className="orbital-glow orbital-glow-teal" />
                  <div className="orbital-glow orbital-glow-rose" />

                  {/* Concentric Decorative Rings */}
                  <div className="orbital-ring orbital-ring-outer" />
                  <div className="orbital-ring orbital-ring-mid" />
                  <div className="orbital-ring orbital-ring-inner" />

                  {/* Static Center Core: Circular Doctor Consultation Image */}
                  <div className="orbital-center-circle">
                    <img
                      src="/images/tosh-consultation-hero.webp"
                      alt="Compassionate patient consultation at TOSH Foundation"
                      className="orbital-center-img"
                    />
                    <div className="orbital-center-badge">
                      <span className="center-pulse-dot" />
                      <span>TOSH CLINIC</span>
                    </div>
                  </div>

                  {/* 360-Degree Continuous Rotating Orbit Stage */}
                  <div className="orbital-rotator-stage">
                    {ORBITAL_REVIEWS.map((rev, idx) => (
                      <div
                        key={rev.name}
                        className={`orbital-node orbital-node-${idx + 1}`}
                      >
                        {/* Counter-rotating card keeps review content right-side up and readable */}
                        <div className="orbital-card-counter">
                          <div className="orbital-card">
                            <div className="orbital-card-top">
                              <div className="orbital-card-author">
                                <span className={`orbital-avatar bg-${rev.color}`}>
                                  {rev.initials}
                                </span>
                                <div className="orbital-author-info">
                                  <strong className="orbital-name">{rev.name}</strong>
                                  <span className="orbital-role">{rev.role}</span>
                                </div>
                              </div>
                              <div className="orbital-stars">
                                {"★".repeat(rev.stars)}
                              </div>
                            </div>
                            <p className="orbital-quote">
                              &ldquo;{rev.quote}&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Rating Breakdown + Continuous Horizontal Smooth Scrolling Marquee */}
        <section className="testimonials-reviews-section">
          <div className="journal-shell">
            <div className="testimonials-header-flanked-container">
              {/* Left Flank: Half-Round Design Motif (Orthopaedics & Joint Care) */}
              <div className="header-half-round-flank flank-left">
                <div className="half-round-stage">
                  <div className="half-round-ring ring-outer" />
                  <div className="half-round-ring ring-mid" />
                  <div className="half-round-ring ring-inner" />
                  <div className="half-round-card">
                    <div className="half-round-card-top">
                      <div className="half-round-icon-wrap icon-teal">
                        <Icon n="bone" s={16} />
                      </div>
                      <span className="half-round-dept-pill">Orthopaedics</span>
                    </div>
                    <div className="half-round-card-body">
                      <strong className="half-round-stat">15+ Years</strong>
                      <span className="half-round-label">Restoring mobility &amp; joint strength</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Title Content */}
              <div className="testimonials-section-header">
                <span className="testimonials-section-kicker">
                  <i /> REAL PATIENT VOICES &amp; EXPERIENCES
                </span>
                <h2>
                  Restoring mobility, renewing confidence, healing lives.
                </h2>
                <p className="testimonials-section-sub">
                  Every recovery milestone reflects our dedication to ethical medicine, joint preservation, and advanced skin care at TOSH Foundation.
                </p>
                <div className="testimonials-header-accent-line" />
              </div>

              {/* Right Flank: Half-Round Design Motif (Dermatology & Skin Clarity) */}
              <div className="header-half-round-flank flank-right">
                <div className="half-round-stage">
                  <div className="half-round-ring ring-outer" />
                  <div className="half-round-ring ring-mid" />
                  <div className="half-round-ring ring-inner" />
                  <div className="half-round-card">
                    <div className="half-round-card-top">
                      <div className="half-round-icon-wrap icon-rose">
                        <Icon n="spark" s={16} />
                      </div>
                      <span className="half-round-dept-pill">Dermatology</span>
                    </div>
                    <div className="half-round-card-body">
                      <strong className="half-round-stat">99.4%</strong>
                      <span className="half-round-label">Evidence-based clinical skin care</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonials-stream-grid">
              
              {/* Left: Rating Breakdown Summary Card (matching Image 2) */}
              <div className="rating-summary-card">
                <div className="rating-score-top">
                  <span className="rating-big-number">4.6</span>
                  <div className="rating-stars-cluster">
                    <div className="stars-gold">★★★★★</div>
                    <span className="rating-count-label">
                      Average rating from 92+ families
                    </span>
                  </div>
                </div>

                {/* Rating Distribution Bars */}
                <div className="rating-bars-list">
                  <div className="rating-bar-row">
                    <span className="bar-star-label">5 ★</span>
                    <div className="bar-track">
                      <div className="bar-fill fill-68" />
                    </div>
                    <span className="bar-pct">68%</span>
                  </div>
                  <div className="rating-bar-row">
                    <span className="bar-star-label">4 ★</span>
                    <div className="bar-track">
                      <div className="bar-fill fill-22" />
                    </div>
                    <span className="bar-pct">22%</span>
                  </div>
                  <div className="rating-bar-row">
                    <span className="bar-star-label">3 ★</span>
                    <div className="bar-track">
                      <div className="bar-fill fill-6" />
                    </div>
                    <span className="bar-pct">6%</span>
                  </div>
                  <div className="rating-bar-row">
                    <span className="bar-star-label">2 ★</span>
                    <div className="bar-track">
                      <div className="bar-fill fill-2" />
                    </div>
                    <span className="bar-pct">2%</span>
                  </div>
                  <div className="rating-bar-row">
                    <span className="bar-star-label">1 ★</span>
                    <div className="bar-track">
                      <div className="bar-fill fill-2" />
                    </div>
                    <span className="bar-pct">2%</span>
                  </div>
                </div>

                <div className="rating-card-footer">
                  <span className="verified-check-pill">
                    <Icon n="check" s={13} /> Shared with permission
                  </span>
                </div>
              </div>

              {/* Right: Continuous Smooth Scrolling Marquee Rows */}
              <div className="marquee-stream-wrapper">
                {/* Row 1: Smooth Scroll Left */}
                <div className="marquee-track-container track-left">
                  <div className="marquee-slider slider-left">
                    {STREAM_REVIEWS_ROW_1.concat(STREAM_REVIEWS_ROW_1).map((item, idx) => (
                      <div key={`row1-${idx}`} className="stream-review-card">
                        <div className="card-top-heart">
                          <span className="heart-circle">♥</span>
                        </div>
                        <p className="stream-quote">
                          {item.quote}
                        </p>
                        <div className="stream-author-row">
                          <span className="stream-avatar">{item.initials}</span>
                          <div className="stream-meta">
                            <strong className="stream-name">{item.name}</strong>
                            <span className="stream-care">{item.care}</span>
                            <div className="stream-stars">★★★★★</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 2: Smooth Scroll Right */}
                <div className="marquee-track-container track-right">
                  <div className="marquee-slider slider-right">
                    {STREAM_REVIEWS_ROW_2.concat(STREAM_REVIEWS_ROW_2).map((item, idx) => (
                      <div key={`row2-${idx}`} className="stream-review-card">
                        <div className="card-top-heart">
                          <span className="heart-circle">♥</span>
                        </div>
                        <p className="stream-quote">
                          {item.quote}
                        </p>
                        <div className="stream-author-row">
                          <span className="stream-avatar">{item.initials}</span>
                          <div className="stream-meta">
                            <strong className="stream-name">{item.name}</strong>
                            <span className="stream-care">{item.care}</span>
                            <div className="stream-stars">★★★★★</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        <HeroShareRadial />
      </main>
    )
}

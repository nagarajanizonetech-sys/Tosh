import React from "react";
import type { RouteNavigate } from "../../types";
import { Icon } from "../Icon";
import { StoryVisualCarousel } from "../StoryVisualCarousel";

export function StorySection({ navigate }: { navigate: RouteNavigate }): React.JSX.Element {
  return (
        <section id="story" className="journal-section journal-story story-v4">
          <div className="journal-shell story-about-hero">
            <div className="story-about-grid">
              <div className="story-about-copy">
                <div className="story-about-badge">
                  <Icon n="spark" s={14} />
                  <span>ABOUT TOSH FOUNDATION</span>
                </div>
                <h2>
                  Compassionate care.
                  <br />
                  <em>Rooted in clinical excellence.</em>
                </h2>
                <p>
                  At TOSH Foundation, Tiruchirappalli, we are dedicated to
                  delivering trusted, personalized healthcare in Orthopaedics
                  and Dermatology. From joint preservation and mobility
                  restoration to clinical skin health and aesthetic clarity, our
                  specialists support you at every step of your journey.
                </p>
                <div className="story-about-actions">
                  <a
                    href="#contact"
                    className="story-about-btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/contact");
                    }}
                  >
                    <span>Contact Us</span> <Icon n="arrow" s={15} />
                  </a>
                  <button
                    type="button"
                    className="story-about-btn-secondary"
                    onClick={() => navigate("/services")}
                  >
                    <Icon n="check" s={14} /> <span>Our Services</span>
                  </button>
                </div>
                <div className="story-about-breadcrumbs">
                  <span onClick={() => navigate("/")}>Home</span>
                  <i className="crumb-sep">›</i>
                  <span className="crumb-active">About Us</span>
                </div>
              </div>

              <StoryVisualCarousel />
            </div>

            <div className="story-about-stats-bar">
              <div className="story-stat-item">
                <div className="story-stat-icon-wrap icon-teal">
                  <Icon n="bone" s={18} />
                </div>
                <div className="story-stat-text">
                  <strong>12+</strong>
                  <small>Years Combined Expertise</small>
                </div>
              </div>
              <div className="story-stat-divider" />
              <div className="story-stat-item">
                <div className="story-stat-icon-wrap icon-coral">
                  <Icon n="check" s={18} />
                </div>
                <div className="story-stat-text">
                  <strong>10,000+</strong>
                  <small>Happy Patients & Families</small>
                </div>
              </div>
              <div className="story-stat-divider" />
              <div className="story-stat-item">
                <div className="story-stat-icon-wrap icon-purple">
                  <Icon n="spark" s={18} />
                </div>
                <div className="story-stat-text">
                  <strong>98%</strong>
                  <small>Clinical Success Rate</small>
                </div>
              </div>
              <div className="story-stat-divider" />
              <div className="story-stat-item">
                <div className="story-stat-icon-wrap icon-navy">
                  <Icon n="phone" s={18} />
                </div>
                <div className="story-stat-text">
                  <strong>Mon–Sun</strong>
                  <small>07:30 AM – 08:00 PM</small>
                </div>
              </div>
            </div>
          </div>

          <div className="journal-shell story-v4-path">
            <div className="story-v4-path-line">
              <i />
              <i />
              <i />
            </div>
            <article className="story-v4-step story-v4-step-one">
              <div className="story-v4-step-top">
                <span>01</span>
                <small>BEGIN WITH YOU</small>
              </div>
              <div className="story-v4-step-content">
                <h3>
                  Listen
                  <br />
                  <em>closely.</em>
                </h3>
                <p>
                  Your questions, routines and concerns help us understand the
                  full picture before a plan is made.
                </p>
              </div>
              <b className="story-v4-chip">PERSONALISED CARE</b>
            </article>
            <article className="story-v4-step story-v4-step-two">
              <div className="story-v4-step-top">
                <span>02</span>
                <small>MAKE IT CLEAR</small>
              </div>
              <div className="story-v4-step-content">
                <h3>
                  Assess
                  <br />
                  <em>thoughtfully.</em>
                </h3>
                <p>
                  Evidence, experience and modern technology come together to
                  shape the right next step.
                </p>
              </div>
              <b className="story-v4-chip">CLINICAL EXCELLENCE</b>
            </article>
            <article className="story-v4-step story-v4-step-three">
              <div className="story-v4-step-top">
                <span>03</span>
                <small>MOVE FORWARD</small>
              </div>
              <div className="story-v4-step-content">
                <h3>
                  Leave with
                  <br />
                  <em>confidence.</em>
                </h3>
                <p>
                  Clear explanations and compassionate support help you feel
                  ready for what comes next.
                </p>
              </div>
              <b className="story-v4-chip">PATIENT-CENTRED CARE</b>
            </article>
          </div>

          <div className="journal-shell story-v4-bottom">
            <span className="story-v4-bottom-label">WHAT GUIDES US</span>
            <div className="story-v4-values">
              <span>Excellence</span>
              <span>Integrity</span>
              <span>Compassion</span>
              <span>Innovation</span>
              <span>Community</span>
            </div>
            <span className="story-v4-bottom-mark">
              TOSH <i>TRICHY</i>
            </span>
          </div>
        </section>

  );
}

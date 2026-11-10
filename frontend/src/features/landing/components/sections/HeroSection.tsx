import React from "react";
import { art } from "../../data/landingData";
import { Icon } from "../Icon";
import { Reveal } from "../Reveal";
import { AnimatedHeroTitle } from "../AnimatedHeroTitle";

export function HeroSection({ scroll }: { scroll: (id: string) => void }): React.JSX.Element {
  return (
        <section className="journal-hero hero-v2">
          <div className="journal-shell hero-v2-shell">
            <div className="hero-v2-grid">
              <Reveal>
                <div className="hero-v2-copy">
                  <span className="journal-kicker">
                    <i /> TOSH FOUNDATION / CARE, WITH CONTEXT
                  </span>
                  <AnimatedHeroTitle
                    line1="Move well."
                    line2="Feel at home."
                    style={{ color: "ivory" }}
                  />
                  <p>
                    Specialist orthopaedic and dermatology care for the way you
                    live, work, move and show up in the world.
                  </p>
                  <div className="hero-v2-actions">
                    <button
                      className="journal-button"
                      onClick={() => scroll("specialties")}
                    >
                      Choose your care path <Icon n="arrow" s={16} />
                    </button>
                    <button
                      className="hero-v2-play"
                      onClick={() => scroll("story")}
                    >
                      <span>↓</span> See how we think about care
                    </button>
                  </div>
                  <div className="hero-v2-metrics">
                    <div>
                      <b>01</b>
                      <span>
                        specialties
                        <br />
                        under one foundation
                      </span>
                    </div>
                    <div>
                      <b>02</b>
                      <span>
                        clearer
                        <br />
                        next step
                      </span>
                    </div>
                    <div>
                      <b>∞</b>
                      <span>
                        questions
                        <br />
                        welcome
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="hero-v2-bottom"
                  style={{ marginTop: "45px", fontSize: "10px" }}
                >
                  <span>SCROLL TO EXPLORE</span>
                  <i />
                  <span>01 — 06</span>
                </div>
              </Reveal>
              <Reveal className="hero-v2-stage">
                <div className="hero-v2-stage-label">
                  <span>CASE STUDY / 001</span>
                  <b>
                    THE BODY
                    <br />
                    <em>IN MOTION</em>
                  </b>
                </div>
                <div className="hero-v2-image">
                  <img
                    src={art.ortho}
                    alt="AI-generated realistic orthopaedic editorial visual"
                    loading="eager"
                    {...{ fetchpriority: 'high' }}
                    decoding="async"
                  />
                  <span>JOINT HEALTH / 01</span>
                </div>
                <div className="hero-v2-skin">
                  <img
                    src={art.skin}
                    alt="Scientific 3D dermatology and skin cellular health visual"
                  />
                  <span>SKIN HEALTH / 02</span>
                </div>
                <div className="hero-v2-ring ring-one" />
                <div className="hero-v2-ring ring-two" />
                <div className="hero-v2-note">
                  <Icon n="check" s={15} />
                  <span>
                    Start with a<br />
                    <b>conversation.</b>
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

  );
}

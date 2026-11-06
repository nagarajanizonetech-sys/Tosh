import React from "react";
import { art } from "../../data/landingData";
import { Icon } from "../Icon";

export interface SpecialtiesSectionProps {
  specialtiesRef: React.RefObject<HTMLElement | null>;
  specialtiesProgress: number;
  goToSpecialty: (slideIndex: number) => void;
  scroll: (id: string) => void;
}

export function SpecialtiesSection({
  specialtiesRef,
  specialtiesProgress,
  goToSpecialty,
  scroll,
}: SpecialtiesSectionProps): React.JSX.Element {
  return (
        <section
          id="specialties"
          ref={specialtiesRef as React.RefObject<HTMLDivElement>}
          className="journal-specialties-container"
        >
          <div className="journal-specialties-sticky">
            <div className="journal-shell">
              <div className="specialties-header-row">
                <div>
                  <span className="journal-kicker">02 / TWO SPECIALTIES</span>
                  <h2>
                    Precision in motion.
                    <br />
                    <em>Clarity in skin.</em>
                  </h2>
                </div>
                <div className="specialties-pills">
                  <button
                    type="button"
                    className={`ortho-pill ${specialtiesProgress < 0.5 ? "active" : ""}`}
                    onClick={() => goToSpecialty(0)}
                  >
                    <Icon n="bone" s={17} /> <span>Chapter 02 A</span> ·
                    Movement & joints
                  </button>
                  <button
                    type="button"
                    className={`skin-pill ${specialtiesProgress >= 0.5 ? "active" : ""}`}
                    onClick={() => goToSpecialty(1)}
                  >
                    <Icon n="spark" s={17} /> <span>Chapter 02 B</span> · Skin,
                    hair & confidence
                  </button>
                </div>
              </div>

              <div className="specialties-viewport">
                <div
                  className="specialties-track"
                  style={{
                    transform: `translateX(calc(-${specialtiesProgress} * (100% + 40px)))`,
                  }}
                >
                  {/* SLIDE 1: ORTHOPAEDICS */}
                  <div className="specialties-slide">
                    <div id="chapter-ortho" className="journal-feature ortho">
                      <div className="feature-copy">
                        <span>CHAPTER 02A / ORTHOPAEDICS</span>
                        <h3 style={{ color: "ivory" }}>
                          Care for the body
                          <br />
                          that <em>moves you.</em>
                        </h3>
                        <p>
                          From knee and shoulder concerns to fracture, sports
                          injury, joint preservation and replacement care, the
                          right plan starts with understanding your movement.
                        </p>
                        <div className="feature-list">
                          {[
                            "Knee & shoulder care",
                            "Joint replacement",
                            "Arthroscopy & fracture care",
                            "Sports injury management",
                            "Orthopaedic rehabilitation",
                          ].map((x) => (
                            <span key={x}>
                              <Icon n="check" s={13} />
                              {x}
                            </span>
                          ))}
                        </div>
                        <button
                          type="button"
                          className="feature-link"
                          onClick={() => scroll("services")}
                        >
                          Explore services <Icon n="arrow" s={15} />
                        </button>
                      </div>
                      <div className="feature-visual">
                        <img
                          src={art.ortho}
                          alt="AI-generated realistic knee editorial visual"
                        />
                        <div className="feature-caption">
                          MOTION / JOINT / RECOVERY
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SLIDE 2: DERMATOLOGY */}
                  <div className="specialties-slide">
                    <div id="chapter-skin" className="journal-feature skin">
                      <div className="feature-copy">
                        <span>CHAPTER 02B / DERMATOLOGY</span>
                        <h3>
                          Care for the skin
                          <br />
                          you <em>live in.</em>
                        </h3>
                        <p>
                          From acne and pigmentation to eczema, psoriasis, hair
                          and scalp concerns, skin care begins with
                          understanding your individual context.
                        </p>
                        <div className="feature-list">
                          {[
                            "Acne & acne-scar care",
                            "Pigmentation concerns",
                            "Eczema & psoriasis",
                            "Hair & scalp concerns",
                            "Appropriate aesthetic care",
                          ].map((x) => (
                            <span key={x}>
                              <Icon n="check" s={13} />
                              {x}
                            </span>
                          ))}
                        </div>
                        <button
                          type="button"
                          className="feature-link"
                          onClick={() => scroll("services")}
                        >
                          Explore services <Icon n="arrow" s={15} />
                        </button>
                      </div>
                      <div className="feature-visual skin-feature-visual">
                        <img
                          src={art.skin}
                          alt="Scientific 3D dermatology and skin cellular health visual"
                        />
                        <div className="feature-caption">
                          CELLULAR / BARRIER / CONFIDENCE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  );
}

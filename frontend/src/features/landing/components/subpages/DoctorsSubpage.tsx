import React from "react";
import type { RouteNavigate } from "../../types";
import { Icon } from "../Icon";
import { HeroShareRadial } from "../HeroShareRadial";
import { AnimatedHeroTitle } from "../AnimatedHeroTitle";

export function DoctorsSubpage({ navigate }: { navigate: RouteNavigate }): React.JSX.Element {
  return (

      <main className="subpage doctors-route-nohero">
        <section className="doctors-hero-section">
          <div className="doctors-hero-layout">
            <div className="doctors-hero-left-pane">
              <div className="doctors-hero-copy">
                <span className="subpage-number">04 / 05</span>
                <span className="journal-kicker">
                  <i /> TOSH FOUNDATION / THE SPECIALISTS
                </span>
                <AnimatedHeroTitle
                  line1="Trusted care for"
                  line2="every health journey."
                />
                <p>
                  Two dedicated senior specialists uniting precision orthopaedic surgery
                  and evidence-based clinical dermatology — delivering thoughtful,
                  unhurried and personalized care in Tiruchirappalli.
                </p>

                <div className="doctors-hero-trust-chips">
                  <span className="doctors-hero-chip">
                    <Icon n="check" s={13} /> 12+ Years Combined Experience
                  </span>
                  <span className="doctors-hero-chip">
                    <Icon n="check" s={13} /> Madras Medical College Alumni
                  </span>
                  <span className="doctors-hero-chip">
                    <Icon n="check" s={13} /> Direct Doctor Consultations
                  </span>
                  <span className="doctors-hero-chip">
                    <Icon n="check" s={13} /> 10,000+ Happy Patients
                  </span>
                </div>

                <div className="doctors-hero-actions">
                  <button
                    className="doctors-hero-btn primary"
                    onClick={() =>
                      document
                        .getElementById("specialist-profiles")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Meet Our Specialists <Icon n="arrow" s={14} />
                  </button>
                  <button
                    className="doctors-hero-btn secondary"
                    onClick={() => navigate("/contact")}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>

            <div className="doctors-hero-right-pane">
              <div className="doctors-hero-image-frame">
                <img
                  src="/images/tosh-story-hero.webp"
                  alt="Dr. M. Sundarprakash and Dr. S. Sangamitra consulting with patients"
                  className="doctors-hero-consult-img"
                />
                {/* Soft feathered edge on the left to blend seamlessly into the background */}
                <div className="doctors-hero-left-feather" aria-hidden="true" />
                <div className="doctors-hero-top-vignette" aria-hidden="true" />
                <div className="doctors-hero-bottom-vignette" aria-hidden="true" />

                <div className="doctors-hero-consult-pill">
                  <span className="dot-pulse" />
                  <div>
                    <strong>Senior Specialists · Direct Consultation</strong>
                    <small>Dr. M. Sundarprakash & Dr. S. Sangamitra with Patients</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="specialist-profiles"
          className="subpage-section doctors-page doctors-editorial"
        >
          <div className="journal-shell">
            <div className="doctor-editorial-row doctor-editorial-ortho">
              <div className="doctor-editorial-portrait">
                <img src="/images/drortho.webp" alt="Dr. M. Sundarprakash" />
                <span>01 / ORTHOPAEDICS</span>
              </div>
              <div className="doctor-editorial-main">
                <div className="doctor-editorial-kicker">
                  <b>01</b>
                  <span>ORTHOPAEDIC SURGERY</span>
                </div>
                <h2>
                  <span>Dr. M.</span> <em>Sundarprakash</em>
                </h2>
                <p>
                  Dr. M. Sundarprakash is a dedicated orthopaedic surgeon,
                  highly skilled in treating comprehensive bone, joint and
                  spinal problems. He completed his MBBS from Government
                  Dharmapuri Medical College and MS Ortho from Madras Medical
                  College.
                </p>
                <p>
                  He further enhanced his expertise with a fellowship in joint
                  replacement at Sunshine Hospital, Hyderabad, Asia’s second
                  largest centre for joint replacement. With 7 years of
                  experience and more than 500 joint replacement surgeries, he
                  is skilled in performing surgeries and takes time to
                  understand patient concerns.
                </p>
              </div>
              <div className="doctor-editorial-facts">
                <span>
                  <b>Education</b>MS Ortho
                </span>
                <span>
                  <b>Experience</b>7 years
                </span>
                <span>
                  <b>Registration</b>111745
                </span>
                <span>
                  <b>Mobile</b>8048035978
                </span>
                <span>
                  <b>Speciality</b>Joint replacement
                </span>
                <span>
                  <b>Memberships</b>111745
                </span>
              </div>
            </div>
            <div className="doctor-editorial-row doctor-editorial-skin">
              <div className="doctor-editorial-portrait">
                <img src="/images/drskin.webp" alt="Dr. S. Sangamitra" />
                <span>02 / DERMATOLOGY</span>
              </div>
              <div className="doctor-editorial-main">
                <div className="doctor-editorial-kicker">
                  <b>02</b>
                  <span>CLINICAL & AESTHETIC DERMATOLOGY</span>
                </div>
                <h2>
                  <span>Dr. S.</span> <em>Sangamitra</em>
                </h2>
                <p>
                  Dr. S. Sangamitra is a highly skilled dermatologist with a
                  passion for delivering advanced evidence-based skin care, hair
                  care and aesthetic treatments. She did her MBBS at Madras
                  Medical College and her MD at Government Cuddalore Medical
                  College, then pursued extensive training in laser and
                  aesthetics under a renowned dermatologist of India.
                </p>
                <p>
                  With strong academic training and a patient-centred approach,
                  she specialises in diagnosing and treating various
                  dermatological and aesthetic concerns. She has presented
                  papers in national conferences and has won best paper awards.
                  Her research interests and continued commitment to learning
                  support her focus on current and effective treatments.
                </p>
              </div>
              <div className="doctor-editorial-facts">
                <span>
                  <b>Education</b>MBBS · Madras Medical College
                  <br />
                  MD (DVL) · Government Cuddalore Medical College
                </span>
                <span>
                  <b>Experience</b>5 years
                </span>
                <span>
                  <b>Registration</b>150098
                </span>
                <span>
                  <b>Mobile</b>8838623336
                </span>
                <span>
                  <b>Speciality</b>Clinical Dermatologist and Aesthetic
                  Dermatologist
                </span>
                <span>
                  <b>Memberships</b>Trained in aesthetics and lasers under a
                  renowned dermatologist of India
                </span>
              </div>
            </div>
          </div>

        </section>
        <HeroShareRadial />
      </main>
    )
}

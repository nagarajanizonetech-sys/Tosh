import React from "react";
import type { RouteNavigate } from "../../types";
import { Icon } from "../Icon";
import { HeroShareRadial } from "../HeroShareRadial";
import { AnimatedHeroTitle } from "../AnimatedHeroTitle";

export function SpecialtiesSubpage({ navigate }: { navigate: RouteNavigate }): React.JSX.Element {
  return (

      <main className="subpage specialties-route">
        <section className="specialties-hero specialties-hero-lab">
          <div className="journal-shell specialties-hero-grid">
            <div className="specialties-hero-copy">
              <span className="journal-kicker">
                <i /> TOSH FOUNDATION / THE SPECIALTY LAB
              </span>
              <span className="specialties-hero-index">
                02 / TWO DISCIPLINES · ONE FOUNDATION
              </span>
              <AnimatedHeroTitle
                line1="Different needs."
                line2="One clear direction."
              />
              <p>
                Orthopaedics and Dermatology meet the same TOSH standard: listen
                carefully, assess thoughtfully and make the next step easier to
                understand.
              </p>
              <button
                className="specialties-hero-button"
                onClick={() =>
                  document
                    .getElementById("specialty-index")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore the two disciplines <Icon n="arrow" s={15} />
              </button>
            </div>
            <div
              className="specialty-tunnel-stage"
              aria-label="Animated TOSH specialty care tunnel"
            >
              <div className="tunnel-sky" aria-hidden="true" />
              <div className="tunnel-floor" aria-hidden="true" />
              <div
                className="tunnel-ring tunnel-ring-back"
                aria-hidden="true"
              />
              <div className="tunnel-ring tunnel-ring-mid" aria-hidden="true" />
              <div
                className="tunnel-ring tunnel-ring-front"
                aria-hidden="true"
              />
              <div className="tunnel-ribbon ribbon-mint" aria-hidden="true" />
              <div className="tunnel-ribbon ribbon-lilac" aria-hidden="true" />
              <div className="tunnel-node node-ortho">
                <span>01</span>
                <b>MOTION</b>
                <small>ORTHOPAEDICS</small>
              </div>
              <div className="tunnel-node node-skin">
                <span>02</span>
                <b>CLARITY</b>
                <small>DERMATOLOGY</small>
              </div>
              <div className="tunnel-core">
                <span>✦</span>
                <b>TOSH</b>
                <small>
                  ONE PATIENT
                  <br />
                  AT THE CENTRE
                </small>
              </div>
              <div className="tunnel-marker marker-top">LISTEN</div>
              <div className="tunnel-marker marker-bottom">UNDERSTAND</div>
              <div className="tunnel-marker marker-solution">SOLUTION</div>
              <div className="tunnel-caption">
                <span>THE CARE TUNNEL</span>
                <b>
                  Two pathways.
                  <br />
                  One clear next step.
                </b>
              </div>
            </div>
          </div>
        </section>
        <section
          id="specialty-index"
          className="subpage-section specialties-page specialties-showcase"
        >
          <div className="journal-shell">
            <div className="specialty-showcase-heading">
              <div>
                <span className="journal-kicker">THE SPECIALTY INDEX</span>
                <h2>
                  Two disciplines.
                  <br />
                  <em>One considered approach.</em>
                </h2>
              </div>
              <p>
                Choose the care conversation that best matches where you are
                today.
              </p>
            </div>
            <div className="specialty-panel-grid">
              <article className="specialty-panel specialty-panel-ortho">
                <div className="specialty-panel-image">
                  <img src="/images/specialties-ortho-model.webp" alt="Precision orthopaedic bone and joint care visual" />
                  <span>01 / ORTHOPAEDICS</span>
                </div>
                <div className="specialty-panel-body">
                  <div className="specialty-panel-label">
                    <b>01</b>
                    <span>MOVE WITH CONFIDENCE</span>
                  </div>
                  <h3>
                    Precision in
                    <br />
                    <em>motion.</em>
                  </h3>
                  <p>
                    Orthopaedic care at TOSH Foundation supports bone, joint,
                    muscle and mobility-related concerns. The current clinical
                    offering includes joint preservation, fracture care,
                    arthroscopy, replacement procedures and rehabilitation-led
                    planning.
                  </p>
                  <button
                    className="journal-button"
                    onClick={() => navigate("/services")}
                  >
                    Explore orthopaedic services <Icon n="arrow" s={15} />
                  </button>
                </div>
              </article>
              <article className="specialty-panel specialty-panel-skin">
                <div className="specialty-panel-image">
                  <img src="/images/specialties-skin-model.webp" alt="Scientific 3D dermatology skin layers and cellular model" />
                  <span>02 / DERMATOLOGY</span>
                </div>
                <div className="specialty-panel-body">
                  <div className="specialty-panel-label">
                    <b>02</b>
                    <span>CARE THAT SEES THE WHOLE YOU</span>
                  </div>
                  <h3>
                    Clarity for
                    <br />
                    <em>the skin you live in.</em>
                  </h3>
                  <p>
                    Clinical and aesthetic dermatology care covers skin, hair,
                    scalp and confidence-related concerns, with assessment and
                    treatment planned around each patient’s individual context.
                  </p>
                  <button
                    className="journal-button"
                    onClick={() => navigate("/services")}
                  >
                    Explore skin services <Icon n="arrow" s={15} />
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
        <HeroShareRadial />
      </main>
    )
}

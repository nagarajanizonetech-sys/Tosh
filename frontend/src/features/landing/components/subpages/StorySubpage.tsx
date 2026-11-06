import React from "react";
import type { RouteNavigate } from "../../types";
import { officialGallery, officialMission } from "../../data/landingData";
import { Icon } from "../Icon";
import { HeroShareRadial } from "../HeroShareRadial";
import { AnimatedHeroTitle } from "../AnimatedHeroTitle";

export function StorySubpage({ navigate: _navigate }: { navigate: RouteNavigate }): React.JSX.Element {
  return (

      <main className="subpage story-page-v2">
        <section className="story-page-hero story-archive-hero">
          <div className="journal-shell story-archive-grid">
            <div className="story-archive-index" aria-hidden="true">
              <span>OUR STORY</span>
              <i />
              <b>01</b>
              <small>06</small>
            </div>
            <div className="story-archive-copy">
              <span className="journal-kicker">
                <i /> TOSH FOUNDATION / THE ARCHIVE
              </span>
              <span className="story-archive-year">
                EST. IN CARE · CONTINUING FORWARD
              </span>
              <AnimatedHeroTitle
                line1="A story shaped"
                line2="by listening."
              />
              <p>
                Before there is a diagnosis, there is a person. Our story begins
                with making space for questions, context and the next right
                step.
              </p>
              <div className="story-archive-actions">
                <a
                  href="#story-belief"
                  className="story-archive-button"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("story-belief")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Enter the story <Icon n="arrow" s={16} />
                </a>
                <span>
                  <b>Listen first.</b>
                  <br />
                  Care follows.
                </span>
              </div>
            </div>
            <div
              className="story-archive-stage"
              aria-label="TOSH Foundation story collage"
            >
              <div className="story-archive-sun" aria-hidden="true" />
              <div className="story-archive-grid-lines" aria-hidden="true" />
              <div
                className="story-archive-sheet story-archive-sheet-back"
                aria-hidden="true"
              >
                <span>FIELD NOTES</span>
                <b>
                  CONTEXT
                  <br />
                  MATTERS
                </b>
              </div>
              <div className="story-archive-photo story-archive-photo-main">
                <img
                  src="/images/story-ortho-movement.webp"
                  alt="Articulated orthopaedic kinetic joint sculpture representing movement"
                />
                <span>01 / MOVEMENT</span>
              </div>
              <div className="story-archive-photo story-archive-photo-detail">
                <img
                  src="/images/story-skin-confidence.webp"
                  alt="Scientific cellular dermatology crystal sculpture representing confidence"
                />
                <span>02 / CONFIDENCE</span>
              </div>
              <div className="story-archive-note">
                <span>“</span>
                <p>
                  The person
                  <br />
                  <em>before</em> the plan.
                </p>
                <small>THE TOSH METHOD</small>
              </div>
              <div className="story-archive-stamp">
                <b>TOSH</b>
                <span>
                  CARE
                  <br />
                  WITH
                  <br />
                  CONTEXT
                </span>
              </div>
              <div className="story-archive-tag tag-one">
                <span>✦</span> COMPASSION
              </div>
              <div className="story-archive-tag tag-two">
                <span>✚</span> CLARITY
              </div>
            </div>
          </div>
        </section>
        <section id="story-belief" className="story-belief">
          <div className="journal-shell story-belief-grid">
            <div className="story-belief-label">
              <span className="journal-kicker">THE BELIEF</span>
              <strong>01</strong>
              <i />
            </div>
            <div className="story-belief-copy">
              <h2>
                A more considered
                <br />
                <em>way to care.</em>
              </h2>
              <p>
                TOSH Foundation exists to become the most trusted and respected
                centre for Orthopaedic and Skin care in Tamil Nadu, delivering
                world-class healthcare through clinical excellence, innovation,
                compassion, and ethical medical practice.
              </p>
              <p className="story-source-note">
                The foundation’s work is grounded in accessible, evidence-based
                care and personalised treatment plans that put patient
                well-being first.
              </p>
              <div className="story-official-quote">
                <span>OFFICIAL ABOUT US</span>
                <p>
                  To become the most trusted and respected centre for
                  Orthopaedic and Skin care in Tamil Nadu, delivering
                  world-class healthcare through clinical excellence,
                  innovation, compassion, and ethical medical practice.
                </p>
                <p>
                  To provide high-quality, evidence-based Orthopaedic and
                  Dermatology care that is accessible and affordable, prioritize
                  patient well-being through personalized treatment plans and
                  compassionate care, utilize modern technology and advanced
                  treatment modalities for optimal clinical outcomes, promote
                  preventive healthcare and community awareness through
                  education, screening programs, and outreach initiatives,
                  continuously improve through learning, research, and adoption
                  of best medical practices, and build a healthcare institution
                  that patients trust, employees are proud to serve, and the
                  community values for generations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="story-mission">
          <div className="journal-shell">
            <div className="story-section-heading">
              <div>
                <span className="journal-kicker">
                  THE WORK BEHIND THE PROMISE
                </span>
                <h2>
                  Six ways we
                  <br />
                  <em>show up.</em>
                </h2>
              </div>
              <p>
                Our mission is not a statement on a wall. It is a way of
                working, learning and caring — every day.
              </p>
            </div>
            <div className="story-mission-list">
              {officialMission.map((item, index) => (
                <article key={item}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>
                      {
                        [
                          "Evidence, made accessible.",
                          "The person before the plan.",
                          "Modern care, thoughtfully used.",
                          "Health beyond the clinic.",
                          "Always learning.",
                          "A foundation for generations.",
                        ][index]
                      }
                    </h3>
                    <p>{item}</p>
                  </div>
                  <i>↗</i>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="story-gallery-v2">
          <div className="journal-shell">
            <div className="story-section-heading">
              <div>
                <span className="journal-kicker">FROM THE CLINIC</span>
                <h2>
                  Seen from
                  <br />
                  <em>the inside.</em>
                </h2>
              </div>
              <p>Official TOSH Foundation gallery images.</p>
            </div>
            <div className="story-gallery-grid-v2">
              {officialGallery.map((image, index) => (
                <figure key={image}>
                  <div>
                    <img
                      src={image}
                      alt={`TOSH Foundation clinic gallery ${index + 1}`}
                    />
                  </div>
                  <figcaption>
                    <span>0{index + 1}</span> TOSH FOUNDATION / CLINIC VIEW
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <HeroShareRadial />
      </main>
    )
}

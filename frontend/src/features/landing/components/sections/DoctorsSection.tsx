import React from "react";
import type { RouteNavigate } from "../../types";
import { Icon } from "../Icon";
import { Reveal } from "../Reveal";

export function DoctorsSection({ navigate }: { navigate: RouteNavigate }): React.JSX.Element {
  return (
        <section id="doctors" className="journal-section journal-doctors">
          <div className="journal-shell">
            <Reveal>
              <span className="journal-kicker">04 / THE SPECIALISTS</span>
              <h2>
                People first.
                <br />
                <em>Expertise always.</em>
              </h2>
            </Reveal>
            <div className="journal-doctor-grid">
              <Reveal>
                <article>
                  <div className="doctor-visual">
                    <img src="/images/drskin.webp" alt="Dr. S. Sangamitra" />
                    <div className="doctor-badge dermatology">DERMATOLOGY</div>
                  </div>
                  <div>
                    <small>CLINICAL & AESTHETIC DERMATOLOGY</small>
                    <h3>Dr. S. Sangamitra</h3>
                    <b>MBBS · MD (DVL) · 5 years’ experience</b>
                    <p>
                      MBBS from Madras Medical College and MD (DVL) from
                      Government Cuddalore Medical College. Clinical, skin, hair
                      and aesthetic dermatology.
                    </p>
                    <a
                      href="/doctors"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/doctors");
                      }}
                    >
                      Official profile <Icon n="arrow" s={14} />
                    </a>
                  </div>
                </article>
              </Reveal>
              <Reveal>
                <article>
                  <div className="doctor-visual">
                    <img src="/images/drortho.webp" alt="Dr. M. Sundarprakash" />
                    <div className="doctor-badge ortho">ORTHOPAEDICS</div>
                  </div>
                  <div>
                    <small>ORTHOPAEDIC SURGERY</small>
                    <h3>Dr. M. Sundarprakash</h3>
                    <b>MBBS · MS Ortho · 7 years’ experience</b>
                    <p>
                      Orthopaedic surgeon treating comprehensive bone, joint and
                      spinal problems, including joint replacement care and
                      personalised planning.
                    </p>
                    <a
                      href="/doctors"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/doctors");
                      }}
                    >
                      Official profile <Icon n="arrow" s={14} />
                    </a>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

  );
}

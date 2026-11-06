import React from "react";

export function PathwaysSection(): React.JSX.Element {
  return (
        <section className="journal-section journal-path path-v5">
          <div className="journal-shell path-v5-header">
            <div>
              <span className="journal-kicker">
                <i /> 05 / YOUR CARE PATH
              </span>
              <h2>
                Five chapters.
                <br />
                <em>One clearer way forward.</em>
              </h2>
            </div>
            <div className="path-v5-intro">
              <span>THE TOSH METHOD</span>
              <p>
                Every consultation has a beginning, a middle and a next step.
                Here is how we make the journey easier to follow.
              </p>
            </div>
          </div>
          <div className="journal-shell path-v5-chapters">
            <article className="path-v5-chapter path-v5-featured">
              <div className="path-v5-chapter-meta">
                <b>01</b>
                <small>THE BEGINNING</small>
              </div>
              <div>
                <h3>
                  Notice
                  <br />
                  <em>what changed.</em>
                </h3>
                <p>
                  Start with what you feel. Your questions and concerns give the
                  conversation its direction.
                </p>
              </div>
              <span className="path-v5-chapter-arrow">
                01 <i>↗</i>
              </span>
            </article>
            <article className="path-v5-chapter path-v5-lilac">
              <div className="path-v5-chapter-meta">
                <b>02</b>
                <small>THE CONNECTION</small>
              </div>
              <h3>Connect.</h3>
              <p>Call or email the clinic and share a little context.</p>
              <span className="path-v5-chapter-arrow">
                02 <i>↗</i>
              </span>
            </article>
            <article className="path-v5-chapter path-v5-sage">
              <div className="path-v5-chapter-meta">
                <b>03</b>
                <small>THE CONVERSATION</small>
              </div>
              <h3>Consult.</h3>
              <p>Meet the right specialist and bring your questions.</p>
              <span className="path-v5-chapter-arrow">
                03 <i>↗</i>
              </span>
            </article>
            <article className="path-v5-chapter path-v5-coral">
              <div className="path-v5-chapter-meta">
                <b>04</b>
                <small>THE CLARITY</small>
              </div>
              <h3>Understand.</h3>
              <p>Discuss your options and leave with a clear plan.</p>
              <span className="path-v5-chapter-arrow">
                04 <i>↗</i>
              </span>
            </article>
            <article className="path-v5-chapter path-v5-teal">
              <div className="path-v5-chapter-meta">
                <b>05</b>
                <small>THE CONTINUATION</small>
              </div>
              <h3>Continue.</h3>
              <p>Follow the next step and keep your progress moving.</p>
              <span className="path-v5-chapter-arrow">
                05 <i>↗</i>
              </span>
            </article>
          </div>
          <div className="journal-shell path-v5-footer">
            <span>CARE WITH CONTEXT</span>
            <i />
            <small>
              Treatment decisions are made by qualified healthcare professionals
              based on individual clinical assessment. This page is not a
              diagnosis.
            </small>
          </div>
        </section>

  );
}

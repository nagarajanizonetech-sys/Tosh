import React, { useEffect, useState } from "react";
import { STORY_SLIDES } from "../data/landingData";

export function StoryVisualCarousel(): React.JSX.Element {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STORY_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <div
      className="story-about-visual-wrap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="story-about-dots-top" aria-hidden="true" />
      <div className="story-about-dots-bottom" aria-hidden="true" />
      <div className="story-about-frame">
        <div
          className="story-frame-badge quote-badge"
          title="Compassionate Care"
        >
          <span>“</span>
        </div>
        <div
          className="story-frame-badge star-badge"
          title="Clinical Excellence"
        >
          <span>★</span>
        </div>
        <div className="story-frame-img-box">
          {STORY_SLIDES.map((slide, idx) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`story-about-img ${activeIdx === idx ? "active" : ""}`}
              loading={idx === 0 ? "eager" : "lazy"}
            />
          ))}
          <div className="story-frame-gloss" />
        </div>
      </div>
      <div className="story-about-indicators" role="tablist">
        {STORY_SLIDES.map((slide, idx) => (
          <button
            key={idx}
            type="button"
            className={`indicator-dot ${activeIdx === idx ? "active" : ""}`}
            onClick={() => setActiveIdx(idx)}
            title={slide.title}
            aria-label={`View ${slide.title}`}
          />
        ))}
      </div>
    </div>
  );
}


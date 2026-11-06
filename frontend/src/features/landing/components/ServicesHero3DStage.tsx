import React, { useEffect, useState } from "react";
import { CAROUSEL_SERVICES } from "../data/landingData";

export function ServicesHero3DStage({
  activeCategoryKey,
  onSelectCategory,
}: {
  activeCategoryKey: string;
  onSelectCategory: (category: string) => void;
}): React.JSX.Element {
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const activeIndex = Math.max(
    0,
    CAROUSEL_SERVICES.findIndex((s) => s.key === activeCategoryKey)
  );
  const currentData = CAROUSEL_SERVICES[activeIndex] || CAROUSEL_SERVICES[0];

  // Auto-cycle briskly every 2.6 seconds; pauses if hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      const nextIdx = (activeIndex + 1) % CAROUSEL_SERVICES.length;
      onSelectCategory(CAROUSEL_SERVICES[nextIdx].key);
    }, 2600);
    return () => clearInterval(timer);
  }, [activeIndex, onSelectCategory, isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: -y * 6, y: x * 8 });
  };

  const handleMouseLeave = (): void => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="services-hero-3d-stage"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      aria-label="3D Interactive Coverflow Medical Care Showcase"
    >
      <div
        className="s3d-backdrop-aura"
        style={{ background: currentData.accentGlow }}
        aria-hidden="true"
      />

      <div className="s3d-orbit-ring ring-primary" aria-hidden="true">
        <span className="s3d-ring-dot dot-1" />
        <span className="s3d-ring-dot dot-2" />
      </div>
      <div className="s3d-orbit-ring ring-secondary" aria-hidden="true">
        <span className="s3d-ring-dot dot-3" />
      </div>

      <div
        className="s3d-canvas"
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            : undefined,
        }}
      >
        {/* 3D Coverflow Deck: Center card + Left/Right cards peeking ~20% */}
        <div className="s3d-coverflow-deck">
          {CAROUSEL_SERVICES.map((item, idx) => {
            const diff =
              (idx - activeIndex + CAROUSEL_SERVICES.length) %
              CAROUSEL_SERVICES.length;

            let posClass = "card-hidden";
            let handleClick: (() => void) | undefined = undefined;

            if (diff === 0) {
              posClass = "card-center";
            } else if (diff === 1) {
              posClass = "card-right";
              handleClick = () => onSelectCategory(item.key);
            } else if (diff === CAROUSEL_SERVICES.length - 1) {
              posClass = "card-left";
              handleClick = () => onSelectCategory(item.key);
            }

            return (
              <div
                key={item.key}
                className={`s3d-card-item ${posClass}`}
                style={{ borderColor: item.accentBorder }}
                onClick={handleClick}
                role={handleClick ? "button" : undefined}
                tabIndex={handleClick ? 0 : undefined}
                aria-label={item.title}
              >
                <div className="s3d-card-glare" aria-hidden="true" />
                <div className="s3d-image-viewport">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="s3d-hero-img"
                    loading="eager"
                  />
                  {diff === 0 && (
                    <div className="s3d-scan-beam" aria-hidden="true" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Structured Highlight Strip: Centered beneath the cards */}
        <div className="s3d-highlight-strip">
          {currentData.highlights.map((item, idx) => (
            <span key={idx} className="s3d-highlight-pill">
              <i>✦</i> {item}
            </span>
          ))}
        </div>

        {/* 3D Switcher Bar with generous bottom clearance */}
        <div className="s3d-switcher-bar" role="tablist">
          <button
            type="button"
            className={`s3d-switch-btn ${activeCategoryKey === "all" ? "active" : ""}`}
            onClick={() => onSelectCategory("all")}
          >
            <span className="s3d-btn-dot" />
            <span>✦ All Care</span>
          </button>
          <button
            type="button"
            className={`s3d-switch-btn btn-ortho ${activeCategoryKey === "ortho" ? "active" : ""}`}
            onClick={() => onSelectCategory("ortho")}
          >
            <span className="s3d-btn-dot" />
            <span>🦴 Orthopaedics</span>
          </button>
          <button
            type="button"
            className={`s3d-switch-btn btn-skin ${activeCategoryKey === "skin" ? "active" : ""}`}
            onClick={() => onSelectCategory("skin")}
          >
            <span className="s3d-btn-dot" />
            <span>🔬 Skin</span>
          </button>
          <button
            type="button"
            className={`s3d-switch-btn btn-cosmo ${activeCategoryKey === "cosmetology" ? "active" : ""}`}
            onClick={() => onSelectCategory("cosmetology")}
          >
            <span className="s3d-btn-dot" />
            <span>✨ Cosmetology</span>
          </button>
        </div>
      </div>
    </div>
  );
}


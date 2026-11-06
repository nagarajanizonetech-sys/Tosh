import React, { useState } from "react";
import type { RouteNavigate } from "../../types";
import { ALL_CATALOGUE_SERVICES } from "../../data/landingData";
import { Icon } from "../Icon";
import { HeroShareRadial } from "../HeroShareRadial";
import { ServicesHero3DStage } from "../ServicesHero3DStage";
import { AnimatedHeroTitle } from "../AnimatedHeroTitle";

export function ServicesSubpage({ navigate }: { navigate: RouteNavigate }): React.JSX.Element {
  const [serviceCategory, setServiceCategory] = useState<string>("all");
  const [heroCategory, setHeroCategory] = useState<string>("all");
  const [showAllServices, setShowAllServices] = useState<boolean>(false);

const allServices = ALL_CATALOGUE_SERVICES;
    const visibleServices =
      serviceCategory === "all"
        ? allServices
        : allServices.filter((service) => service.category === serviceCategory);
    const categoryInfo: Record<
      string,
      { label: string; kicker: string; description: string }
    > = {
      all: {
        label: "All care pathways",
        kicker: "THE COMPLETE CATALOGUE",
        description:
          "A broader view of the treatments and clinical services listed across TOSH Foundation’s official catalogue.",
      },
      ortho: {
        label: "Orthopaedic care",
        kicker: "BONE · JOINT · MOBILITY",
        description:
          "From joint preservation and replacement to fracture care, rehabilitation and specialist orthopaedic procedures.",
      },
      skin: {
        label: "Skin care",
        kicker: "CLINICAL DERMATOLOGY",
        description:
          "Assessment-led care for skin, pigment, inflammatory, infectious and chronic dermatological concerns.",
      },
      cosmetology: {
        label: "Cosmetology",
        kicker: "AESTHETIC DERMATOLOGY",
        description:
          "Laser, facial, resurfacing and aesthetic treatments planned around skin health and suitability.",
      },
    };
    const activeCategory = categoryInfo[serviceCategory];
    return (
      <main className="subpage services-catalogue-v2">
        <section className="services-pathway-hero">
          <div className="journal-shell services-pathway-grid">
            <div className="services-pathway-copy">
              <span className="journal-kicker">
                <i /> TOSH FOUNDATION / THE CARE PATHWAYS
              </span>
              <span className="services-pathway-index">
                03 / FIND YOUR NEXT STEP
              </span>
              <AnimatedHeroTitle
                line1="Every concern"
                line2="has a pathway."
              />
              <p>
                Explore a considered catalogue of orthopaedic, dermatology and
                cosmetology care—organised to help you arrive with better
                questions.
              </p>
              <button
                className="services-pathway-button"
                onClick={() =>
                  document
                    .getElementById("service-catalogue")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Find a care pathway <Icon n="arrow" s={15} />
              </button>
            </div>
            <ServicesHero3DStage
              activeCategoryKey={heroCategory}
              onSelectCategory={(cat) => setHeroCategory(cat)}
            />
          </div>
        </section>
        <section
          id="service-catalogue"
          className="subpage-section services-page services-catalogue-body"
        >
          <div className="journal-shell">
            <div className="catalogue-section-heading">
              <div>
                <span className="journal-kicker">{activeCategory.kicker}</span>
                <h2>
                  {activeCategory.label}
                  <br />
                  <em>in detail.</em>
                </h2>
              </div>
              <p>{activeCategory.description}</p>
            </div>
            <div className="catalogue-tabs" role="tablist">
              {[
                ["all", "All care"],
                ["ortho", "Orthopaedics"],
                ["skin", "Skin"],
                ["cosmetology", "Cosmetology"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  className={serviceCategory === value ? "active" : ""}
                  onClick={() => {
                    setServiceCategory(value);
                    setShowAllServices(false);
                  }}
                >
                  <span>{label}</span>
                  <b>
                    {value === "all"
                      ? allServices.length
                      : allServices.filter(
                        (service) => service.category === value,
                      ).length}
                  </b>
                </button>
              ))}
            </div>
            <div className="catalogue-results-line">
              <span>
                Showing {Math.min(showAllServices ? visibleServices.length : 20, visibleServices.length)} of {visibleServices.length} catalogue entries
              </span>
              <span>
                Official TOSH Foundation service names and local care
                explanations
              </span>
            </div>
            <div className="catalogue-card-grid">
              {(showAllServices ? visibleServices : visibleServices.slice(0, 20)).map((service, index) => (
                <article
                  className={`catalogue-card ${service.category}`}
                  key={`${service.id}-${index}`}
                >
                  <div className="catalogue-card-top">
                    <span className="catalogue-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="catalogue-badge">{service.badge}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p className="catalogue-card-summary">{service.summary}</p>
                  <div className="catalogue-card-divider" />
                  <ul className="catalogue-highlights">
                    {service.highlights.map((highlight) => (
                      <li key={highlight}>
                        <span className="catalogue-check-bullet">
                          <Icon n="check" s={11} />
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="catalogue-card-action"
                    onClick={() => navigate("/contact")}
                  >
                    <span>Discuss this service</span>
                    <Icon n="arrow" s={13} />
                  </button>
                </article>
              ))}
            </div>
            {visibleServices.length > 20 && (
              <div className="catalogue-see-more-wrap">
                <button
                  type="button"
                  className="catalogue-see-more-btn"
                  onClick={() => setShowAllServices((prev) => !prev)}
                >
                  <span>
                    {showAllServices
                      ? "Show Fewer Services"
                      : `See More Services (${visibleServices.length - 20} more)`}
                  </span>
                  <span className={`see-more-icon ${showAllServices ? "is-expanded" : ""}`}>
                    <Icon n="arrow" s={14} />
                  </span>
                </button>
              </div>
            )}
          </div>
        </section>
        <HeroShareRadial />
      </main>
    );
  }


import React from "react";
import { ALL_CATALOGUE_SERVICES } from "../../data/landingData";
import type { ClinicalService, RouteNavigate, EnquiryFormState } from "../../types";
import { Icon } from "../Icon";
import { Reveal } from "../Reveal";

export interface ServicesSectionProps {
  serviceFilter: string;
  setServiceFilter: (filter: string) => void;
  filteredServices: ClinicalService[];
  setForm: React.Dispatch<React.SetStateAction<EnquiryFormState>>;
  scroll: (id: string) => void;
  navigate: RouteNavigate;
}

export function ServicesSection({
  serviceFilter,
  setServiceFilter,
  filteredServices,
  setForm,
  scroll,
  navigate,
}: ServicesSectionProps): React.JSX.Element {
  return (
        <section id="services" className="journal-section journal-services">
          <div className="journal-shell">
            <div className="services-heading">
              <Reveal>
                <span className="journal-kicker">03 / CLINICAL SERVICES</span>
                <h2>
                  Comprehensive care.
                  <br />
                  <em>Evidence-based excellence.</em>
                </h2>
              </Reveal>
              <Reveal>
                <p>
                  Specialized orthopaedic surgery, clinical dermatology
                  treatments, and advanced laser aesthetics verified directly
                  from TOSH Foundation’s active clinical practice in
                  Tiruchirappalli.
                </p>
              </Reveal>
            </div>

            <div className="services-filter-bar">
              {[
                {
                  id: "all",
                  label: "All Treatments",
                  count: ALL_CATALOGUE_SERVICES.length,
                },
                {
                  id: "ortho",
                  label: "Orthopaedics & Joint Care",
                  count: ALL_CATALOGUE_SERVICES.filter((s) => s.category === "ortho")
                    .length,
                  cls: "tab-ortho",
                },
                {
                  id: "skin",
                  label: "Clinical Dermatology",
                  count: ALL_CATALOGUE_SERVICES.filter((s) => s.category === "skin")
                    .length,
                  cls: "tab-skin",
                },
                {
                  id: "cosmetology",
                  label: "Cosmetology & Laser",
                  count: ALL_CATALOGUE_SERVICES.filter(
                    (s) => s.category === "cosmetology",
                  ).length,
                  cls: "tab-cosmetology",
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`service-filter-btn ${tab.cls || ""} ${serviceFilter === tab.id ? "active" : ""}`}
                  onClick={() => setServiceFilter(tab.id)}
                >
                  <span>{tab.label}</span>
                  <span className="filter-count">{tab.count}</span>
                </button>
              ))}
            </div>

            <div className="services-grid">
              {filteredServices.map((s) => (
                <div key={s.id} className={`service-card ${s.category}`}>
                  <div className="service-card-top">
                    <span className="service-tag">{s.badge}</span>
                    <span className="service-doctor-badge">{s.doctor}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p className="service-summary">{s.summary}</p>
                  <ul className="service-highlights">
                    {s.highlights.map((h) => (
                      <li key={h}>
                        <Icon n="check" s={13} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="service-card-actions">
                    <button
                      type="button"
                      className="service-btn-book"
                      onClick={() => {
                        setForm((prev) => ({
                          ...prev,
                          specialty: s.specialty,
                        }));
                        scroll("contact");
                      }}
                    >
                      Consult Doctor <Icon n="arrow" s={13} />
                    </button>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="service-link-info"
                    >
                      Official info <Icon n="arrow" s={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="services-footer-banner">
              <div>
                <b>Looking for more specialized procedures?</b>
                <p>
                  TOSH Foundation provides over 50+ specialized orthopaedic,
                  surgical, and dermatological services at West Thillai Nagar,
                  Trichy.
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate("/services")}
                className="services-portal-btn"
                style={{ cursor: "pointer", border: "none" }}
              >
                View All Services <Icon n="arrow" s={14} />
              </button>
            </div>
          </div>
        </section>

  );
}

import React from "react";
import type { EnquiryFormState } from "../../types";
import { clinic } from "../../data/landingData";
import { Icon } from "../Icon";
import { Reveal } from "../Reveal";

export interface ContactSectionProps {
  form: EnquiryFormState;
  setForm: React.Dispatch<React.SetStateAction<EnquiryFormState>>;
  status: string;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function ContactSection({
  form,
  setForm,
  status,
  submit,
}: ContactSectionProps): React.JSX.Element {
  return (
        <section id="contact" className="journal-contact">
          <div className="journal-shell contact-grid">
            <Reveal>
              <span className="journal-kicker light">06 / WRITE TO US</span>
              <h2 style={{ color: "ivory" }}>
                Let’s make the
                <br />
                <em>next page clearer.</em>
              </h2>
              <p>
                Have a question or need a consultation? Reach out to TOSH
                Foundation in Tiruchirappalli.
              </p>
              <div className="contact-details">
                <a href={`tel:${clinic.phone.replace(/\D/g, "")}`}>
                  <Icon n="phone" s={17} />
                  {clinic.phone}
                </a>
                <a href={`mailto:${clinic.email}`}>
                  <Icon n="mail" s={17} />
                  {clinic.email}
                </a>
                <a href={clinic.map} target="_blank" rel="noreferrer">
                  <Icon n="pin" s={17} />
                  {clinic.address}
                </a>
              </div>
              <small>
                Opening hours listed by the clinic: Monday–Sunday · 07:30
                AM–08:00 PM
              </small>
            </Reveal>
            <Reveal>
              <form className="journal-form" onSubmit={submit}>
                <div>
                  <b>ENQUIRY FORM</b>
                </div>
                <label>
                  Name
                  <input
                    type="text"
                    maxLength={60}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  Phone
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={13}
                    value={form.phone}
                    onChange={(e) => {
                      const onlyNums = e.target.value.replace(/\D/g, "").slice(0, 13);
                      setForm({ ...form, phone: onlyNums });
                    }}
                    placeholder="Your phone number (digits only)"
                    required
                  />
                </label>
                <label>
                  Preferred specialty
                  <select
                    value={form.specialty}
                    onChange={(e) =>
                      setForm({ ...form, specialty: e.target.value })
                    }
                    required
                  >
                    <option value="">Select one</option>
                    <option>Orthopaedics</option>
                    <option>Dermatology & skin care</option>
                  </select>
                </label>
                <label>
                  Message <i>optional</i>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="How can we help?"
                  />
                </label>
                <button>
                  Send enquiry <Icon n="arrow" s={15} />
                </button>
                {status && <p>{status}</p>}
              </form>
            </Reveal>
          </div>
        </section>

  );
}

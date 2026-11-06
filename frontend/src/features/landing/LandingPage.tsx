import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate as useRouterNavigate } from "react-router-dom";
import "./styles/landing.css";
import type {
  ClinicalService,
  EnquiryFormState,
  LandingPageProps,
} from "./types";
import { CLINICAL_SERVICES, clinic } from "./data/landingData";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { HeroShareRadial } from "./components/HeroShareRadial";
import { InternalPage } from "./components/InternalPage";
import { HeroSection } from "./components/sections/HeroSection";
import { TickerSection } from "./components/sections/TickerSection";
import { StorySection } from "./components/sections/StorySection";
import { SpecialtiesSection } from "./components/sections/SpecialtiesSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { DoctorsSection } from "./components/sections/DoctorsSection";
import { HomeTestimonialsShowcase } from "./components/HomeTestimonialsShowcase";
import { PathwaysSection } from "./components/sections/PathwaysSection";
import { ContactSection } from "./components/sections/ContactSection";

export const LandingPage: React.FC<LandingPageProps> = ({
  loginTarget = "/login",
  onLogin,
  onSubmitEnquiry,
}) => {
  const location = useLocation();
  const routerNavigate = useRouterNavigate();

  const [menu, setMenu] = useState<boolean>(false);
  const [route, setRoute] = useState<string>(() => {
    const raw =
      typeof window === "undefined" ? "/" : window.location.pathname || "/";
    return raw.length > 1 && raw.endsWith("/") ? raw.slice(0, -1) : raw;
  });

  useEffect(() => {
    if (location.pathname) {
      const p =
        location.pathname.length > 1 && location.pathname.endsWith("/")
          ? location.pathname.slice(0, -1)
          : location.pathname;
      setRoute(p);
    }
  }, [location.pathname]);

  const [form, setForm] = useState<EnquiryFormState>({
    name: "",
    phone: "",
    specialty: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");
  const [serviceFilter, setServiceFilter] = useState<string>("all");
  const specialtiesRef = useRef<HTMLDivElement | null>(null);
  const [specialtiesProgress, setSpecialtiesProgress] = useState<number>(0);

  const navigate = (path: string): void => {
    setMenu(false);
    if (path === route) return;
    routerNavigate(path);
    setRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scroll = (id: string): void => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPopState = (): void => setRoute(window.location.pathname || "/");
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const filteredServices = useMemo<ClinicalService[]>(() => {
    if (serviceFilter === "all") {
      const ortho = CLINICAL_SERVICES.find((s) => s.category === "ortho");
      const skin = CLINICAL_SERVICES.find((s) => s.category === "skin");
      const cosmo = CLINICAL_SERVICES.find((s) => s.category === "cosmetology");
      const trio = [ortho, skin, cosmo].filter(Boolean) as ClinicalService[];
      return trio.length === 3 ? trio : CLINICAL_SERVICES.slice(0, 3);
    }
    return CLINICAL_SERVICES.filter((s) => s.category === serviceFilter).slice(0, 3);
  }, [serviceFilter]);

  useEffect(() => {
    const handleScroll = (): void => {
      const el = specialtiesRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalDist = el.offsetHeight - window.innerHeight;
      if (totalDist <= 0) return;
      const scrolled = -rect.top;
      const raw = Math.min(Math.max(scrolled / totalDist, 0), 1);
      let eased = 0;
      if (raw <= 0.12) {
        eased = 0;
      } else if (raw >= 0.88) {
        eased = 1;
      } else {
        const t = (raw - 0.12) / (0.88 - 0.12);
        eased = t * t * (3 - 2 * t);
      }
      setSpecialtiesProgress(eased);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSpecialty = (slideIndex: number): void => {
    const el = specialtiesRef.current;
    if (!el) return;
    const totalDist = el.offsetHeight - window.innerHeight;
    const containerTop = el.getBoundingClientRect().top + window.scrollY;
    const targetY = slideIndex === 0 ? containerTop : containerTop + totalDist;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.specialty)
      return setStatus(
        "Please add your name, phone number and preferred specialty.",
      );
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 13)
      return setStatus(
        "Please enter a valid phone number (10 to 13 digits).",
      );
    if (onSubmitEnquiry) {
      onSubmitEnquiry(form);
      setStatus(
        "Your enquiry was passed to the configured application handler.",
      );
    } else {
      setStatus(
        `This page does not transmit patient information. Please call ${clinic.phone} or email ${clinic.email}.`,
      );
    }
  };

  if (route !== "/" && route !== "/landing") {
    return (
      <div className="journal-page routed-site">
        <SiteHeader
          menu={menu}
          setMenu={setMenu}
          route={route}
          navigate={navigate}
          loginTarget={loginTarget}
          onLogin={onLogin}
        />
        <InternalPage route={route} navigate={navigate} />
        <SiteFooter navigate={navigate} />
      </div>
    );
  }

  return (
    <div className="journal-page">
      <SiteHeader
        menu={menu}
        setMenu={setMenu}
        route={route}
        navigate={navigate}
        loginTarget={loginTarget}
        onLogin={onLogin}
      />
      <main id="home">
        <HeroSection scroll={scroll} />
        <TickerSection />
        <StorySection navigate={navigate} />
        <SpecialtiesSection
          specialtiesRef={specialtiesRef}
          specialtiesProgress={specialtiesProgress}
          goToSpecialty={goToSpecialty}
          scroll={scroll}
        />
        <ServicesSection
          serviceFilter={serviceFilter}
          setServiceFilter={setServiceFilter}
          filteredServices={filteredServices}
          setForm={setForm}
          scroll={scroll}
          navigate={navigate}
        />
        <DoctorsSection navigate={navigate} />
        <HomeTestimonialsShowcase navigate={navigate} />
        <PathwaysSection />
        <ContactSection
          form={form}
          setForm={setForm}
          status={status}
          submit={submit}
        />
        <HeroShareRadial />
      </main>
      <SiteFooter navigate={navigate} />
    </div>
  );
};

export default LandingPage;

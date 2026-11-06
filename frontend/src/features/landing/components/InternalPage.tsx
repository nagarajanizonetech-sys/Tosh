import React from "react";
import type { RouteNavigate } from "../types";
import { StorySubpage } from "./subpages/StorySubpage";
import { SpecialtiesSubpage } from "./subpages/SpecialtiesSubpage";
import { ServicesSubpage } from "./subpages/ServicesSubpage";
import { DoctorsSubpage } from "./subpages/DoctorsSubpage";
import { TestimonialsSubpage } from "./subpages/TestimonialsSubpage";
import { ContactSubpage } from "./subpages/ContactSubpage";

export function InternalPage({
  route,
  navigate,
}: {
  route: string;
  navigate: RouteNavigate;
}): React.JSX.Element {
  if (route === "/story") {
    return <StorySubpage navigate={navigate} />;
  }
  if (route === "/specialties") {
    return <SpecialtiesSubpage navigate={navigate} />;
  }
  if (route === "/services") {
    return <ServicesSubpage navigate={navigate} />;
  }
  if (route === "/doctors") {
    return <DoctorsSubpage navigate={navigate} />;
  }
  if (route === "/testimonials") {
    return <TestimonialsSubpage navigate={navigate} />;
  }
  return <ContactSubpage navigate={navigate} />;
}


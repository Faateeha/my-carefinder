import React from "react";
import { render } from "@testing-library/react";
import Testimonial from "@/app/testimonial";

describe("Testimonial Component", () => {
  it("renders the title correctly", () => {
    const { getByText } = render(<Testimonial />);
    const title = getByText("Testimonials");
    expect(title).toBeInTheDocument();
  });

  it("renders all testimonials", () => {
    const { getByText } = render(<Testimonial />);

    const reviews = [
      "Carefinder has completely transformed the way I find healthcare facilities. It's fast, reliable, and incredibly user-friendly.",
      "The Carefinder app is a lifesaver! I was able to quickly find a hospital near me and book an appointment with ease.",
      "As someone who travels frequently, Carefinder is essential. It helps me find trusted healthcare providers no matter where I am in Nigeria.",
    ];

    reviews.forEach((review) => {
      const reviewElement = getByText(`"${review}"`);
      expect(reviewElement).toBeInTheDocument();
    });
  });

  it("applies AOS animations correctly", () => {
    const { container } = render(<Testimonial />);
    const titleElement = container.querySelector('[data-aos="zoom-in"]');
    const reviewElements = container.querySelectorAll('[data-aos="fade-up"]');

    expect(titleElement).toBeInTheDocument();
    expect(reviewElements.length).toBe(3);
  });
});

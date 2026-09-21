import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll to Services section
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero2.jpg')" }}
      />

      {/* BLACK OVERLAY – BEST VISIBILITY */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50" />

      {/* SOFT BRAND GLOW */}
      <div className="absolute -top-24 right-[-120px] w-[380px] h-[380px] bg-[#6E2BD9]/20 blur-[160px] rounded-full hidden lg:block" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[380px] h-[380px] bg-[#00338D]/20 blur-[160px] rounded-full hidden lg:block" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div
          className={`max-w-4xl transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#9CB7FF] mb-4">
            Digital Transformation Partner
          </p>

          {/* HEADING */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-tight font-extrabold text-white mb-6">
            Engineering scalable
            <br />
            <span className="bg-gradient-to-r from-[#9CB7FF] to-[#C9B8FF] bg-clip-text text-transparent">
              digital solutions
            </span>{" "}
            for enterprises
          </h1>

          {/* DESCRIPTION */}
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mb-8">
            Alokti enables startups and enterprises to build secure, scalable,
            and future-ready digital platforms with enterprise-grade engineering
            and measurable business impact.
          </p>

          {/* CTA */}
          <div className="mb-10">
            <Button
              size="lg"
              variant="outline"
              className="px-7 py-3 rounded-xl border-white/30 text-white hover:bg-white/10 font-semibold"
              onClick={scrollToServices}
            >
              Explore Services
            </Button>
          </div>

          {/* TRUST INDICATORS */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">20+</div>
              <div className="text-xs sm:text-sm text-gray-300">Projects Delivered</div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-white/30" />

            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">Enterprise</div>
              <div className="text-xs sm:text-sm text-gray-300">Grade Engineering</div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-white/30" />

            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">High</div>
              <div className="text-xs sm:text-sm text-gray-300">Client Retention</div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/40 via-black/15 to-transparent z-10" />
    </section>
  );
}

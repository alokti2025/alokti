import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, GraduationCap, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "alokti-internship-popup-v2-seen";

const InternshipPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  const viewInternships = () => {
    dismiss();
    navigate("/career");
  };

  useEffect(() => {
    if (location.pathname === "/career") return;

    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = window.setTimeout(() => setIsOpen(true), 1500);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="internship-popup-title"
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#6B1630] to-[#A61E4D]" />
        <button
          ref={closeButtonRef}
          type="button"
          onClick={dismiss}
          className="absolute right-4 top-5 rounded-lg p-2 text-slate-500 transition hover:bg-rose-50 hover:text-[#6B1630] focus:outline-none focus:ring-2 focus:ring-[#A61E4D]"
          aria-label="Close internship announcement"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="p-7 pt-10 sm:p-10 sm:pt-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6B1630] to-[#A61E4D] text-white shadow-lg">
            <GraduationCap className="h-7 w-7" />
          </div>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#8E1B3E]">Internship opportunities open</p>
          <h2 id="internship-popup-title" className="mt-3 text-3xl font-extrabold leading-tight text-slate-900">
            Learn by building on live projects.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Are you a student or recent graduate ready to gain practical experience? Join Alokti to learn with our team and contribute to real digital products.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button onClick={viewInternships} size="lg" className="rounded-xl bg-gradient-to-r from-[#6B1630] to-[#A61E4D] font-semibold text-white hover:opacity-90">
              Explore internships <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <button type="button" onClick={dismiss} className="rounded-xl px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
              Maybe later
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipPopup;

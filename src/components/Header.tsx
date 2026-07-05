import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const whatsappLink =
    "https://wa.me/6370787125?text=Hello%20Alokti%20Software,%20I%20am%20interested%20in%20your%20services.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200 py-3"
          : ""
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="Alokti logo"
            className="h-12 lg:h-16 w-auto object-contain"
          />
          <span
            className={`text-xl lg:text-2xl font-extrabold tracking-wide ${
              isScrolled
                ? "bg-gradient-to-r from-[#00338D] to-[#6E2BD9] bg-clip-text text-transparent"
                : "text-white"
            }`}
          >
            Alokti
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium text-sm lg:text-base tracking-wide transition-all relative px-2 py-1 rounded-lg ${
                isScrolled
                  ? "text-slate-700 hover:text-[#00338D] hover:bg-slate-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#00338D] after:to-[#6E2BD9] after:transition-all hover:after:w-full`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#00338D] to-[#6E2BD9] hover:opacity-90 text-white font-semibold text-sm lg:text-base px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-3 rounded-xl transition ${
            isScrolled
              ? "text-slate-900 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4 bg-black/80 rounded-b-2xl shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#9CB7FF] font-medium py-3 px-4 rounded-xl hover:bg-white/10 text-base transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00338D] to-[#6E2BD9] text-white font-semibold text-base px-8 py-3 rounded-2xl shadow-lg mt-4 flex items-center gap-2"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Contact Us
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

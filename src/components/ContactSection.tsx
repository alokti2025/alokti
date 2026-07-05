import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const ContactSection = () => {
  const whatsappLink =
    "https://wa.me/916370787125?text=Hello%20Alokti%20Team,%20I%20am%20interested%20in%20your%20services.";

  const founderMeetingLink =
    "https://wa.me/916370787125?text=Hello%20Alokti%20Team,%20I%20would%20like%20to%20schedule%20a%201-to-1%20meeting%20with%20the%20founder.";

  return (
    <section
      id="contact"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Soft Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-gradient-to-r from-[#00338D]/5 to-[#6E2BD9]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-20">

          {/* ================= CONTACT CARD ================= */}
          <div className="rounded-3xl bg-gradient-to-r from-[#00338D] to-[#6E2BD9] px-6 sm:px-10 md:px-16 py-14 text-center shadow-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-medium mb-6">
              Contact Us
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Let’s Build Something{" "}
              <span className="text-[#C9B8FF]">Great Together</span>
            </h2>

            <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-10">
              Have a project in mind or need a reliable technology partner?
              Reach out to Alokti and let’s discuss how we can help you grow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-white text-[#00338D] font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-white/90"
                asChild
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white px-8 py-4 rounded-xl hover:bg-white/10"
                asChild
              >
                <a href="mailto:info@alokti.com">
                  Send Email
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl py-4 text-white">
                <Phone className="w-5 h-5 text-[#C9B8FF]" />
                <span className="text-sm sm:text-base">
                  +91 63707 87125
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl py-4 text-white">
                <Mail className="w-5 h-5 text-[#C9B8FF]" />
                <span className="text-sm sm:text-base">
                   info@alokti.com
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl py-4 text-white">
                <MapPin className="w-5 h-5 text-[#C9B8FF]" />
                <span className="text-sm sm:text-base">
                  Bhubaneswar, India
                </span>
              </div>
            </div>
          </div>

          {/* ================= MEET OUR FOUNDER ================= */}
          <div className="bg-white border border-border rounded-3xl shadow-sm p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Meet Our Founder
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                Leadership behind Alokti Software Solutions
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Founder Image */}
              <div className="flex-shrink-0">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#00338D]/20 shadow-sm">
                  <img
                    src="/Founder.jpeg"
                    alt="Preetipadma Jena - Founder of Alokti"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Founder Content */}
              <div className="text-center md:text-left max-w-xl">
                <h4 className="text-xl font-semibold text-foreground">
                  Preetipadma Jena
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Founder & Director, Alokti Software Solutions
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Driven by a vision to build scalable and dependable digital
                  products, the founder focuses on long-term partnerships,
                  business impact, and delivering technology that truly serves
                  growth.
                </p>

                <a
                  href={founderMeetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00338D] text-white hover:bg-[#00338D]/90 transition-all text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Schedule 1-to-1 Meeting
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

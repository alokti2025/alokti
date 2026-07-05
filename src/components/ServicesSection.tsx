import {
  Globe,
  Smartphone,
  Code,
  Headphones,
  TrendingUp,
  Brain,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with the latest technologies for optimal performance and user experience.",
    color: "text-[#00338D]",
    bgColor: "bg-[#00338D]/10",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android devices.",
    color: "text-[#6E2BD9]",
    bgColor: "bg-[#6E2BD9]/10",
  },
  {
    icon: Code,
    title: "Custom Software Solutions",
    description:
      "Tailored software solutions designed to streamline your business processes and drive operational efficiency.",
    color: "text-[#00338D]",
    bgColor: "bg-[#00338D]/10",
  },
  {
    icon: Brain,
    title: "AI & Automation Solutions",
    description:
      "Intelligent AI-powered systems, chatbots, and workflow automation to improve decision-making, reduce manual effort, and scale operations.",
    color: "text-[#6E2BD9]",
    bgColor: "bg-[#6E2BD9]/10",
  },
  {
    icon: Headphones,
    title: "IT Support",
    description:
      "Comprehensive technical support and maintenance services to keep your systems running smoothly and secure.",
    color: "text-[#00338D]",
    bgColor: "bg-[#00338D]/10",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies including SEO, social media, and PPC campaigns to grow your online presence.",
    color: "text-[#00338D]",
    bgColor: "bg-[#00338D]/10",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative bg-gray-50 overflow-hidden">
      {/* Radial Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#00338D]/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#6E2BD9]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00338D]/10 text-[#00338D] text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Solutions That Drive{" "}
            <span className="bg-gradient-to-r from-[#00338D] to-[#6E2BD9] bg-clip-text text-transparent">
              Growth
            </span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">
            We offer a comprehensive range of digital and AI-driven services to
            help your business thrive in the modern landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

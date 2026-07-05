import { Globe, Smartphone, Code } from "lucide-react";

const projects = [
  {
    title: "Webkart",
    category: "Web Development",
    image: "/image1.png",
    icon: Globe,
  },
  {
    title: "Smart Space",
    category: "Web App",
    image: "/image.png",
    icon: Code,
  },
  {
    title: "DocPro",
    category: "Mobile App",
    image: "/image2.png",
    icon: Smartphone,
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,51,141,0.06),transparent_55%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1.5 rounded-full bg-[#00338D]/10 text-[#00338D] text-sm font-medium mb-3">
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#00338D] to-[#6E2BD9] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            A glimpse of our work—crafted to showcase design, functionality, and real-world impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-sm shadow-sm">
                  <project.icon className="w-4 h-4 text-[#00338D]" />
                  <span className="text-sm font-medium text-gray-900">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Showcase project
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

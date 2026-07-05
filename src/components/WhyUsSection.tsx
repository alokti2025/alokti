import { CheckCircle2, Zap, Users, Clock, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Quality-Driven Development",
    description:
      "We maintain the highest coding standards and best practices to deliver robust, scalable solutions.",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description:
      "Your success is our priority. We work closely with you to understand and exceed your expectations.",
  },
  {
    icon: Zap,
    title: "Modern Technologies",
    description:
      "We leverage cutting-edge tools and frameworks to build future-proof digital solutions.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Reliable project timelines with transparent communication throughout the development process.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Security-first approach ensuring your data and applications are protected against threats.",
  },
  {
    icon: Heart,
    title: "Long-Term Support",
    description:
      "Ongoing maintenance and support to keep your software running smoothly post-launch.",
  },
];

const WhyUsSection = () => {
  return (
    <section
      id="why-us"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Radial Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#00338D]/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#6E2BD9]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#6E2BD9]/10 text-[#6E2BD9] text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We Turn Your Ideas Into{" "}
              <span className="bg-gradient-to-r from-[#00338D] to-[#6E2BD9] bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
              With years of experience and a passion for innovation, we deliver
              software solutions that make a real difference for your business.
              Our team combines technical expertise with creative thinking to
              solve complex challenges.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-[#00338D] mb-1">
                  20+
                </div>
                <div className="text-gray-500 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-[#6E2BD9] mb-1">
                  98%
                </div>
                <div className="text-gray-500 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-[#00338D] mb-1">
                  24/7
                </div>
                <div className="text-gray-500 text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12 sm:mt-0">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00338D]/10 flex items-center justify-center mb-4 group-hover:bg-[#00338D]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#00338D]" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-gradient transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

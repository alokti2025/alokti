import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex D'Webber",
    role: "Founder, Webkart",
    content: "Alokti Software delivered an exceptional e-commerce platform for us. Their attention to detail and commitment to quality exceeded our expectations. Highly recommended!",
    rating: 5,
    avatar: "AJ",
  },
  {
    name: "Hemant Nagarkoti",
    role: "Founder, DocPro",
    content: "The mobile app they developed for our healthcare startup has transformed how we serve our patients. Professional team with excellent communication throughout the project.",
    rating: 5,
    avatar: "HN",
  },
  {
    name: "Amit Patel",
    role: "Director, Smart Space",
    content: "Outstanding work on our Interior design system ! The team understood our requirements perfectly and delivered a solution that has significantly improved our operations.",
    rating: 5,
    avatar: "AP",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#00338D]/5 to-[#6E2BD9]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#6E2BD9]/10 text-[#6E2BD9] text-sm font-medium mb-2">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            What Our Clients <span className="bg-gradient-to-r from-[#00338D] to-[#6E2BD9] bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Don't just take our word for it. Here's what our valued clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative p-6 sm:p-5 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-[#00338D] to-[#6E2BD9] flex items-center justify-center shadow-md">
                  <Quote className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3 mt-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#6E2BD9] text-[#6E2BD9]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00338D] to-[#6E2BD9] flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-display font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

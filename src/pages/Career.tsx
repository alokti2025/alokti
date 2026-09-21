import { FormEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Palette,
  Rocket,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const opportunities = [
  { icon: Code2, title: "Software Development Intern", skills: "React, web fundamentals, APIs, Git" },
  // { icon: Palette, title: "UI/UX Design Intern", skills: "Figma, wireframing, user-centred thinking" },
  // { icon: BriefcaseBusiness, title: "Digital Marketing Intern", skills: "Content, social media, research" },
];

const Career = () => {
  const [submitted, setSubmitted] = useState(false);

  const scrollToApply = () => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });

  const submitApplication = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello Alokti Team, I would like to apply for the internship programme.",
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone")}`,
      `College: ${form.get("college")}`,
      `Area of interest: ${form.get("interest")}`,
      `About me: ${form.get("message")}`,
    ].join("\n");

    setSubmitted(true);
    window.open(`https://wa.me/916370787125?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Helmet>
        <title>Internships | Alokti Software Solutions</title>
        <meta name="description" content="Join Alokti's live-project internship programme and learn with a supportive software team." />
      </Helmet>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main>
          <section className="relative overflow-hidden bg-[#260914] pt-36 pb-24 sm:pt-44 sm:pb-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(166,30,77,0.42),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(107,22,48,0.52),_transparent_40%)]" />
            <div className="relative container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#F7B6C8]">
                  <Rocket className="h-4 w-4" /> Applications are open
                </span>
                <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Start your career on <span className="bg-gradient-to-r from-[#F7B6C8] to-[#FFD3DD] bg-clip-text text-transparent">live projects.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
                  Our internship programme gives students a practical place to learn, contribute, and build work they can be proud to show. You will collaborate with the Alokti team on real digital products—not practice-only assignments.
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" onClick={scrollToApply} className="rounded-xl bg-gradient-to-r from-[#6B1630] to-[#A61E4D] px-7 font-semibold text-white hover:opacity-90">
                    Apply for internship <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <a href="#opportunities" className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
                    Explore opportunities
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 sm:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8E1B3E]">Built for learning</p>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">What you will gain at Alokti</h2>
                <p className="mt-4 text-slate-600">A purposeful internship should give you guidance, meaningful work, and skills that carry into your next opportunity.</p>
              </div>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {[
                  { icon: Rocket, title: "Real product experience", text: "Contribute to live client and product work with clear tasks and practical outcomes." },
                  { icon: Users, title: "Guidance from a team", text: "Learn through feedback, collaboration, and regular support from experienced professionals." },
                  { icon: Lightbulb, title: "Skills you can show", text: "Build your portfolio, confidence, and understanding of modern delivery workflows." },
                ].map((benefit) => (
                  <article key={benefit.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <benefit.icon className="h-10 w-10 text-[#A61E4D]" />
                    <h3 className="mt-5 text-xl font-bold">{benefit.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{benefit.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="opportunities" className="bg-white py-20 sm:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div className="max-w-2xl">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8E1B3E]">Current opportunities</p>
                  <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Find your place in the team</h2>
                </div>
                <p className="max-w-md text-slate-600">Projects and openings can vary. Tell us where you are keen to learn, and we will review your application for the best available fit.</p>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {opportunities.map((opportunity) => (
                  <article key={opportunity.title} className="rounded-2xl border border-slate-200 p-7">
                    <opportunity.icon className="h-9 w-9 text-[#8E1B3E]" />
                    <h3 className="mt-5 text-xl font-bold">{opportunity.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600"><span className="font-semibold text-slate-800">Helpful foundation:</span> {opportunity.skills}</p>
                    <button onClick={scrollToApply} className="mt-6 inline-flex items-center gap-2 font-semibold text-[#8E1B3E] hover:text-[#A61E4D]">Apply for this role <ArrowRight className="h-4 w-4" /></button>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 sm:py-24">
            <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8E1B3E]">Simple and transparent</p>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">How the internship works</h2>
                <div className="mt-8 space-y-6">
                  {[
                    "Send a short application and tell us what you want to learn.",
                    "Our team reviews your interests and current project requirements.",
                    "Shortlisted candidates complete a friendly discussion or small practical task.",
                    "Selected interns are onboarded to a suitable live project with clear goals.",
                  ].map((step, index) => (
                    <div className="flex gap-4" key={step}>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#6B1630] to-[#A61E4D] text-sm font-bold text-white">{index + 1}</span>
                      <p className="pt-1 text-slate-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <aside className="rounded-3xl bg-gradient-to-br from-[#6B1630] to-[#A61E4D] p-8 text-white sm:p-10">
                <GraduationCap className="h-11 w-11 text-[#F7B6C8]" />
                <h3 className="mt-6 text-2xl font-extrabold">Who should apply?</h3>
                <p className="mt-3 text-white/80">Students and recent graduates who are curious, dependable, and ready to learn through real work.</p>
                <ul className="mt-7 space-y-4 text-white/90">
                  {["A genuine interest in your chosen field", "A willingness to ask questions and accept feedback", "A laptop, reliable internet, and time to contribute", "Basic skills are helpful; curiosity and commitment matter most"].map((item) => (
                    <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F7B6C8]" />{item}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </section>

          <section id="apply" className="bg-white py-20 sm:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl sm:p-10">
                <div className="text-center">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8E1B3E]">Take the first step</p>
                  <h2 className="mt-3 text-3xl font-extrabold">Apply for the internship programme</h2>
                  <p className="mt-3 text-slate-600">Complete this short form. It opens WhatsApp with your application ready to send to our team.</p>
                </div>
                <form className="mt-9 grid gap-5 sm:grid-cols-2" onSubmit={submitApplication}>
                  <label className="text-sm font-semibold">Full name<input required name="name" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none ring-[#A61E4D] focus:ring-2" /></label>
                  <label className="text-sm font-semibold">Email address<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none ring-[#A61E4D] focus:ring-2" /></label>
                  <label className="text-sm font-semibold">Phone number<input required name="phone" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none ring-[#A61E4D] focus:ring-2" /></label>
                  <label className="text-sm font-semibold">College / university<input required name="college" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none ring-[#A61E4D] focus:ring-2" /></label>
                  <label className="text-sm font-semibold sm:col-span-2">Area of interest<select required name="interest" defaultValue="" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none ring-[#A61E4D] focus:ring-2"><option value="" disabled>Select an area</option><option>Software Development</option><option>UI/UX Design</option><option>Digital Marketing</option><option>Other</option></select></label>
                  <label className="text-sm font-semibold sm:col-span-2">Why would you like to intern with Alokti?<textarea required name="message" rows={4} className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none ring-[#A61E4D] focus:ring-2" /></label>
                  <div className="sm:col-span-2"><Button type="submit" size="lg" className="w-full rounded-xl bg-gradient-to-r from-[#6B1630] to-[#A61E4D] font-semibold text-white hover:opacity-90"><MessageCircle className="mr-2 h-5 w-5" />Continue on WhatsApp</Button>{submitted && <p className="mt-3 text-center text-sm font-medium text-emerald-700">Your application message is ready in WhatsApp. Please press Send to submit it.</p>}</div>
                </form>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Career;

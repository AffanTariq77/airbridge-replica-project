import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CalendarCheck, Clock, Mail, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/airbridgedevs-info/30min";
const REDIRECT_SECONDS = 5;

const highlights = [
  { icon: Clock, title: "30 minutes", text: "A focused session with a senior strategist." },
  { icon: Target, title: "Free, no obligation", text: "We map your goals before proposing anything." },
  { icon: CalendarCheck, title: "Clear next step", text: "Leave with an executable plan, partner or not." },
];

const BookADemo = () => {
  const navigate = useNavigate();
  const [booked, setBooked] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS);

  // Calendly posts events to the parent window; send the visitor home once a slot is booked
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin === "https://calendly.com" && e.data?.event === "calendly.event_scheduled") setBooked(true);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    if (!booked) return;
    if (secondsLeft === 0) return navigate("/");
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [booked, secondsLeft, navigate]);

  // Match Calendly to the card so it blends in; the left panel replaces its event details
  const embedSrc = `${CALENDLY_URL}?embed_domain=${window.location.hostname}&embed_type=Inline&hide_gdpr_banner=1&hide_event_type_details=1&background_color=ffffff&text_color=222229&primary_color=7c3aed`;

  return (
    <div className="min-h-screen hero-gradient">
      <Header />

      <section className="relative overflow-hidden py-8 lg:py-10">
        {/* Soft brand glows behind the card */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#B32BD1]/20 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-6 max-w-6xl relative">
          <div className="animate-slide-up grid lg:grid-cols-[5fr_7fr] rounded-3xl overflow-hidden bg-white shadow-[0_25px_60px_rgba(39,16,191,0.15)]">
            {/* Brand panel */}
            <div className="relative p-8 lg:p-10 text-white flex flex-col lg:h-[660px]">
              <img
                src="/images/bg-dark-tech.webp"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f0a3c]/95 via-[#2710BF]/85 to-[#B32BD1]/80 pointer-events-none" />

              <div className="relative flex flex-col h-full">
                <span className="inline-block w-fit px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-wider uppercase">
                  Book a Brief
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">Schedule Your Mission Briefing</h1>
                <p className="text-white/80 mb-8">Pick a time that suits you. We will turn your idea into a clear, executable plan.</p>

                <ul className="space-y-5">
                  {highlights.map(({ icon: Icon, title, text }) => (
                    <li key={title} className="flex gap-4">
                      <span className="w-11 h-11 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div>
                        <p className="font-semibold">{title}</p>
                        <p className="text-sm text-white/70">{text}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:info@airbridgedevs.com"
                  className="mt-8 lg:mt-auto pt-6 border-t border-white/15 flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Prefer email? info@airbridgedevs.com
                </a>
              </div>
            </div>

            {/* Calendar */}
            {booked ? (
              <div className="h-[660px] flex flex-col items-center justify-center text-center px-6">
                <div className="w-20 h-20 mb-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CalendarCheck className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Your Briefing Is Booked</h2>
                <p className="text-muted-foreground mb-8 max-w-md">
                  A confirmation is on its way to your inbox. Taking you back to the home page in {secondsLeft}s.
                </p>
                <Button asChild className="btn-gradient px-8 py-5 text-sm font-bold rounded-full uppercase tracking-wider">
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            ) : (
              <iframe src={embedSrc} title="Book a briefing with Airbridge Devs" className="w-full h-[660px] border-0" />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookADemo;

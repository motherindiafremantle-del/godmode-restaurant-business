'use client';

import { useState } from 'react';
import { 
  Play, Sparkles, ChefHat, Tablet, BarChart3, Megaphone, 
  CheckCircle2, ArrowRight, Mail, ExternalLink, ShieldCheck, Zap, 
  Flame, Clock, ChevronRight, Award, Layers
} from 'lucide-react';

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Announcement" className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-slate-950 px-4 py-2 text-center text-xs font-black tracking-wide flex items-center justify-center gap-2 shadow-sm">
        <Sparkles className="w-4 h-4 animate-spin text-slate-950" />
        <span>NEW YOUTUBE SERIES LAUNCHED: Building the Autonomous Restaurant in Public</span>
        <a 
          href="#youtube" 
          className="underline font-extrabold hover:text-white transition-colors ml-1 hidden sm:inline"
        >
          Watch Episode 1 →
        </a>
      </aside>

      {/* 2. NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20">
              <Zap className="w-5 h-5 fill-slate-950" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                GodMode <span className="text-amber-400 font-medium text-xs sm:text-sm">Restaurant Business</span>
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-400">
            <a href="#youtube" className="hover:text-amber-400 transition-colors">YouTube Channel</a>
            <a href="#features" className="hover:text-amber-400 transition-colors">The 4 Pillars</a>
            <a href="#casestudy" className="hover:text-amber-400 transition-colors">Mother India Case Study</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:rikki@godmoderestaurantbusiness.com"
              className="hidden sm:inline-flex text-xs text-slate-300 hover:text-white font-medium"
            >
              rikki@godmoderestaurantbusiness.com
            </a>
            <a
              href="#youtube"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md shadow-red-600/20 active:scale-95"
            >
              <YouTubeIcon className="w-4 h-4" />
              <span>Subscribe</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Field-Tested in a Real High-Volume Restaurant</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
            The Autonomous AI Operating System for <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">Modern Restaurants</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal">
            We stopped relying on broken third-party tablet chaos and manual spreadsheets. Here is how we engineered autonomous AI agents to run marketing, live kitchen displays, table ordering, and real-time daily P&amp;L.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <a
              href="#youtube"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-amber-500/20 active:scale-95 transition-all min-h-[48px]"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Watch the Builds on YouTube</span>
            </a>
            <a
              href="#waitlist"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm px-6 py-3.5 rounded-2xl active:scale-95 transition-all min-h-[48px]"
            >
              <span>Get the Free Blueprints</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">100%</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Autonomous P&amp;L Tracking</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white">0s</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Kitchen Display Lag</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">25+ Yrs</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Historical Data Models</div>
            </div>
            <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/60 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white">1 Hub</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Total Floor &amp; Kitchen Sync</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. YOUTUBE CHANNEL SPOTLIGHT SECTION */}
      <section id="youtube" className="py-20 px-4 sm:px-8 bg-slate-900/40 border-t border-slate-800/80">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest">
              <YouTubeIcon className="w-4 h-4" />
              <span>Official YouTube Channel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Watch Us Build GodMode in Public
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              No generic theory or dropshipping fluff. We film inside a real commercial kitchen, showing the code, hardware, AI workflows, and cost breakdowns.
            </p>
          </div>

          {/* YouTube Video Container Mockup */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl max-w-4xl mx-auto aspect-video flex flex-col items-center justify-center p-8 group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10" />
            
            {/* Background Aesthetic Glow */}
            <div className="absolute w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-20 text-center space-y-4 max-w-md">
              <div className="w-20 h-20 rounded-full bg-red-600/90 hover:bg-red-500 flex items-center justify-center text-white mx-auto shadow-2xl shadow-red-600/40 transition-transform group-hover:scale-110 cursor-pointer">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-extrabold text-red-400 tracking-wider">Episode 1 Premiering Soon</span>
                <h3 className="text-xl sm:text-2xl font-black text-white">How We Replaced 5 Delivery Tablets With One AI Hub</h3>
              </div>
              <p className="text-xs text-slate-400">
                Subscribe now so you never miss the upcoming episodes, architecture teardowns, and free source code releases.
              </p>
              <a
                href="https://www.youtube.com/@GodModeRestaurantBusiness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-lg shadow-red-600/30"
              >
                <YouTubeIcon className="w-4 h-4" />
                <span>Subscribe on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Upcoming Video Topics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto pt-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-amber-400">EPISODE 02</div>
              <h4 className="font-bold text-white text-sm">Automating $5/Day Google &amp; Meta Ads That Actually Drive Covers</h4>
              <p className="text-xs text-slate-400">How our AI marketing bots monitor cost-per-click, pause bad ads, and sync local weekly specials.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-amber-400">EPISODE 03</div>
              <h4 className="font-bold text-white text-sm">Why Commercial Restaurant POS Systems Fail (And How to Fix Them)</h4>
              <p className="text-xs text-slate-400">Building dedicated split channels: Table ordering with guest pax vs phone &amp; walk-in takeaway.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-amber-400">EPISODE 04</div>
              <h4 className="font-bold text-white text-sm">Real-Time Daily P&amp;L: Seeing Food Cost &amp; Wages Every Morning</h4>
              <p className="text-xs text-slate-400">Connecting POS sales to wage rosters and supplier invoices for 100% truthful profit visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 4 PILLARS OF GODMODE */}
      <section id="features" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>Complete Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            The 4 Core Pillars of GodMode Hub
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A cohesive operating system built from the ground up to solve the friction of real kitchen and floor operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pillar 1: Kitchen & Expediter Pass */}
          <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <ChefHat className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Live Kitchen Display &amp; Expediter Pass</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No paper ticket jams or lost orders. Full real-time synchronization with persistent audio bells, instant iPad 1-tap activation, and a dedicated packing screen with container checklists that clears tickets without touching billing tabs.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-latency Firestore snapshot synchronization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dedicated Packer Station with 7-second undo protection</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Truthful audio state resolver (handles iOS autoplay restrictions)</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Waiter & Floor POS */}
          <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              <Tablet className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Waiter Mobile &amp; Counter POS Fleet</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designed specifically for fast restaurant service on phones and tablets. Clean split channels for Table Dine-In (with guest counts) vs Walk-in/Phone takeaway with customer details.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Responsive multi-column grids on wide iPads &amp; touch carousels</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full banquet &amp; value pack multi-step modifier customizers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fast PIN authentication with 30-day session persistence</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Real-Time Financials & P&L */}
          <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Real-Time Daily P&amp;L &amp; Cost Intelligence</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Stop waiting 3 months for your accountant to tell you if you made money. Live daily sales rollups, food COGS calculations, wage percentages, and multi-year comparative analytics at your fingertips.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live prime cost tracking (Labor % + Food Cost %)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Integrated multi-year historical benchmarks (2015–2026)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily shift takings breakdown with cash &amp; card reconciliation</span>
              </li>
            </ul>
          </div>

          {/* Pillar 4: Autonomous Marketing */}
          <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
              <Megaphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Autonomous Local Marketing Engine</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              AI agents running local discovery. Programmatic Google Ads bidding with automated negative keyword filters, Meta social audience syncing, and Google Business Profile weekly specials syndication.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Auto-monitored cost-per-click and smart budget caps</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct CRM-to-audience sync for high-converting locals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Reputation and automated feedback routing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. CASE STUDY: MOTHER INDIA FREMANTLE */}
      <section id="casestudy" className="py-20 px-4 sm:px-8 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Real World Case Study</span>
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              Tested Nightly at Mother India Fremantle
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Mother India is an iconic, high-volume Indian restaurant in Fremantle, Western Australia. During peak dinner service on Friday and Saturday nights, hundreds of curries, banquets, and takeaways fly out the door simultaneously.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every feature of GodMode Hub was invented, refined, and battle-hardened in this high-pressure environment. If a screen isn't legible from 2 meters away in steam and heat, or if a button is too small for greasy fingers, it doesn't survive here.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Fremantle, WA</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Dinner Shifts 5:00 PM – 10:00 PM</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-80 p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 shadow-xl">
            <h3 className="font-extrabold text-sm text-white">The Results:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white">Zero Tablet Jams:</strong>
                  <p className="text-slate-400">All customer channels feed directly to one kitchen screen.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white">100% Accuracy on Packs:</strong>
                  <p className="text-slate-400">Banquet &amp; Value Pack modifiers enforced at order time.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white">Truthful Daily P&amp;L:</strong>
                  <p className="text-slate-400">Owners know true margins every single morning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LEAD CAPTURE / WAITLIST SECTION */}
      <section id="waitlist" className="py-24 px-4 sm:px-8 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Mail className="w-4 h-4" />
            <span>Join the Insider Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Get the Architecture Blueprints &amp; Video Alerts
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Drop your email below to receive our full open-source scripts, hardware setups, and early notifications when new episodes drop on YouTube.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 max-w-md mx-auto space-y-1">
            <div className="font-extrabold text-sm">🎉 You're on the insider list!</div>
            <p className="text-xs text-emerald-400/80">We'll notify you as soon as our next YouTube episode drops.</p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-6 py-3.5 rounded-xl transition-all shadow-md shadow-amber-500/20 shrink-0"
            >
              Get Blueprints
            </button>
          </form>
        )}
      </section>

      {/* 8. FOOTER */}
      <footer id="contact" className="mt-auto bg-slate-950 border-t border-slate-900 px-4 sm:px-8 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-extrabold text-white text-sm">GodMode Restaurant Business</div>
            <p className="text-slate-500">Autonomous AI systems for high-volume hospitality.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a
              href="mailto:rikki@godmoderestaurantbusiness.com"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              rikki@godmoderestaurantbusiness.com
            </a>
            <a
              href="https://www.youtube.com/@GodModeRestaurantBusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-bold transition-colors"
            >
              <YouTubeIcon className="w-4 h-4" />
              <span>YouTube Channel</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900/80 text-center text-slate-600 text-[11px]">
          © {new Date().getFullYear()} GodMode Restaurant Business. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

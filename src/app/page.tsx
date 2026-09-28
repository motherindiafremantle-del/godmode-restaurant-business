'use client';

import { useState } from 'react';
import { 
  Play, Sparkles, Store, LineChart, Star, Lock, Share2, 
  Users, PackageSearch, Gift, Wand2, Cpu, ArrowRight, Mail, 
  ExternalLink, CheckCircle2, XCircle, Zap, ShieldCheck, 
  Layers, ChevronRight, BarChart3, Clock, Flame
} from 'lucide-react';

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const TEN_HUBS = [
  {
    id: 1,
    title: "1. Restaurant Operations",
    badge: "Core Operations",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: Store,
    color: "text-blue-400",
    summary: "Live POS, Waiter Fleet, Kitchen Display (KDS) & Expediter Pass.",
    replaces: "Toast / Square / Lightspeed ($200–$500/mo)",
    features: [
      "Fast Touch POS & dedicated Waiter Mobile app",
      "Real-time Kitchen Display with iPad 1-tap PIN login",
      "Expediter Packer Station with container checklists",
      "Direct online ordering with zero commissions"
    ]
  },
  {
    id: 2,
    title: "2. Advertising & Analytics",
    badge: "Revenue Growth",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    icon: LineChart,
    color: "text-orange-400",
    summary: "Automated Google Ads, Meta Campaigns & GA4 ROI Attribution.",
    replaces: "Digital Marketing Agency ($1,000–$2,500/mo)",
    features: [
      "Autonomous budget monitoring & auto-pause on bleeding ads",
      "Dynamic negative keyword protection for high-intent search",
      "Direct ROAS & Cost-Per-Acquisition attribution",
      "High-value postal code targeting"
    ]
  },
  {
    id: 3,
    title: "3. Reputation Hub",
    badge: "Brand Trust",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    icon: Star,
    color: "text-emerald-400",
    summary: "Google Reviews, TripAdvisor, and Facebook Inbox Auto-Sync.",
    replaces: "Birdeye / Podium ($300–$500/mo)",
    features: [
      "Instant review webhook sync from Google & Facebook",
      "AI-crafted contextual review responses",
      "Negative review alert triggers for floor managers",
      "Automated post-dining feedback SMS dispatch"
    ]
  },
  {
    id: 4,
    title: "4. Accounting Hub",
    badge: "Financial Control",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    icon: Lock,
    color: "text-indigo-400",
    summary: "Daily Sales, Live Prime Costs, Food COGS & Historical Benchmarks.",
    replaces: "Restaurant365 / Bookkeeper ($400–$800/mo)",
    features: [
      "Daily automated profit & loss calculation every morning",
      "Real-time Prime Cost tracking (Labor % + Food Cost %)",
      "Multi-year comparative financial models (2015–2026)",
      "Daily shift cash & card takings reconciliation"
    ]
  },
  {
    id: 5,
    title: "5. Social Media Hub",
    badge: "Organic Reach",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    icon: Share2,
    color: "text-pink-400",
    summary: "AI Post Creator, Visual Content Scheduling & Meta Graph Publishing.",
    replaces: "Hootsuite / Buffer ($100–$250/mo)",
    features: [
      "Multi-platform automated post scheduling",
      "AI dish caption generator with trending hashtags",
      "Direct Meta Graph API auto-publishing",
      "Special event and holiday marketing calendars"
    ]
  },
  {
    id: 6,
    title: "6. HR & Staff",
    badge: "Workforce",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    icon: Users,
    color: "text-teal-400",
    summary: "Staff Directory, PIN Security, Timesheets & Wage Estimations.",
    replaces: "7shifts / Deputy ($150–$350/mo)",
    features: [
      "Encrypted staff PIN management with role-based permissions",
      "Timesheet entry and shift logging",
      "Real-time wage cost forecasting against sales",
      "Staff attendance and hourly labor percentage tracking"
    ]
  },
  {
    id: 7,
    title: "7. Inventory & Suppliers",
    badge: "Cost Reduction",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    icon: PackageSearch,
    color: "text-amber-400",
    summary: "Real-Time Stock Tracking, Portion Costs & Automated Purchase Orders.",
    replaces: "MarketMan / Craftable ($250–$450/mo)",
    features: [
      "Live ingredient stocktake with barcode & mobile entry",
      "Automated low-stock threshold notifications",
      "Direct supplier purchase order generation",
      "Waste tracking and recipe cost yields"
    ]
  },
  {
    id: 8,
    title: "8. Customer CRM",
    badge: "Retention",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: Gift,
    color: "text-purple-400",
    summary: "VIP Points, Automated SMS Win-Back & Lifetime Spending Segmentation.",
    replaces: "Klaviyo / Mailchimp ($200–$400/mo)",
    features: [
      "Customer lifetime value (LTV) and visit frequency tiers",
      "Automated SMS re-engagement for lapsed regulars",
      "Birthday & VIP loyalty rewards engine",
      "Direct phone number audience syncing"
    ]
  },
  {
    id: 9,
    title: "9. AI Campaign Studio",
    badge: "Creative Engine",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    icon: Wand2,
    color: "text-rose-400",
    summary: "Generative AI Ad Gurus for Google, Meta, and Print Menus.",
    replaces: "Freelance Copywriters & Designers ($500–$1,000/mo)",
    features: [
      "Automated high-converting headline & ad copy generation",
      "Seasonal menu promotion builder",
      "Print-ready promotional PDF generator",
      "A/B test creative variant testing"
    ]
  },
  {
    id: 10,
    title: "10. God-Like Command Center",
    badge: "Master Intelligence",
    badgeColor: "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30",
    icon: Cpu,
    color: "text-amber-400",
    summary: "The Central Multi-Agent Brain Orchestrating All 9 Hubs in Real Time.",
    replaces: "Hours of daily manual management",
    features: [
      "24/7 background agent execution and anomaly detection",
      "Cross-hub intelligence (Ads sync with Table Occupancy & Stock)",
      "Daily executive audio & text briefings for owners",
      "100% self-hosted open-cloud architecture"
    ]
  }
];

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
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Announcement" className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-slate-950 px-4 py-2 text-center text-xs font-black tracking-wide flex items-center justify-center gap-2 shadow-sm">
        <Sparkles className="w-4 h-4 animate-spin text-slate-950" />
        <span>YOUTUBE LAUNCH: Watch Us Build The 10 Autonomous Hubs In Public</span>
        <a 
          href="#youtube" 
          className="underline font-extrabold hover:text-white transition-colors ml-1 hidden sm:inline"
        >
          Watch Episode 1 →
        </a>
      </aside>

      {/* 2. NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20">
              <Zap className="w-5 h-5 fill-slate-950" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                GodMode <span className="text-amber-400 font-medium text-xs sm:text-sm">Hub</span>
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-400">
            <a href="#hubs" className="hover:text-amber-400 transition-colors">The 10 Hubs</a>
            <a href="#comparison" className="hover:text-amber-400 transition-colors">GodMode vs Legacy POS</a>
            <a href="#youtube" className="hover:text-amber-400 transition-colors">YouTube Channel</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:rikki@godmoderestaurantbusiness.com"
              className="hidden lg:inline-flex text-xs text-slate-400 hover:text-white font-medium"
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
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>The 10-Hub Autonomous Enterprise Operating System</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
            One Master Brain. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">10 Autonomous Hubs.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal">
            Legacy POS systems only cover orders and cash. <strong>GodMode Hub</strong> replaces 10 expensive, disconnected SaaS platforms with one autonomous AI architecture running your operations, ads, reputation, accounting, and staff 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <a
              href="#hubs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-amber-500/20 active:scale-95 transition-all min-h-[48px]"
            >
              <span>Explore The 10 Hubs</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#youtube"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm px-6 py-3.5 rounded-2xl active:scale-95 transition-all min-h-[48px]"
            >
              <YouTubeIcon className="w-4 h-4 text-red-500" />
              <span>Watch The YouTube Series</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">10 Hubs</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Unified Under 1 Master Brain</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white">$2,500+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Saved Monthly in Subscriptions</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">24/7</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Autonomous Agent Execution</div>
            </div>
            <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/60 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white">0%</div>
              <div className="text-xs text-slate-400 font-medium mt-1">3rd-Party App Commissions</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 10 HUBS SHOWCASE */}
      <section id="hubs" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Cpu className="w-4 h-4" />
            <span>Complete Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The 10 Pillars of GodMode Hub
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Every department of a commercial restaurant, unified into specialized autonomous hubs that communicate with each other in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEN_HUBS.map(hub => {
            const Icon = hub.icon;
            const isGodMode = hub.id === 10;

            return (
              <div
                key={hub.id}
                className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between transition-all hover:scale-[1.01] ${
                  isGodMode 
                    ? "bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-950 border-amber-500/40 ring-1 ring-amber-500/20 md:col-span-2 lg:col-span-3" 
                    : "bg-slate-900/70 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className={`w-11 h-11 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center font-bold ${hub.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${hub.badgeColor}`}>
                      {hub.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{hub.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{hub.summary}</p>
                  </div>

                  <div className="text-[11px] font-mono text-slate-400 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 flex items-center justify-between">
                    <span className="text-slate-500">Replaces:</span>
                    <span className="font-semibold text-amber-400/90">{hub.replaces}</span>
                  </div>

                  <ul className={`space-y-2 text-xs text-slate-300 pt-1 ${isGodMode ? "grid sm:grid-cols-2 gap-x-6 gap-y-2" : ""}`}>
                    {hub.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/60 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Hub #{hub.id}</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Autonomous
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. GODMODE VS LEGACY POS: THE COMPARISON TABLE */}
      <section id="comparison" className="py-24 px-4 sm:px-8 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Architectural Reality Check</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              GodMode Hub vs The Fragmented Legacy Stack
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Why traditional POS systems (Toast, Square, Lightspeed) only solve 10% of a restaurant's operational pain.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 border-b border-slate-800 text-slate-300 font-bold">
                <tr>
                  <th className="p-4 sm:p-5">Capability / Department</th>
                  <th className="p-4 sm:p-5 text-slate-400">Traditional Stack (Toast + 9 Add-ons)</th>
                  <th className="p-4 sm:p-5 text-amber-400 bg-amber-500/10 font-black">⚡ GodMode Hub (All 10 Hubs)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">POS, Kitchen &amp; Waiter Fleet</td>
                  <td className="p-4 sm:p-5 text-slate-400">Toast / Square / Lightspeed (\$200–\$500/mo)</td>
                  <td className="p-4 sm:p-5 bg-amber-500/5 font-semibold text-emerald-400">✅ Hub 1: Restaurant Operations (Included)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">Google &amp; Meta Ads Automation</td>
                  <td className="p-4 sm:p-5 text-slate-400">Digital Marketing Agency (\$1,000–\$2,500/mo)</td>
                  <td className="p-4 sm:p-5 bg-amber-500/5 font-semibold text-emerald-400">✅ Hub 2: Advertising &amp; Analytics (Autonomous)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">Review &amp; Reputation Management</td>
                  <td className="p-4 sm:p-5 text-slate-400">Birdeye / Podium (\$300–\$500/mo)</td>
                  <td className="p-4 sm:p-5 bg-amber-500/5 font-semibold text-emerald-400">✅ Hub 3: Reputation Hub (AI Sync)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">Daily P&amp;L &amp; Prime Cost Intelligence</td>
                  <td className="p-4 sm:p-5 text-slate-400">Restaurant365 or Manual Bookkeeper (\$400–\$800/mo)</td>
                  <td className="p-4 sm:p-5 bg-amber-500/5 font-semibold text-emerald-400">✅ Hub 4: Accounting Hub (Daily Morning P&amp;L)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">Social Media Publishing &amp; Content</td>
                  <td className="p-4 sm:p-5 text-slate-400">Hootsuite / Buffer (\$100–\$250/mo)</td>
                  <td className="p-4 sm:p-5 bg-amber-500/5 font-semibold text-emerald-400">✅ Hub 5: Social Media Hub (Auto-Graph API)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">Staff Timesheets &amp; Rostering</td>
                  <td className="p-4 sm:p-5 text-slate-400">7shifts / Deputy (\$150–\$350/mo)</td>
                  <td className="p-4 sm:p-5 bg-amber-500/5 font-semibold text-emerald-400">✅ Hub 6: HR &amp; Staff (Encrypted PINs)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">Stocktake &amp; Recipe Yields</td>
                  <td className="p-4 sm:p-5 text-slate-400">MarketMan / Craftable (\$250–\$450/mo)</td>
                  <td className="p-4 sm:p-5 bg-amber-500/5 font-semibold text-emerald-400">✅ Hub 7: Inventory &amp; Suppliers (Yields &amp; POs)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">Customer VIP Points &amp; SMS</td>
                  <td className="p-4 sm:p-5 text-slate-400">Klaviyo / Mailchimp (\$200–\$400/mo)</td>
                  <td className="p-4 sm:p-5 bg-amber-500/5 font-semibold text-emerald-400">✅ Hub 8: Customer CRM (SMS &amp; VIP Points)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">Promotional Graphics &amp; Copy</td>
                  <td className="p-4 sm:p-5 text-slate-400">Freelancers / Agencies (\$500/mo)</td>
                  <td className="p-4 sm:p-5 bg-amber-500/5 font-semibold text-emerald-400">✅ Hub 9: AI Campaign Studio (Ad Gurus &amp; Flyers)</td>
                </tr>
                <tr className="bg-amber-500/10 font-bold">
                  <td className="p-4 sm:p-5 text-amber-300">Total Monthly Cost</td>
                  <td className="p-4 sm:p-5 text-red-400 line-through">\$2,500 – \$5,500+ Every Month</td>
                  <td className="p-4 sm:p-5 text-emerald-400 text-sm font-black">All 10 Hubs In One Autonomous OS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. YOUTUBE CHANNEL SPOTLIGHT */}
      <section id="youtube" className="py-24 px-4 sm:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest">
              <YouTubeIcon className="w-4 h-4" />
              <span>Official YouTube Channel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Watch The 10 Hubs Built in Public
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We film the entire engineering, code teardowns, hardware setups, and real commercial kitchen deployments step-by-step.
            </p>
          </div>

          {/* YouTube Video Container Mockup */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl max-w-4xl mx-auto aspect-video flex flex-col items-center justify-center p-8 group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10" />
            <div className="absolute w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-20 text-center space-y-4 max-w-md">
              <div className="w-20 h-20 rounded-full bg-red-600/90 hover:bg-red-500 flex items-center justify-center text-white mx-auto shadow-2xl shadow-red-600/40 transition-transform group-hover:scale-110 cursor-pointer">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-extrabold text-red-400 tracking-wider">Episode 1 Premiering Soon</span>
                <h3 className="text-xl sm:text-2xl font-black text-white">Why 10 Separate Apps Are Killing Your Restaurant Margins</h3>
              </div>
              <p className="text-xs text-slate-400">
                Subscribe to @GodModeRestaurantBusiness to get notified as each hub blueprint and video breakdown is released.
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
        </div>
      </section>

      {/* 7. LEAD CAPTURE / INSIDER BLUEPRINT */}
      <section id="contact" className="py-24 px-4 sm:px-8 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Mail className="w-4 h-4" />
            <span>Direct Channel &amp; Insider Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Get the Architecture Blueprints &amp; Open-Source Code
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Drop your email below to receive the technical architecture diagrams, hardware lists, and direct notifications for new hub releases.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 max-w-md mx-auto space-y-1">
            <div className="font-extrabold text-sm">🎉 You're on the insider list!</div>
            <p className="text-xs text-emerald-400/80">We'll send the 10-Hub blueprints straight to your inbox.</p>
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
      <footer className="mt-auto bg-slate-950 border-t border-slate-900 px-4 sm:px-8 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-extrabold text-white text-sm">GodMode Hub</div>
            <p className="text-slate-500">The 10-Hub Autonomous Enterprise Operating System for Restaurants.</p>
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

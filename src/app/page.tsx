'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Store, LineChart, Star, Lock, Share2, 
  Users, PackageSearch, Gift, Wand2, Monitor, 
  ArrowRight, Mail, ExternalLink, CheckCircle2, 
  AlertCircle, ShieldCheck,
  Menu, X, ArrowUpRight, Check
} from 'lucide-react';

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// Unified 10 Hubs Definition with strict separation of software build vs. integration account status
const TEN_HUBS = [
  {
    id: 1,
    title: "1. Restaurant Operations",
    category: "operations",
    icon: Store,
    summary: "Kitchen Display (KDS), Waiter Floor Ordering & Order Expediting.",
    builtStatus: "Built & Live",
    integrationStatus: "Internal Floor Fleet (No 3rd-party setup)",
    whatItDoesToday: "Routes dine-in and online tickets across live 3-column kitchen screens, waiter mobile pads, and packing stations with PIN-based station login.",
    boundaryNote: "Operates internal kitchen and floor workflows. Customer online checkout and bank payment terminals remain separate.",
    dataShared: "Streams ticket counts, table turn times, and order volume to Accounting and CRM."
  },
  {
    id: 2,
    title: "2. Advertising & Analytics",
    category: "marketing",
    icon: LineChart,
    summary: "Google Ads, Meta Ads & Google Analytics 4 (GA4) Performance.",
    builtStatus: "Built & Live",
    integrationStatus: "Requires Restaurant Google & Meta Ad Accounts",
    whatItDoesToday: "Aggregates live spend, clicks, conversion revenue, and blended ROAS across Google Search and Meta Instagram/Facebook campaigns.",
    boundaryNote: "Monitors and reports advertising metrics. Ad spend and campaign approvals remain under direct operator control.",
    dataShared: "Supplies 30-day historical conversion figures to Hub 9 (AI Campaign Studio)."
  },
  {
    id: 3,
    title: "3. Reputation Hub",
    category: "marketing",
    icon: Star,
    summary: "Customer Reviews Ingestion & AI Draft Response Assistant.",
    builtStatus: "Built & Live",
    integrationStatus: "Facebook Connected · Google Business OAuth Pending",
    whatItDoesToday: "Pulls customer ratings from Meta Facebook Graph API, highlights negative feedback for manager dispute, and drafts polite owner replies using Gemini AI.",
    boundaryNote: "AI drafts are recommendations only. All review responses require human manager approval before posting.",
    dataShared: "Alerts restaurant management to food or service feedback trends."
  },
  {
    id: 4,
    title: "4. Accounting Hub",
    category: "finance",
    icon: Lock,
    summary: "Daily Sales Takings, Food COGS & 11-Year Historical P&L.",
    builtStatus: "Built & Live",
    integrationStatus: "Self-Contained (11 Years of Historical Data)",
    whatItDoesToday: "Calculates daily gross margins, weekly wage-to-sales ratios, and tracks financial performance against historical fiscal benchmarks (2015–2026).",
    boundaryNote: "Management accounting model. Does not replace statutory tax filing or primary banking software.",
    dataShared: "Takes sales summaries from Operations and wage hours from HR to compute Prime Cost."
  },
  {
    id: 5,
    title: "5. Social Media Hub",
    category: "marketing",
    icon: Share2,
    summary: "AI Caption Creator, Post Scheduling & Meta Graph Publishing.",
    builtStatus: "Built & Live",
    integrationStatus: "Meta Facebook & Instagram Connected · Google Profile Pending",
    whatItDoesToday: "Turns rough owner kitchen notes into polished social posts with hashtags and emojis using Gemini AI, with photo attachments and scheduling calendar.",
    boundaryNote: "Drafting and dispatch tool. Publishing controls require entered content before activating.",
    dataShared: "Shares scheduled promotional dates with marketing calendar."
  },
  {
    id: 6,
    title: "6. HR & Staff Hub",
    category: "operations",
    icon: Users,
    summary: "Staff Directory, PIN Security, Weekly Rosters & Staff SMS.",
    builtStatus: "Built & Live",
    integrationStatus: "Staff Directory Live · Twilio SMS Account Connected",
    whatItDoesToday: "Manages employee records, assigns encrypted PINs for floor tablets, schedules shifts by day, and dispatches urgent roster updates via Twilio SMS.",
    boundaryNote: "Roster planning and communication. Formal payroll calculation is exported to accounting.",
    dataShared: "Provides active staff names to shift rosters and logged labor hours to Accounting."
  },
  {
    id: 7,
    title: "7. Inventory & Suppliers Hub",
    category: "operations",
    icon: PackageSearch,
    summary: "Stock Tracking, Deliveries, Waste Logs & Magic-Link Stocktaking.",
    builtStatus: "Built & Live",
    integrationStatus: "Stock Database Live · COGS Marked Pending Invoices",
    whatItDoesToday: "Tracks raw ingredients, logs supplier deliveries and kitchen waste, and generates password-free mobile links for staff to count stock on their phones.",
    boundaryNote: "COGS calculations remain strictly marked 'Pending Data Input' until verified purchase invoices and unit costs are entered.",
    dataShared: "Feeds ingredient valuation into monthly food cost percentages."
  },
  {
    id: 8,
    title: "8. Customer CRM Hub",
    category: "marketing",
    icon: Gift,
    summary: "Customer Profiles, VIP Loyalty Tiers & Compliant SMS Campaigns.",
    builtStatus: "Built & Live",
    integrationStatus: "Customer Database Live · Twilio SMS Connected",
    whatItDoesToday: "Compiles order frequency and recency from customer orders, segments frequent diners, enforces marketing opt-in compliance, and sends promotional SMS.",
    boundaryNote: "Direct SMS marketing requires explicit customer opt-in recorded at checkout.",
    dataShared: "Reads customer order history to identify VIP tiers and calculate repeat visit rates."
  },
  {
    id: 9,
    title: "9. AI Campaign Studio",
    category: "marketing",
    icon: Wand2,
    summary: "Gemini AI Ad Creator Grounded in 30-Day Performance Data.",
    builtStatus: "Built & Live",
    integrationStatus: "Gemini 2.5 API Connected · Requires Ad Account IDs",
    whatItDoesToday: "Feeds actual 30-day Google and Meta ad metrics into Google Gemini to write high-converting headlines, ad copy, and promotional flyer themes.",
    boundaryNote: "Generates creative copy for human review. Does not autonomously alter live ad budgets without confirmation.",
    dataShared: "Uses performance inputs from Hub 2 (Advertising) to ground AI generation in real data."
  },
  {
    id: 10,
    title: "10. Command Center",
    category: "operations",
    icon: Monitor,
    summary: "Executive Overview Aggregating Real-Time Operational Data.",
    builtStatus: "Executive Overview",
    integrationStatus: "Internal Server-Side Aggregation Active",
    whatItDoesToday: "Displays a centralized dashboard of total customer profiles, active rostered staff, tracked inventory items, and quick-launch links to all management hubs.",
    boundaryNote: "Functions as an executive overview and launchpad. Does not execute autonomous cross-hub orchestration without human initiation.",
    dataShared: "Aggregates top-level metrics across CRM, HR, and Inventory collections."
  },
];

const GALLERY_ITEMS = [
  {
    id: "command",
    title: "Command Center Overview",
    badge: "Executive Dashboard",
    image: "/screenshots/screenshot_command_center.png",
    description: "Central operator launchpad aggregating customer database counts, active staff members, and inventory counts with instant access to all hubs."
  },
  {
    id: "kitchen",
    title: "Kitchen Display System (KDS)",
    badge: "Floor Operations",
    image: "/screenshots/screenshot_kitchen_kds.png",
    description: "Live 3-column station display for kitchen tablets separating Dine-in tables, Takeaway pickups, and Delivery orders with 1-tap PIN login."
  },
  {
    id: "waiter",
    title: "Staff Waiter Mobile Pad",
    badge: "Floor Operations",
    image: "/screenshots/screenshot_waiter_pad.png",
    description: "Lightweight browser interface designed for staff phones, enabling table-side ordering, course firing, and instant order dispatch to the kitchen."
  },
  {
    id: "accounting",
    title: "Accounting & Historical P&L",
    badge: "Financial Control",
    image: "/screenshots/screenshot_accounting.png",
    description: "Morning sales entry, weekly wage ratio comparisons, and multi-year benchmark models spanning 2015 to 2026 with cost-of-goods tracking."
  },
  {
    id: "advertising",
    title: "Advertising & Blended ROAS",
    badge: "Revenue Growth",
    image: "/screenshots/screenshot_advertising.png",
    description: "Unified marketing view tracking Google Ads search conversions, Meta Instagram spend, and Google Analytics 4 revenue attribution."
  }
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'operations' | 'marketing' | 'finance'>('all');
  const [activeGalleryId, setActiveGalleryId] = useState('command');

  // Pilot Form State
  const [formData, setFormData] = useState({
    name: '',
    restaurantName: '',
    email: '',
    phone: '',
    notes: '',
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const filteredHubs = activeCategory === 'all' 
    ? TEN_HUBS 
    : TEN_HUBS.filter(h => h.category === activeCategory);

  const activeGalleryItem = GALLERY_ITEMS.find(item => item.id === activeGalleryId) || GALLERY_ITEMS[0];

  const handlePilotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/pilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setSubmitSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unable to submit at this time. Please email rikki@godmoderestaurantbusiness.com directly.';
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <aside aria-label="Announcement" className="bg-slate-900 border-b border-slate-800 py-2.5 px-4 text-center text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-slate-300">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
            Real Restaurant Build
          </span>
          <span className="hidden sm:inline">Tested and refined in daily dinner service at Mother India Fremantle (Western Australia).</span>
          <a 
            href="https://www.youtube.com/@GodModeRestaurantBusiness" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 font-semibold inline-flex items-center gap-1 underline underline-offset-2"
          >
            <span>Watch series</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </aside>

      {/* 2. NAVIGATION HEADER */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-black text-slate-950 shadow-md shadow-amber-500/20 group-hover:bg-amber-400 transition-colors">
                G
              </div>
              <span className="font-extrabold text-base tracking-tight text-white group-hover:text-amber-400 transition-colors">
                GodMode <span className="text-slate-400 font-medium text-xs hidden sm:inline">Restaurant Business</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#boundary" className="hover:text-white transition-colors">System Boundary</a>
            <a href="#hubs" className="hover:text-white transition-colors">The 10 Hubs</a>
            <a href="#proof" className="hover:text-white transition-colors">Operational Proof</a>
            <a href="#gallery" className="hover:text-white transition-colors">Product Gallery</a>
            <a href="#faqs" className="hover:text-white transition-colors">FAQs</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.youtube.com/@GodModeRestaurantBusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-lg transition-colors"
            >
              <YouTubeIcon className="w-4 h-4 text-red-500" />
              <span>YouTube</span>
            </a>
            <a
              href="#pilot"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 px-4 py-2 rounded-lg transition-all shadow-md shadow-amber-500/20"
            >
              <span>Request Pilot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-300 font-medium">How It Works</a>
            <a href="#boundary" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-300 font-medium">System Boundary</a>
            <a href="#hubs" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-300 font-medium">The 10 Hubs</a>
            <a href="#proof" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-300 font-medium">Operational Proof</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-300 font-medium">Product Gallery</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-300 font-medium">FAQs</a>
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="https://www.youtube.com/@GodModeRestaurantBusiness"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-slate-800 py-2.5 rounded-lg"
              >
                <YouTubeIcon className="w-4 h-4 text-red-500" />
                <span>YouTube Channel</span>
              </a>
              <a
                href="#pilot"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-950 bg-amber-500 py-2.5 rounded-lg"
              >
                <span>Request a Pilot</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (Dark Navy) */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Independent Restaurant Management System</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Ten restaurant-management hubs. <span className="text-amber-400">Shared data.</span> Built by an independent operator.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              GodMode is a suite of purpose-built management hubs that share operational data behind the scenes. 
              It brings together accounting, staff rostering, advertising analytics, CRM, and inventory into one organized management workflow—working alongside your restaurant&apos;s frontline ordering setup.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#pilot"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20"
              >
                <span>Request a Pilot / Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.youtube.com/@GodModeRestaurantBusiness"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-sm px-5 py-3.5 rounded-xl transition-all"
              >
                <YouTubeIcon className="w-4 h-4 text-red-500" />
                <span>Watch the Build Series</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No fabricated numbers</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Privacy-redacted evidence</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Manager-approved AI outputs</span>
              </span>
            </div>
          </div>

          {/* Hero Product Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl p-2">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-950">
                <Image
                  src="/screenshots/screenshot_command_center.png"
                  alt="GodMode Command Center Executive Dashboard interface showing real customer profiles, rostered staff, and inventory counts"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                  className="object-cover object-top"
                />
              </div>
              <div className="p-3 bg-slate-900/90 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Live Command Center Overview</span>
                <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Verified Capture
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. OPERATIONAL BENCHMARKS (Warm Off-White Section) */}
      <section id="how-it-works" className="bg-slate-100 text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-300">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
              Architecture &amp; Data Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              How the 10 Independent Hubs Share Relevant Data
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Instead of ten disconnected software tools with ten logins and isolated databases, GodMode links your back-office data where meaningful connections exist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Frontline to Accounting</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Order takings and daily sales from your ordering system stream directly into the morning Accounting P&amp;L, eliminating manual cash-up re-entry.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Rosters to Prime Cost</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Staff shift rosters and logged timesheets provide actual labor figures to calculate live wage-to-sales ratios alongside food costs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Performance to AI Copy</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Actual 30-day Google and Meta campaign returns are fed directly into the Gemini AI Studio so promotional copy is grounded in real historical metrics.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SYSTEM BOUNDARY DIAGRAM (Dark Navy Section) */}
      <section id="boundary" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 border border-blue-800 px-3 py-1 rounded-full">
            Transparent Boundaries
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            The Ordering System Boundary Explained
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            GodMode does not claim to replace your existing POS or card terminals. It provides internal operational tools and back-office management intelligence that work alongside your setup.
          </p>
        </div>

        {/* Visual Boundary Architecture Map */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Frontline Operations Box */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  <h3 className="font-bold text-white text-base">Frontline Floor &amp; Kitchen</h3>
                </div>
                <span className="text-[11px] font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded">
                  Floor Execution
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated operational tools designed for floor speed and kitchen coordination during active service:
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Waiter Mobile App:</strong> Table ordering and drink firing on staff mobile phones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Kitchen Display (KDS):</strong> 3-column live tickets (Dine-in, Takeaway, Delivery) with ticket timers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Expediter Packer Station:</strong> Item checklists and bag labels before food leaves the pass.</span>
                </li>
              </ul>
              <div className="pt-2 text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <em>Customer checkout runs independently. Bank card terminals and cash drawers remain intact.</em>
              </div>
            </div>

            {/* Back-Office Management Hubs Box */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <h3 className="font-bold text-white text-base">Management Hubs</h3>
                </div>
                <span className="text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded">
                  Back-Office Control
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Management modules running in the office or on the owner&apos;s laptop to oversee finances, staff, and growth:
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Accounting Hub:</strong> Daily P&amp;L, weekly wage benchmarks, and historical financial trends.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Advertising &amp; Analytics:</strong> Google Ads, Meta campaigns, and GA4 revenue attribution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>HR &amp; CRM:</strong> Staff rostering, timesheet approvals, VIP diner segments, and compliant SMS.</span>
                </li>
              </ul>
              <div className="pt-2 text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <em>Connects to external APIs (Google, Meta, Twilio) only when restaurant accounts are configured.</em>
              </div>
            </div>

          </div>

          {/* Data Bridge Summary Bar */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="font-bold text-white">The Data Connection:</span>
              <span>Frontline sales summaries, labor hours, and item depletions bridge securely into back-office management.</span>
            </div>
            <span className="font-mono text-[11px] text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 shrink-0">
              No Shared Passwords · Role PINs
            </span>
          </div>
        </div>
      </section>

      {/* 6. THE 10 HUBS SHOWCASE (Warm Off-White Section with Light Cards) */}
      <section id="hubs" className="bg-slate-100 text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-300">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
              Full Suite Directory
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Scannable Showcase of All Ten Hubs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every hub is purpose-built and available in the software. External services (such as Google Ads or Twilio) operate once your specific business accounts are connected.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              <button
                onClick={() => setActiveCategory('all')}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${activeCategory === 'all' ? 'bg-slate-900 text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'}`}
              >
                All Ten Hubs (10)
              </button>
              <button
                onClick={() => setActiveCategory('operations')}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${activeCategory === 'operations' ? 'bg-slate-900 text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'}`}
              >
                Operations &amp; Floor (4)
              </button>
              <button
                onClick={() => setActiveCategory('marketing')}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${activeCategory === 'marketing' ? 'bg-slate-900 text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'}`}
              >
                Marketing &amp; Reputation (4)
              </button>
              <button
                onClick={() => setActiveCategory('finance')}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${activeCategory === 'finance' ? 'bg-slate-900 text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'}`}
              >
                Finance &amp; Analytics (2)
              </button>
            </div>
          </div>

          {/* Hubs Grid with Accessible Light Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHubs.map((hub) => {
              const Icon = hub.icon;
              return (
                <div key={hub.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                        <Icon className="w-5 h-5 text-slate-800" />
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        hub.builtStatus === 'Built & Live' 
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                          : 'bg-slate-100 text-slate-800 border border-slate-200'
                      }`}>
                        {hub.builtStatus}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{hub.title}</h3>
                      <p className="text-xs text-slate-500 font-medium">{hub.summary}</p>
                    </div>

                    <div className="pt-2 text-xs text-slate-700 space-y-2">
                      <p className="leading-relaxed"><strong>Today:</strong> {hub.whatItDoesToday}</p>
                      <p className="text-slate-500 text-[11px] leading-relaxed"><strong>Data Shared:</strong> {hub.dataShared}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] text-slate-600 flex items-center gap-1.5">
                      <span className="font-semibold text-slate-700">Integration:</span>
                      <span className="text-slate-500 truncate">{hub.integrationStatus}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 italic leading-snug">
                      {hub.boundaryNote}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. AUTHENTIC REDACTED PRODUCT GALLERY (Dark Navy) */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full">
            Real Software Captures
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Authentic Product Gallery
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Actual interface captures from our live deployment. Personal names, phone numbers, and financial details are strictly redacted for privacy.
          </p>

          {/* Screenshot Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {GALLERY_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveGalleryId(item.id)}
                className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition-all ${
                  activeGalleryId === item.id 
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20' 
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Screenshot Display */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl max-w-5xl mx-auto space-y-4">
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
            <Image
              src={activeGalleryItem.image}
              alt={`Actual interface screenshot of ${activeGalleryItem.title} with customer and financial figures redacted`}
              fill
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover object-top"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-2 text-xs">
            <div>
              <span className="font-bold text-white text-sm">{activeGalleryItem.title}</span>
              <p className="text-slate-400 mt-0.5">{activeGalleryItem.description}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-emerald-400 border border-emerald-900 text-[11px] font-medium shrink-0 self-start sm:self-auto">
              <ShieldCheck className="w-3.5 h-3.5" /> Privacy Redacted
            </span>
          </div>
        </div>
      </section>

      {/* 8. OPERATIONAL PROOF FROM MOTHER INDIA FREMANTLE (Warm Off-White) */}
      <section id="proof" className="bg-slate-100 text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-300">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
              Testing Ground Evidence
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Confirmed Operational Facts from Mother India Fremantle
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We do not publish hypothetical savings estimates or unconfirmed marketing claims. Here are the documented operational facts from our testing ground in Fremantle, Western Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="text-3xl font-black text-slate-900">11 Years</div>
              <h3 className="font-bold text-sm text-slate-800">Historical Benchmarks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structured profit &amp; loss statements from 2015 to 2026 modeled to benchmark food COGS and labor percentages.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="text-3xl font-black text-slate-900">10 Hubs</div>
              <h3 className="font-bold text-sm text-slate-800">Coded &amp; Operational</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every management hub is written in code with live routes and verified server actions, not mock design concepts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="text-3xl font-black text-slate-900">Zero</div>
              <h3 className="font-bold text-sm text-slate-800">Guessed COGS Numbers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Inventory valuation and COGS calculations remain strictly marked pending until verified invoices are entered.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="text-3xl font-black text-slate-900">100% Human</div>
              <h3 className="font-bold text-sm text-slate-800">Manager Review</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All AI-generated promotional copy and review responses require explicit human confirmation prior to dispatch.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-3xl mx-auto space-y-2 text-xs text-slate-600 leading-relaxed">
            <p className="font-bold text-slate-900 text-sm">Operator Note on Product Scope:</p>
            <p>
              &ldquo;I built GodMode because running an independent restaurant with ten different software subscriptions created data silos. 
              The system connects what matters without pretending to replace bank payment terminals or running an entire business autonomously without an operator&apos;s judgment.&rdquo;
            </p>
            <p className="font-semibold text-slate-800 pt-1">— Rikki, Independent Restaurant Operator &amp; Builder</p>
          </div>

        </div>
      </section>

      {/* 9. HONEST YOUTUBE SERIES SPOTLIGHT (Dark Navy) */}
      <section id="walkthrough" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest bg-red-950/40 border border-red-900/50 px-3 py-1 rounded-full">
            <YouTubeIcon className="w-4 h-4" />
            <span>Official YouTube Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Follow the Real-World Build in Public
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Our comprehensive 10-hub video walkthrough is currently in production. Follow our channel for episode releases covering code breakdowns, kitchen trials, and operating lessons.
          </p>
        </div>

        {/* Honest Channel Card (No Fake Player) */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
            <Image
              src="/channel_banner.jpg"
              alt="GodMode Restaurant Business official YouTube channel banner"
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs uppercase font-extrabold text-red-400 tracking-wider">
                Episode 1 Premiere Coming Soon
              </span>
              <h3 className="text-xl font-bold text-white">
                The 10-Hub Architecture: Why Separate Apps Kill Restaurant Margins
              </h3>
              <p className="text-xs text-slate-400">
                Subscribe to @GodModeRestaurantBusiness to receive the video teardown as soon as it goes live.
              </p>
            </div>

            <a
              href="https://www.youtube.com/@GodModeRestaurantBusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-red-600/30 shrink-0"
            >
              <YouTubeIcon className="w-4 h-4" />
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (Warm Off-White) */}
      <section id="faqs" className="bg-slate-100 text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-300">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Straightforward answers about hardware, data boundaries, and pilot participation.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Does GodMode replace my EFTPOS payment terminals?</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                No. GodMode manages internal floor ordering, kitchen routing, and management accounting. Customer credit card terminals and bank merchant accounts remain entirely untouched.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Can I use only specific hubs rather than all ten?</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Yes. Each hub is built as an independent module. You can use the Kitchen KDS and Waiter Pad without enabling the CRM or Advertising hubs, or use the Accounting P&amp;L standalone.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Where is our restaurant data stored?</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                All restaurant data is stored in dedicated, enterprise-grade Google Cloud Firestore database instances with encrypted access and strict credential segregation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-base">What hardware is required for the floor tools?</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Any standard tablet or iPad can run the Kitchen Display screen. Floor staff can access the Waiter Pad on any standard iOS or Android mobile browser using a secure 4-digit PIN.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-base">How does the pilot program work?</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We are testing GodMode with select independent restaurant operators. We walk through your current setup, review what data can be shared, and deploy selected hubs alongside your floor team.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 11. PILOT REQUEST FORM (Dark Navy - Persistent Firestore Storage) */}
      <section id="pilot" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/40 border border-amber-800/40 px-3 py-1 rounded-full">
            <Mail className="w-4 h-4" />
            <span>Pilot Inquiries &amp; Walkthroughs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Request a Pilot or Private Walkthrough
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Fill out your restaurant details below. Submissions are saved securely to our Firestore database and reviewed personally by our founding operator.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
          {submitSuccess ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Inquiry Saved Successfully!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. Your restaurant details have been recorded in our database. We will review your setup and contact you shortly.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:rikki@godmoderestaurantbusiness.com"
                  className="text-xs text-amber-400 hover:underline font-semibold"
                >
                  Direct email: rikki@godmoderestaurantbusiness.com
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handlePilotSubmit} className="space-y-4">
              {submitError && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Honeypot field for anti-spam (hidden from users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_hp">Leave this blank</label>
                <input
                  type="text"
                  id="website_hp"
                  name="website_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-300">
                    Your Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Rikki Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="restaurantName" className="text-xs font-semibold text-slate-300">
                    Restaurant Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="restaurantName"
                    type="text"
                    required
                    placeholder="e.g. Mother India Fremantle"
                    value={formData.restaurantName}
                    onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. owner@restaurant.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="phone" className="text-xs font-semibold text-slate-300">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="e.g. 0406 705 231"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label htmlFor="notes" className="text-xs font-semibold text-slate-300">
                  Current Floor Setup or Main Management Bottleneck
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Tell us what ordering system you currently use and which hubs you are most interested in testing..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Saving to Firestore...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Pilot Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-3 text-center space-y-1">
                <p className="text-[11px] text-slate-500">
                  <strong>Privacy Notice:</strong> Your information is stored securely in our private Google Cloud database and never shared. Used solely to evaluate pilot eligibility.
                </p>
                <p className="text-[11px] text-slate-500">
                  Need immediate contact? Reach us directly at{' '}
                  <a href="mailto:rikki@godmoderestaurantbusiness.com" className="text-amber-400 hover:underline">
                    rikki@godmoderestaurantbusiness.com
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="mt-auto bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-extrabold text-white text-sm">GodMode Restaurant Business</div>
            <p className="text-slate-500 text-xs">Ten purpose-built restaurant management hubs with shared operational data.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="mailto:rikki@godmoderestaurantbusiness.com"
              className="hover:text-amber-400 transition-colors font-medium text-xs"
            >
              rikki@godmoderestaurantbusiness.com
            </a>
            <a
              href="https://www.youtube.com/@GodModeRestaurantBusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-bold transition-colors text-xs"
            >
              <YouTubeIcon className="w-4 h-4" />
              <span>@GodModeRestaurantBusiness</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-slate-600 text-[11px]">
          &copy; {new Date().getFullYear()} GodMode Restaurant Business. Tested &amp; refined at Mother India Fremantle, Western Australia. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

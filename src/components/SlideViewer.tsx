import React from 'react';
import { SlideData } from '../types/presentation';
import { FigmaAuditViewer } from './interactive/FigmaAuditViewer';
import { CustomerPortalMockup } from './interactive/CustomerPortalMockup';
import { AdminPortalMockup } from './interactive/AdminPortalMockup';
import { BackendArchitectureDiagram } from './interactive/BackendArchitectureDiagram';
import { MapsSimulator } from './interactive/MapsSimulator';
import { TrackingTimeline } from './interactive/TrackingTimeline';
import { InvoicePaymentSimulator } from './interactive/InvoicePaymentSimulator';
import { HostingTopology } from './interactive/HostingTopology';
import { ClientChecklist } from './interactive/ClientChecklist';
import { RoadmapTimeline } from './interactive/RoadmapTimeline';
import { 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  Database, 
  Users, 
  Truck, 
  FileCheck, 
  Key, 
  Calendar, 
  CheckCircle2, 
  Server, 
  Globe, 
  CreditCard,
  Mail,
  Smartphone,
  ChevronRight,
  Cpu,
  Lock,
  GitBranch,
  Terminal,
  Activity
} from 'lucide-react';

interface SlideViewerProps {
  slide: SlideData;
  totalSlides: number;
  onNextSlide: () => void;
  onPrevSlide: () => void;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slide,
  totalSlides,
  onNextSlide,
  onPrevSlide
}) => {
  // Render specific content based on slide.id
  const renderSlideContent = () => {
    switch (slide.id) {
      // ----------------------------------------------------
      // SLIDE 01: COVER
      // ----------------------------------------------------
      case 1:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden bg-gradient-to-br from-[#0B0F19] via-[#080C14] to-[#04060A]">
            {/* Background subtle geometric route lines */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20%" cy="30%" r="350" fill="none" stroke="#2563EB" strokeWidth="1" strokeDasharray="6 6" />
                <circle cx="85%" cy="70%" r="450" fill="none" stroke="#3B82F6" strokeWidth="1.2" />
                <path d="M 0 300 Q 400 150 900 450 T 1800 200" fill="none" stroke="#00D2FF" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Top Eyebrow Strip */}
            <div className="relative z-10 flex items-center justify-between pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="h-7 px-2.5 bg-blue-600 rounded flex items-center justify-center font-bold tracking-widest text-xs text-white shadow-md shadow-blue-600/30">
                  HEEM DIGITAL
                </div>
                <span className="text-slate-400 font-mono text-xs">/</span>
                <span className="text-xs font-mono text-slate-300 uppercase tracking-widest">
                  Software Implementation Proposal
                </span>
              </div>
              <div className="font-mono text-xs text-blue-400 bg-blue-950/60 px-3 py-1 rounded border border-blue-900">
                UK Logistics Portal · Version 1.0
              </div>
            </div>

            {/* Main Headline & Supporting Statement */}
            <div className="relative z-10 my-auto py-8 max-w-4xl space-y-4">
              <div className="text-xs font-mono text-blue-400 tracking-widest uppercase">
                Enterprise Client Pitch Deck
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
                NEO TRANSPORT
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300">
                Custom Booking & Management Portal
              </h2>
              <div className="h-0.5 w-24 bg-blue-500 my-4"></div>
              <p className="text-lg text-slate-300 font-medium">
                From Figma Concept to a Connected Logistics Platform.
              </p>
              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                A phased software development proposal covering customer self-service bookings, operational dispatch management, shared cloud backend, maps and tracking integrations, hosting, and deployment.
              </p>
            </div>

            {/* Footer Strip */}
            <div className="relative z-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="text-slate-400">
                Client: <strong className="text-white">NEO Transport Ltd (UK)</strong>
              </div>
              <div className="text-slate-400">
                Architecture: <strong className="text-blue-400">Next.js · PostgreSQL · Supabase · Vercel</strong>
              </div>
              <div className="font-mono text-slate-400">
                Prepared by <strong className="text-white">HEEM Digital</strong>
              </div>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 02: EXECUTIVE OVERVIEW
      // ----------------------------------------------------
      case 2:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 space-y-4">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-sm text-slate-400 mt-1 max-w-3xl">{slide.summary}</p>
            </div>

            {/* Dual Portal Comparison Cards connected by Shared Backend */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-auto items-stretch">
              {/* Customer Portal Card */}
              <div className="md:col-span-5 p-5 bg-[#0E1524] border border-blue-500/40 rounded-xl flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800 font-semibold">
                      PORTAL 01
                    </span>
                    <span className="text-xs font-mono text-slate-400">portal.neotransport.co.uk</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Customer Booking Portal</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Self-service web experience enabling customers to create freight bookings in seconds, monitor live delivery progress, access instant quotes, and download proof-of-delivery documents.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400 font-mono">✓</span>
                      <span>Fast booking wizard with UK postcode lookup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400 font-mono">✓</span>
                      <span>Consignment tracking & milestone history</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400 font-mono">✓</span>
                      <span>Downloadable PDF invoices & statements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400 font-mono">✓</span>
                      <span>Proof of Delivery (POD) signature vault</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                  Target Audience: Freight Customers & Account Holders
                </div>
              </div>

              {/* Center Connection Indicator */}
              <div className="md:col-span-2 flex flex-col items-center justify-center p-3 bg-[#0A0E1A] border border-slate-800 rounded-xl text-center space-y-2">
                <Database className="w-6 h-6 text-emerald-400" />
                <div className="text-xs font-bold text-white">Unified Core</div>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Single PostgreSQL database, shared authentication, and real-time event synchronization.
                </p>
                <div className="w-full h-px bg-slate-800 my-1"></div>
                <div className="text-[10px] font-mono text-emerald-400">
                  Zero Data Silos
                </div>
              </div>

              {/* Admin Portal Card */}
              <div className="md:col-span-5 p-5 bg-[#0E1524] border border-purple-500/40 rounded-xl flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800 font-semibold">
                      PORTAL 02
                    </span>
                    <span className="text-xs font-mono text-slate-400">admin.neotransport.co.uk</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Admin Management Portal</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Internal operational workspace providing NEO Transport dispatchers, transport managers, and finance staff total operational command and booking lifecycle management.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400 font-mono">✓</span>
                      <span>Centralized dispatch queue with emergency alerts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400 font-mono">✓</span>
                      <span>One-click shipment status updates & notifications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400 font-mono">✓</span>
                      <span>Customer credit limit & standby terms management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400 font-mono">✓</span>
                      <span>Internal operational notes & driver assignment</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                  Target Audience: Authorized NEO Transport Staff
                </div>
              </div>
            </div>

            {/* Bottom Value Takeaway */}
            <div className="p-3 bg-[#080D1A] border border-slate-800 rounded-lg text-xs text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <strong>Business Impact:</strong> Modern, responsive self-service for customers eliminates phone tag, while giving operations a centralized booking cockpit.
              </span>
              <span className="font-mono text-blue-400 text-[11px]">Two Portals · One Source of Truth</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 03: FIGMA AUDIT
      // ----------------------------------------------------
      case 3:
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-6 space-y-3">
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-slate-800 mb-2">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-xs text-slate-400">{slide.summary}</p>
            </div>

            <div className="flex-1 min-h-[380px]">
              <FigmaAuditViewer />
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 04: THE COMPLETE PLATFORM
      // ----------------------------------------------------
      case 4:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 space-y-4">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-sm text-slate-400 mt-1 max-w-3xl">{slide.summary}</p>
            </div>

            {/* Systematic 3-Column Architecture Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
              {/* Customer Modules */}
              <div className="p-4 bg-[#0E1524] border border-blue-500/30 rounded-xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Customer Modules</span>
                  <span className="text-[10px] font-mono text-blue-400">Client Self-Service</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>Account & Standby Profile</span>
                    <span className="text-[10px] font-mono text-emerald-400">Active</span>
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>Consignment Booking Engine</span>
                    <span className="text-[10px] font-mono text-blue-400">3-Step</span>
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>Consignment Tracking & Status</span>
                    <span className="text-[10px] font-mono text-blue-400">Milestones</span>
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>Quotation Requests & History</span>
                    <span className="text-[10px] font-mono text-slate-400">Instant</span>
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>Invoices, Statements & PODs</span>
                    <span className="text-[10px] font-mono text-emerald-400">PDFs</span>
                  </li>
                </ul>
              </div>

              {/* Admin Modules */}
              <div className="p-4 bg-[#0E1524] border border-purple-500/30 rounded-xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">Admin Modules</span>
                  <span className="text-[10px] font-mono text-purple-400">Operations Control</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>Live Operations Cockpit</span>
                    <span className="text-[10px] font-mono text-purple-400">KPIs</span>
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>Consignment Management Desk</span>
                    <span className="text-[10px] font-mono text-amber-400">Dispatch Queue</span>
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>Customer & Credit Directory</span>
                    <span className="text-[10px] font-mono text-slate-400">Limits & Terms</span>
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>Quote Response & Pricing</span>
                    <span className="text-[10px] font-mono text-blue-400">Rate Cards</span>
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>Role Permissions & Audit Logs</span>
                    <span className="text-[10px] font-mono text-emerald-400">RBAC</span>
                  </li>
                </ul>
              </div>

              {/* Shared Services */}
              <div className="p-4 bg-[#0E1524] border border-emerald-500/30 rounded-xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Shared Core Services</span>
                  <span className="text-[10px] font-mono text-emerald-400">Enterprise Cloud</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>Supabase Authentication</span>
                    <span className="text-[10px] font-mono text-emerald-400">Secure JWT</span>
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>PostgreSQL 16 Database</span>
                    <span className="text-[10px] font-mono text-emerald-400">AWS London</span>
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>Google Maps Places & Routes</span>
                    <span className="text-[10px] font-mono text-blue-400">UK Postcodes</span>
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>Transactional Notifications</span>
                    <span className="text-[10px] font-mono text-slate-400">Email & SMS</span>
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800 flex items-center justify-between">
                    <span>Encrypted Document Vault</span>
                    <span className="text-[10px] font-mono text-purple-300">Signed S3 URLs</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-[#080D1A] border border-slate-800 rounded-lg text-xs text-slate-400 flex items-center justify-between">
              <span>Architecture Principle: Clean separation of concerns with unified data integrity.</span>
              <span className="font-mono text-blue-400">Zero Unnecessary Complexity</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 05: STEP 1 - DISCOVERY & SPECIFICATION
      // ----------------------------------------------------
      case 5:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 space-y-4">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-sm text-slate-400 mt-1 max-w-3xl">{slide.summary}</p>
            </div>

            {/* Step 1 Core Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-auto">
              <div className="md:col-span-4 p-4 bg-[#0E1524] border border-slate-800 rounded-xl space-y-3">
                <div className="text-xs font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Key Discovery Activities
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800">
                    <strong>1. Wireframe & State Gap Analysis:</strong> Identify missing validation errors, empty states, and loading indicators.
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800">
                    <strong>2. Operational Rules Workshop:</strong> Confirm vehicle weight classes, tail-lift requirements, and emergency SLAs.
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800">
                    <strong>3. Admin Dispatch Logic:</strong> Map exact status transitions (Allocated → In Transit → Delivered).
                  </li>
                </ul>
              </div>

              <div className="md:col-span-4 p-4 bg-[#0E1524] border border-slate-800 rounded-xl space-y-3">
                <div className="text-xs font-bold text-emerald-300 uppercase font-mono tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Concrete Deliverables
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800">
                    <strong>Final Technical Specification:</strong> Complete functional blueprint of data structures and API contracts.
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800">
                    <strong>Customer & Admin Journey Flows:</strong> Step-by-step logic diagrams for edge cases and exceptions.
                  </li>
                  <li className="p-2 bg-[#121A2D] rounded border border-slate-800">
                    <strong>Cloud Staging Setup:</strong> Provisioning Vercel preview environments and development databases.
                  </li>
                </ul>
              </div>

              <div className="md:col-span-4 p-4 bg-[#0E1524] border border-amber-900/40 rounded-xl space-y-3 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-300 uppercase font-mono tracking-wider flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    NEO Transport Dependency
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    One focused 60-minute technical alignment meeting with your transport manager or operational lead to confirm rate card logic and dispatch steps.
                  </p>
                  <div className="p-2.5 bg-[#0A0F1D] border border-amber-900/60 rounded text-[11px] text-amber-200/90 font-mono">
                    Output: Signed-Off Scope Specification before writing frontend code.
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400">
                  Phase 1 Duration: Sprint 1 Kick-Off Milestone
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#080D1A] border border-slate-800 rounded-lg text-xs text-slate-400 flex items-center justify-between">
              <span>Goal: Eliminate ambiguity and ensure every button and form field has documented logic.</span>
              <span className="font-mono text-emerald-400">Zero Rework Guarantee</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 06: CUSTOMER PORTAL INTERACTIVE
      // ----------------------------------------------------
      case 6:
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-6 space-y-3">
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-slate-800 mb-2">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-xs text-slate-400">{slide.summary}</p>
            </div>

            <div className="flex-1 min-h-[380px]">
              <CustomerPortalMockup />
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 07: ADMIN PORTAL INTERACTIVE
      // ----------------------------------------------------
      case 7:
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-6 space-y-3">
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-slate-800 mb-2">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-xs text-slate-400">{slide.summary}</p>
            </div>

            <div className="flex-1 min-h-[380px]">
              <AdminPortalMockup />
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 08: BACKEND & DATABASE INTERACTIVE
      // ----------------------------------------------------
      case 8:
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-6 space-y-3">
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-slate-800 mb-2">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-xs text-slate-400">{slide.summary}</p>
            </div>

            <div className="flex-1 min-h-[380px]">
              <BackendArchitectureDiagram />
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 09: MAPS & ROUTING INTERACTIVE
      // ----------------------------------------------------
      case 9:
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-6 space-y-3">
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-slate-800 mb-2">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-xs text-slate-400">{slide.summary}</p>
            </div>

            <div className="flex-1 min-h-[380px]">
              <MapsSimulator />
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 10: TRACKING & DISPATCH INTERACTIVE
      // ----------------------------------------------------
      case 10:
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-6 space-y-3">
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-slate-800 mb-2">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-xs text-slate-400">{slide.summary}</p>
            </div>

            <div className="flex-1 min-h-[380px]">
              <TrackingTimeline />
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 11: INVOICES & PAYMENTS INTERACTIVE
      // ----------------------------------------------------
      case 11:
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-6 space-y-3">
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-slate-800 mb-2">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-xs text-slate-400">{slide.summary}</p>
            </div>

            <div className="flex-1 min-h-[380px]">
              <InvoicePaymentSimulator />
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 12: DOCUMENTS & NOTIFICATIONS
      // ----------------------------------------------------
      case 12:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 space-y-4">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-sm text-slate-400 mt-1 max-w-3xl">{slide.summary}</p>
            </div>

            {/* Split: Document Vault vs Notification Triggers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto">
              {/* Document Vault */}
              <div className="p-4 bg-[#0E1524] border border-slate-800 rounded-xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-white uppercase font-mono">Secure Document Vault</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Encrypted S3 Storage</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-[#121A2D] rounded border border-slate-800">
                    <div className="font-semibold text-slate-200">Electronic Proof of Delivery (POD)</div>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Driver-captured electronic signatures and delivery photos instantly converted to timestamped PDF notes.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#121A2D] rounded border border-slate-800">
                    <div className="font-semibold text-slate-200">Commercial Invoices & Statements</div>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Dynamically generated UK VAT-compliant invoices with line-item freight charges and payment reference details.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#121A2D] rounded border border-slate-800">
                    <div className="font-semibold text-slate-200">Consignment Notes & Manifests</div>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Downloadable carrier paperwork for warehouse loading staff and gate security clearance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Real-time Notification Engine */}
              <div className="p-4 bg-[#0E1524] border border-slate-800 rounded-xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold text-white uppercase font-mono">Event Notification Matrix</span>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400">Automated Webhooks</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-[#121A2D] rounded border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-slate-200">Booking Confirmed</div>
                      <div className="text-[10px] text-slate-400">Consignment reference + collection window</div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-900">Email</span>
                  </div>

                  <div className="p-2.5 bg-[#121A2D] rounded border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-slate-200">Cargo Collected</div>
                      <div className="text-[10px] text-slate-400">Driver on highway + real-time ETA</div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-900">Email</span>
                  </div>

                  <div className="p-2.5 bg-[#121A2D] rounded border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-slate-200">Consignment Delivered (POD Ready)</div>
                      <div className="text-[10px] text-slate-400">Instant PDF download link in email body</div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-900">Email</span>
                  </div>

                  <div className="p-2.5 bg-[#121A2D] rounded border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-slate-200">Emergency Dispatch Alert</div>
                      <div className="text-[10px] text-slate-400">Urgent notifications to on-call transport desk</div>
                    </div>
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-900">Email + SMS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#080D1A] border border-slate-800 rounded-lg text-xs text-slate-400 flex items-center justify-between">
              <span>All transactional emails are sent through dedicated DKIM-authenticated domains for 100% deliverability.</span>
              <span className="font-mono text-emerald-400">Anti-Spam Verified</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 13: RECOMMENDED TECH STACK
      // ----------------------------------------------------
      case 13:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 space-y-4">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-sm text-slate-400 mt-1 max-w-3xl">{slide.summary}</p>
            </div>

            {/* Tech Stack 6-Box Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-auto text-xs">
              <div className="p-3.5 bg-[#0E1524] border border-slate-800 rounded-xl space-y-1.5">
                <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">Frontend Framework</div>
                <div className="text-base font-bold text-white">Next.js + React 19</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Sub-second page rendering, zero flicker, optimized SEO, and server components for lightning-fast portal interactions.
                </p>
              </div>

              <div className="p-3.5 bg-[#0E1524] border border-slate-800 rounded-xl space-y-1.5">
                <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">Design System & Styling</div>
                <div className="text-base font-bold text-white">Tailwind CSS</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Strict design tokens, Swiss editorial hierarchy, fluid mobile responsiveness, and zero bloated CSS dependencies.
                </p>
              </div>

              <div className="p-3.5 bg-[#0E1524] border border-slate-800 rounded-xl space-y-1.5">
                <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">Database & Backend</div>
                <div className="text-base font-bold text-white">Supabase PostgreSQL 16</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  ACID transactional integrity, Row-Level Security, real-time dispatch subscriptions, and automated daily backups.
                </p>
              </div>

              <div className="p-3.5 bg-[#0E1524] border border-slate-800 rounded-xl space-y-1.5">
                <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">Cloud Hosting</div>
                <div className="text-base font-bold text-white">Vercel Enterprise Edge</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Automatic SSL renewals, global edge caching, instant preview staging branches, and zero server maintenance downtime.
                </p>
              </div>

              <div className="p-3.5 bg-[#0E1524] border border-slate-800 rounded-xl space-y-1.5">
                <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">Location & Routing</div>
                <div className="text-base font-bold text-white">Google Maps Platform</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Official UK postcode autocomplete, verified coordinates, highway distance calculations, and road transit estimations.
                </p>
              </div>

              <div className="p-3.5 bg-[#0E1524] border border-slate-800 rounded-xl space-y-1.5">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Code Governance</div>
                <div className="text-base font-bold text-white">GitHub Enterprise CI/CD</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Protected branches, peer code review, full audit trail, and 100% intellectual property ownership retained by NEO Transport.
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#080D1A] border border-slate-800 rounded-lg text-xs text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <strong>Strategic Advantage:</strong> Open ecosystem with zero proprietary vendor lock-in. Your PostgreSQL database can be moved or backed up anytime.
              </span>
              <span className="font-mono text-emerald-400 text-[11px]">Future-Proof Architecture</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 14: HOSTING TOPOLOGY INTERACTIVE
      // ----------------------------------------------------
      case 14:
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-6 space-y-3">
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-slate-800 mb-2">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-xs text-slate-400">{slide.summary}</p>
            </div>

            <div className="flex-1 min-h-[380px]">
              <HostingTopology />
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 15: CLIENT CHECKLIST INTERACTIVE
      // ----------------------------------------------------
      case 15:
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-6 space-y-3">
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-slate-800 mb-2">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-xs text-slate-400">{slide.summary}</p>
            </div>

            <div className="flex-1 min-h-[380px]">
              <ClientChecklist />
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 16: OWNERSHIP & SECURITY
      // ----------------------------------------------------
      case 16:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 space-y-4">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-sm text-slate-400 mt-1 max-w-3xl">{slide.summary}</p>
            </div>

            {/* 4 Pillars of Security & Ownership */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto text-xs">
              <div className="p-4 bg-[#0E1524] border border-slate-800 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <GitBranch className="w-4 h-4 text-blue-400" />
                  100% Intellectual Property & Code Ownership
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  All custom code, database schemas, styling tokens, and deployment scripts belong exclusively to NEO Transport. HEEM Digital builds directly into your repository with clean handover documentation.
                </p>
                <div className="font-mono text-[10px] text-blue-400 bg-blue-950/40 p-2 rounded border border-blue-900/60">
                  Zero proprietary royalties or developer lock-in.
                </div>
              </div>

              <div className="p-4 bg-[#0E1524] border border-slate-800 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  UK GDPR & Data Sovereignty
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  Customer records, delivery addresses, and invoices reside exclusively in AWS London (eu-west-2). Fully compliant with UK GDPR regulations and commercial confidentiality standards.
                </p>
                <div className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 p-2 rounded border border-emerald-900/60">
                  Encrypted at rest (AES-256) and in transit (TLS 1.3).
                </div>
              </div>

              <div className="p-4 bg-[#0E1524] border border-slate-800 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Lock className="w-4 h-4 text-purple-400" />
                  Row-Level Security (RLS) Isolation
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  PostgreSQL database engine strictly isolates customer data. Even if a customer attempts to query other records, database-level security policies block access at the engine layer.
                </p>
                <div className="font-mono text-[10px] text-purple-300 bg-purple-950/40 p-2 rounded border border-purple-900/60">
                  Engine-enforced multi-tenant isolation.
                </div>
              </div>

              <div className="p-4 bg-[#0E1524] border border-slate-800 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Key className="w-4 h-4 text-amber-400" />
                  Least-Privilege Collaborator Access
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  NEO Transport retains primary root ownership of domain DNS, Vercel team, and database accounts. HEEM Digital operates via invited collaborator permissions that can be revoked at any time.
                </p>
                <div className="font-mono text-[10px] text-amber-300 bg-amber-950/40 p-2 rounded border border-amber-900/60">
                  Client maintains root custody of all digital assets.
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#080D1A] border border-slate-800 rounded-lg text-xs text-slate-400 flex items-center justify-between">
              <span>Prepared according to UK Enterprise Security & Data Governance standards.</span>
              <span className="font-mono text-emerald-400">SOC 2 / ISO 27001 Aligned</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 17: TESTING & QA
      // ----------------------------------------------------
      case 17:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 space-y-4">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-sm text-slate-400 mt-1 max-w-3xl">{slide.summary}</p>
            </div>

            {/* QA Testing Matrix 4 Categories */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-auto text-xs">
              <div className="p-3.5 bg-[#0E1524] border border-slate-800 rounded-xl space-y-2">
                <div className="font-bold text-white text-xs uppercase font-mono tracking-wider text-blue-400">
                  01. Customer Flows
                </div>
                <ul className="space-y-1.5 text-[11px] text-slate-300">
                  <li>• Booking creation with all vehicle types</li>
                  <li>• UK postcode validation handling</li>
                  <li>• Emergency booking priority flagging</li>
                  <li>• Real-time tracking milestone updates</li>
                  <li>• PDF invoice and POD downloading</li>
                </ul>
              </div>

              <div className="p-3.5 bg-[#0E1524] border border-slate-800 rounded-xl space-y-2">
                <div className="font-bold text-white text-xs uppercase font-mono tracking-wider text-purple-400">
                  02. Admin & Dispatch
                </div>
                <ul className="space-y-1.5 text-[11px] text-slate-300">
                  <li>• Dispatch table filtering & search</li>
                  <li>• 1-click status transitions & audit logs</li>
                  <li>• Internal driver notes persistence</li>
                  <li>• Customer credit limit adjustments</li>
                  <li>• Role permission boundaries (RBAC)</li>
                </ul>
              </div>

              <div className="p-3.5 bg-[#0E1524] border border-slate-800 rounded-xl space-y-2">
                <div className="font-bold text-white text-xs uppercase font-mono tracking-wider text-emerald-400">
                  03. Integrations
                </div>
                <ul className="space-y-1.5 text-[11px] text-slate-300">
                  <li>• Google Maps Places API quota limits</li>
                  <li>• Routes distance calculation accuracy</li>
                  <li>• Stripe webhook payment callbacks</li>
                  <li>• Transactional email SPF/DKIM inbox test</li>
                  <li>• S3 signed URL expiration security</li>
                </ul>
              </div>

              <div className="p-3.5 bg-[#0E1524] border border-slate-800 rounded-xl space-y-2">
                <div className="font-bold text-white text-xs uppercase font-mono tracking-wider text-amber-400">
                  04. Cross-Device QA
                </div>
                <ul className="space-y-1.5 text-[11px] text-slate-300">
                  <li>• Mobile iOS & Android viewports</li>
                  <li>• Tablet dispatch inspection</li>
                  <li>• Widescreen desktop dispatch tables</li>
                  <li>• Sub-second page load benchmarks</li>
                  <li>• WCAG AA accessibility contrast</li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-[#080D1A] border border-slate-800 rounded-lg text-xs text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Phase 5 culminates in a formal User Acceptance Testing (UAT) sign-off with the NEO Transport operations team.
              </span>
              <span className="font-mono text-emerald-400 text-[11px]">Strict Acceptance Criteria</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 18: DEPLOYMENT & LAUNCH
      // ----------------------------------------------------
      case 18:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-8 space-y-4">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-sm text-slate-400 mt-1 max-w-3xl">{slide.summary}</p>
            </div>

            {/* 10-Step Launch Sequence Graphic */}
            <div className="my-auto space-y-3">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs font-mono">
                {[
                  { step: '01', title: 'Staging Final Sign-Off', desc: 'Client UAT acceptance' },
                  { step: '02', title: 'Prod Secrets Config', desc: 'Encrypted Vercel env vars' },
                  { step: '03', title: 'Database Migration', desc: 'Supabase London schema' },
                  { step: '04', title: 'DNS CNAME Switch', desc: 'Subdomain delegation' },
                  { step: '05', title: 'SSL / TLS Verification', desc: 'Automated HTTPS certs' },
                  { step: '06', title: 'API Keys Validation', desc: 'Production Maps & Stripe' },
                  { step: '07', title: 'Rehearsal Booking', desc: 'Live end-to-end test run' },
                  { step: '08', title: 'Staff Portal Walkthrough', desc: 'Dispatcher team training' },
                  { step: '09', title: 'Public Customer Cutover', desc: 'Subdomains open live' },
                  { step: '10', title: '30-Day Hypercare', desc: 'Included warranty period' }
                ].map((s) => (
                  <div key={s.step} className="p-2.5 bg-[#0E1524] border border-slate-800 rounded-lg">
                    <div className="text-[11px] text-blue-400 font-bold mb-1">{s.step}.</div>
                    <div className="text-slate-200 font-semibold text-[11px] leading-tight mb-1">{s.title}</div>
                    <div className="text-[10px] text-slate-400 font-sans">{s.desc}</div>
                  </div>
                ))}
              </div>

              {/* Hypercare Callout */}
              <div className="p-3 bg-gradient-to-r from-blue-950/60 to-purple-950/60 border border-blue-900/60 rounded-xl flex items-center justify-between text-xs">
                <div className="space-y-0.5">
                  <div className="font-bold text-white">Included 30-Day Hypercare Warranty</div>
                  <div className="text-slate-300 text-[11px]">
                    Direct Slack / phone access to HEEM Digital engineers during the initial 30 days of live customer freight bookings.
                  </div>
                </div>
                <span className="font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-900 text-xs">
                  Zero Additional Fee
                </span>
              </div>
            </div>

            <div className="p-3 bg-[#080D1A] border border-slate-800 rounded-lg text-xs text-slate-400 flex items-center justify-between">
              <span>Managed release with zero downtime on your existing neotransport.co.uk public website.</span>
              <span className="font-mono text-blue-400">Zero Risk Cutover</span>
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 19: ROADMAP INTERACTIVE
      // ----------------------------------------------------
      case 19:
        return (
          <div className="h-full flex flex-col justify-between p-4 sm:p-6 space-y-3">
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-slate-800 mb-2">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{slide.title}</h2>
              <p className="text-xs text-slate-400">{slide.summary}</p>
            </div>

            <div className="flex-1 min-h-[380px]">
              <RoadmapTimeline />
            </div>
          </div>
        );

      // ----------------------------------------------------
      // SLIDE 20: NEXT STEPS & ACTION PLAN
      // ----------------------------------------------------
      case 20:
        return (
          <div className="h-full flex flex-col justify-between p-6 sm:p-10 space-y-4 relative overflow-hidden bg-gradient-to-br from-[#0B0F19] via-[#080C14] to-[#04060A]">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">{slide.eyebrow}</span>
                <span className="text-xs font-mono text-slate-400">SLIDE {slide.numberStr} / {totalSlides}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                LET'S TURN THE CONCEPT INTO A WORKING PLATFORM.
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl font-medium">
                Immediate 7-Step Kick-Off Sequence to Begin Phase 1 Implementation
              </p>
            </div>

            {/* 7 Action Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-auto text-xs">
              <div className="space-y-2">
                <div className="p-2.5 bg-[#0E1524] border border-slate-800 rounded-lg flex items-start gap-3">
                  <span className="font-mono text-blue-400 font-bold text-sm">01.</span>
                  <div>
                    <div className="font-semibold text-white">Review Existing Figma Demo</div>
                    <div className="text-[11px] text-slate-400">60-minute joint review with HEEM Digital lead engineers.</div>
                  </div>
                </div>

                <div className="p-2.5 bg-[#0E1524] border border-slate-800 rounded-lg flex items-start gap-3">
                  <span className="font-mono text-blue-400 font-bold text-sm">02.</span>
                  <div>
                    <div className="font-semibold text-white">Confirm Portal Workflows</div>
                    <div className="text-[11px] text-slate-400">Lock down customer booking fields and dispatcher actions.</div>
                  </div>
                </div>

                <div className="p-2.5 bg-[#0E1524] border border-slate-800 rounded-lg flex items-start gap-3">
                  <span className="font-mono text-blue-400 font-bold text-sm">03.</span>
                  <div>
                    <div className="font-semibold text-white">Finalize Technical Architecture</div>
                    <div className="text-[11px] text-slate-400">Approve database entity relationships and security rules.</div>
                  </div>
                </div>

                <div className="p-2.5 bg-[#0E1524] border border-slate-800 rounded-lg flex items-start gap-3">
                  <span className="font-mono text-blue-400 font-bold text-sm">04.</span>
                  <div>
                    <div className="font-semibold text-white">Confirm Integration Providers</div>
                    <div className="text-[11px] text-slate-400">Select Google Maps API tier, Stripe, and transactional emails.</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 bg-[#0E1524] border border-slate-800 rounded-lg flex items-start gap-3">
                  <span className="font-mono text-blue-400 font-bold text-sm">05.</span>
                  <div>
                    <div className="font-semibold text-white">Provision Cloud Environments</div>
                    <div className="text-[11px] text-slate-400">Configure DNS subdomains and Supabase UK project.</div>
                  </div>
                </div>

                <div className="p-2.5 bg-[#0E1524] border border-slate-800 rounded-lg flex items-start gap-3">
                  <span className="font-mono text-blue-400 font-bold text-sm">06.</span>
                  <div>
                    <div className="font-semibold text-white">Agree Milestone Schedule</div>
                    <div className="text-[11px] text-slate-400">Lock in sprint delivery dates and client review gates.</div>
                  </div>
                </div>

                <div className="p-2.5 bg-[#0E1524] border border-emerald-500/40 rounded-lg flex items-start gap-3 bg-emerald-950/20">
                  <span className="font-mono text-emerald-400 font-bold text-sm">07.</span>
                  <div>
                    <div className="font-semibold text-emerald-300">Commence Phase 1 Development</div>
                    <div className="text-[11px] text-slate-300">Engineering kicks off with weekly progress demonstrations.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Statement Banner */}
            <div className="p-4 bg-gradient-to-r from-blue-900/40 via-[#0E1524] to-blue-900/40 border border-blue-500/30 rounded-xl text-center space-y-1">
              <div className="text-sm font-semibold text-white">
                A better booking experience for customers. A centralised management system for NEO operations. A connected digital foundation for future growth.
              </div>
              <div className="font-mono text-xs text-blue-400 font-bold tracking-widest pt-1">
                NEO TRANSPORT × HEEM DIGITAL
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {renderSlideContent()}
    </div>
  );
};

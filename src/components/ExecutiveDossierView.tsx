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
import { CheckCircle2, ShieldCheck, ArrowRight, FileText, Layers, ExternalLink } from 'lucide-react';

interface ExecutiveDossierViewProps {
  slides: SlideData[];
}

export const ExecutiveDossierView: React.FC<ExecutiveDossierViewProps> = ({ slides }) => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 space-y-12">
      {/* Dossier Header Document Cover */}
      <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#0A0F1D] border border-slate-800 space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-slate-800">
          <span>DOCUMENT REF: HEEM-NEO-2026-V1</span>
          <span className="text-blue-400">EXECUTIVE SOFTWARE IMPLEMENTATION DOSSIER</span>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
            HEEM DIGITAL / DIGITAL PRODUCT DEVELOPMENT
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            NEO TRANSPORT
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-300">
            Custom Booking & Operational Management Portal
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed pt-2">
            A comprehensive, phased technical blueprint detailing the transition from existing Figma wireframes to a live, production-grade web application with customer self-service, administrative dispatch controls, cloud infrastructure, and UK logistics integrations.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>Prepared for: <strong className="text-white">NEO Transport Ltd</strong></div>
          <div>Prepared by: <strong className="text-blue-400">HEEM Digital Product Team</strong></div>
          <div>Status: <strong className="text-emerald-400">Verified Technical Proposal</strong></div>
        </div>
      </div>

      {/* Sections Sequence */}
      <div className="space-y-16">
        {slides.map((slide) => {
          return (
            <section 
              key={slide.id} 
              id={`section-${slide.numberStr}`}
              className="p-6 sm:p-8 rounded-xl bg-[#090F1C] border border-slate-800/80 space-y-5 scroll-mt-20 print-page"
            >
              {/* Slide Section Eyebrow & Number */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-900">
                    SLIDE {slide.numberStr}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {slide.categoryLabel}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-500">
                  {slide.tags.join(' · ')}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <div className="text-xs font-mono uppercase text-blue-400 tracking-wider mb-1">
                  {slide.eyebrow}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {slide.title}
                </h3>
                {slide.subtitle && (
                  <h4 className="text-sm font-medium text-slate-300 mt-1">
                    {slide.subtitle}
                  </h4>
                )}
              </div>

              {/* Summary Prose */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {slide.summary}
              </p>

              {/* Embedded Interactive Tool if applicable */}
              {slide.interactiveComponent === 'FigmaAuditViewer' && (
                <div className="pt-2">
                  <FigmaAuditViewer />
                </div>
              )}

              {slide.interactiveComponent === 'CustomerPortalMockup' && (
                <div className="pt-2">
                  <CustomerPortalMockup />
                </div>
              )}

              {slide.interactiveComponent === 'AdminPortalMockup' && (
                <div className="pt-2">
                  <AdminPortalMockup />
                </div>
              )}

              {slide.interactiveComponent === 'BackendArchitectureDiagram' && (
                <div className="pt-2">
                  <BackendArchitectureDiagram />
                </div>
              )}

              {slide.interactiveComponent === 'MapsSimulator' && (
                <div className="pt-2">
                  <MapsSimulator />
                </div>
              )}

              {slide.interactiveComponent === 'TrackingTimeline' && (
                <div className="pt-2">
                  <TrackingTimeline />
                </div>
              )}

              {slide.interactiveComponent === 'InvoicePaymentSimulator' && (
                <div className="pt-2">
                  <InvoicePaymentSimulator />
                </div>
              )}

              {slide.interactiveComponent === 'HostingTopology' && (
                <div className="pt-2">
                  <HostingTopology />
                </div>
              )}

              {slide.interactiveComponent === 'ClientChecklist' && (
                <div className="pt-2">
                  <ClientChecklist />
                </div>
              )}

              {slide.interactiveComponent === 'RoadmapTimeline' && (
                <div className="pt-2">
                  <RoadmapTimeline />
                </div>
              )}

              {/* Editorial Key Takeaway Box */}
              <div className="p-3 bg-[#0D1525] border border-slate-800 rounded-lg text-xs space-y-1">
                <span className="font-mono text-[10px] text-blue-400 uppercase tracking-wider block">
                  Strategic Presentation Context:
                </span>
                <p className="text-slate-400 italic">
                  "{slide.speakerNotes}"
                </p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

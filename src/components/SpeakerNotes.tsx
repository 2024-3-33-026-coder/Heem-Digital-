import React from 'react';
import { MessageSquare, X, Lightbulb, HelpCircle, Target } from 'lucide-react';
import { SlideData } from '../types/presentation';

interface SpeakerNotesProps {
  slide: SlideData;
  onClose: () => void;
}

export const SpeakerNotes: React.FC<SpeakerNotesProps> = ({ slide, onClose }) => {
  return (
    <div className="no-print bg-[#0B101D] border-t border-slate-800 p-4 transition-all text-xs z-30 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-4">
        {/* Header and key objective */}
        <div className="md:w-1/3 space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-400" />
              <span className="font-bold text-slate-200">Presenter Notes & Talking Points</span>
            </div>
            <span className="font-mono text-[10px] text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900">
              Slide {slide.numberStr} / 20
            </span>
          </div>

          <div className="p-2 bg-[#0E1526] border border-slate-800 rounded">
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1 mb-1">
              <Target className="w-3 h-3 text-emerald-400" />
              Presentation Objective
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {slide.category === 'overview' && 'Establish credibility, partnership tone, and clear vision from Figma prototype to working cloud application.'}
              {slide.category === 'design' && 'Demonstrate thorough respect for their existing Figma assets while defining the exact technical bridge to code.'}
              {slide.category === 'customer-portal' && 'Showcase how easy booking and tracking will be for their customers, driving customer retention and repeat freight.'}
              {slide.category === 'admin-portal' && 'Demonstrate operational efficiency: zero dispatch bottlenecks, clear job allocation, and audit trails.'}
              {slide.category === 'architecture' && 'Reassure technical decision-makers on reliability, UK GDPR data residency, security, and low cloud hosting costs.'}
              {slide.category === 'integrations' && 'Set clear technical expectations: what is included in core build vs third-party telematics/Maps dependencies.'}
              {slide.category === 'governance' && 'Eliminate client friction by confirming what is already approved and providing a clear, low-friction checklist.'}
              {slide.category === 'roadmap' && 'Instill total confidence in phased, risk-mitigated delivery with formal sign-off gates at every milestone.'}
            </p>
          </div>
        </div>

        {/* Presenter Talking Points */}
        <div className="flex-1 space-y-1.5">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
            <Lightbulb className="w-3 h-3 text-amber-400" />
            Key Strategic Points to Verbalize
          </div>
          <div className="p-2.5 bg-[#0E1526] border border-slate-800 rounded text-slate-300 text-xs leading-relaxed">
            {slide.speakerNotes}
          </div>
        </div>

        {/* Suggested Client Engagement Question */}
        <div className="md:w-1/4 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-blue-400" />
              Engagement Prompt
            </span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
              title="Close Speaker Notes"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="p-2 bg-[#0E1526] border border-slate-800 rounded text-[11px] text-blue-200/90 italic">
            "{slide.id === 3 ? 'Does this cover all the primary components you designed in Figma?' : 
              slide.id === 9 ? 'Do you currently quote based on direct Google Maps road mileage or fixed regional zones?' :
              slide.id === 10 ? 'Would your dispatchers prefer manual status clicks in Admin, or do you have a telematics API ready?' :
              slide.id === 11 ? 'Do most of your clients pay on 30-day invoice credit or by card?' :
              slide.id === 15 ? 'Who on your team should we liaise with for DNS CNAME records?' :
              'Does this approach align with your operational workflow?'}"
          </div>
        </div>
      </div>
    </div>
  );
};

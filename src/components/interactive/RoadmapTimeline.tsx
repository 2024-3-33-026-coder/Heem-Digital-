import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  FileCheck2, 
  Flag,
  Layers,
  ChevronRight
} from 'lucide-react';
import { RoadmapPhase } from '../../types/presentation';

const PHASES: RoadmapPhase[] = [
  {
    phaseNumber: 1,
    title: 'Discovery & Specification',
    objective: 'Translate existing Figma prototype into an approved technical blueprint, user flows, and database schema.',
    durationEstimate: 'Phase 1 Milestone',
    keyActivities: [
      'Detailed audit of Figma wireframes and missing interaction states',
      'Confirm dispatch business rules, emergency booking criteria, and vehicle types',
      'Specify PostgreSQL relational schema, entity relationships, and RLS policies',
      'Finalize Google Maps API and telematics integration boundaries'
    ],
    deliverables: [
      'Approved Technical Implementation Specification document',
      'Final Customer & Admin user flow journey diagrams',
      'Staging and Production cloud environment provisioning'
    ],
    approvalMilestone: 'Milestone 1: Technical Architecture & Scope Sign-Off',
    dependencies: [
      'Review meeting with NEO Operations and Management',
      'Confirmation of remaining technical access items (Checklist Slide 15)'
    ]
  },
  {
    phaseNumber: 2,
    title: 'Customer Portal Development',
    objective: 'Build the responsive customer-facing booking and self-service web application.',
    durationEstimate: 'Phase 2 Milestone',
    keyActivities: [
      'Build responsive Customer Dashboard (Standby account, today jobs, spend cards)',
      'Implement multi-step booking wizard with UK postcode address autocomplete',
      'Build shipment tracking interface and consignment history tables',
      'Implement quotation request flow and invoice document viewing'
    ],
    deliverables: [
      'Fully functional Customer Portal connected to staging API',
      'Interactive customer booking demo on portal.staging.neotransport.co.uk',
      'Client preview review session'
    ],
    approvalMilestone: 'Milestone 2: Customer Portal Functionality Walkthrough',
    dependencies: [
      'Approval of Milestone 1 specifications',
      'Google Maps API key for autocomplete'
    ]
  },
  {
    phaseNumber: 3,
    title: 'Admin Management Portal',
    objective: 'Develop the internal operations and dispatch management desk for authorised staff.',
    durationEstimate: 'Phase 3 Milestone',
    keyActivities: [
      'Build Admin Operations Dashboard with active dispatch KPIs and emergency queue',
      'Implement consignment management table with status updating engine',
      'Build customer directory and credit limit management',
      'Configure Role-Based Access Control (Dispatcher vs Finance vs Super Admin)'
    ],
    deliverables: [
      'Functional Admin Operations Desk on admin.staging.neotransport.co.uk',
      'Dispatch workflow review with NEO Operations team',
      'Status change and internal notes audit logging'
    ],
    approvalMilestone: 'Milestone 3: Operations & Dispatch Workflow Review',
    dependencies: [
      'Confirmation of NEO staff roles and permission boundaries'
    ]
  },
  {
    phaseNumber: 4,
    title: 'Backend & External Integrations',
    objective: 'Connect both frontend portals to the unified PostgreSQL database and external services.',
    durationEstimate: 'Phase 4 Milestone',
    keyActivities: [
      'Deploy Supabase PostgreSQL database tables and Row-Level Security rules',
      'Connect transactional email notifications (booking confirmations, status updates)',
      'Implement selected tracking option (Admin status engine or telematics API)',
      'Implement invoice PDF generator and online payment gateway webhooks'
    ],
    deliverables: [
      'Unified end-to-end data synchronization between portals',
      'Tested transactional email templates with NEO branding',
      'Working document storage vault for electronic PODs'
    ],
    approvalMilestone: 'Milestone 4: Integrated Staging Platform Sign-Off',
    dependencies: [
      'DNS records for transactional email verification',
      'Approval of payment provider (Stripe) and invoice layouts'
    ]
  },
  {
    phaseNumber: 5,
    title: 'Testing, QA & Client UAT',
    objective: 'Rigorous end-to-end quality assurance, security validation, and client user acceptance testing.',
    durationEstimate: 'Phase 5 Milestone',
    keyActivities: [
      'Execute cross-device responsiveness testing (Mobile, tablet, desktop monitors)',
      'Security audit: Row-Level Security penetration test and permission verification',
      'Conduct simulated test bookings with realistic UK consignment data',
      'Client team hands-on testing and feedback resolution'
    ],
    deliverables: [
      'Quality Assurance & Security Audit report',
      'Completed User Acceptance Testing (UAT) sign-off register',
      'Release Candidate build ready for production deployment'
    ],
    approvalMilestone: 'Milestone 5: Formal Client Acceptance Sign-Off',
    dependencies: [
      'Provision of sample test records and client team availability for UAT'
    ]
  },
  {
    phaseNumber: 6,
    title: 'Production Launch & Handover',
    objective: 'Execute production DNS cutover, live deployment, documentation handover, and launch support.',
    durationEstimate: 'Phase 6 Milestone',
    keyActivities: [
      'Configure production Vercel environments and live PostgreSQL database',
      'Execute DNS CNAME configuration for portal.neotransport.co.uk & admin domain',
      'Verify SSL encryption, automated backups, and live API endpoints',
      'Conduct administrator training walkthrough and deliver complete documentation'
    ],
    deliverables: [
      'Live, deployed Customer Portal and Admin Operations Portal on client subdomains',
      'Complete administrator documentation and technical architecture runbook',
      'Post-launch 30-day hypercare warranty and support period'
    ],
    approvalMilestone: 'Milestone 6: Production Launch & Operational Handover',
    dependencies: [
      'DNS access and production deployment approval'
    ]
  }
];

export const RoadmapTimeline: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<RoadmapPhase>(PHASES[0]);

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full">
      {/* Header Bar */}
      <div className="bg-[#0E1626] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Calendar className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-sm text-white">Phased Development Roadmap & Governance Framework</span>
          <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900">
            6 Phased Milestones · Risk-Controlled Delivery
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span>Agile Sprint Cycles</span>
          <span>·</span>
          <span>Milestone Sign-Off Gates</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 overflow-y-auto">
        {/* Left: Phased Stage Stepper Cards */}
        <div className="lg:col-span-5 space-y-2">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
            Phased Delivery Sequence:
          </div>

          {PHASES.map((phase) => {
            const isSelected = selectedPhase.phaseNumber === phase.phaseNumber;
            return (
              <button
                key={phase.phaseNumber}
                onClick={() => setSelectedPhase(phase)}
                className={`w-full p-2.5 rounded-lg border text-left transition-all flex items-center justify-between ${
                  isSelected 
                    ? 'bg-blue-950/60 border-blue-500 shadow-md text-white' 
                    : 'bg-[#0E1524] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    0{phase.phaseNumber}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">{phase.title}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5 truncate max-w-[200px]">
                      {phase.approvalMilestone.split(':')[0]}
                    </div>
                  </div>
                </div>

                <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-600'}`} />
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Phase Inspector & Milestone Gate */}
        <div className="lg:col-span-7 bg-[#0E1524] border border-slate-800 rounded-lg p-4 flex flex-col justify-between text-xs space-y-3">
          <div>
            <div className="flex items-start justify-between pb-2.5 border-b border-slate-800 mb-3">
              <div>
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                  Phase 0{selectedPhase.phaseNumber} Detailed Breakdown
                </span>
                <h4 className="text-base font-bold text-white mt-0.5">{selectedPhase.title}</h4>
              </div>

              <span className="text-xs font-mono bg-blue-950 text-blue-300 border border-blue-800 px-2.5 py-1 rounded">
                Gated Milestone
              </span>
            </div>

            {/* Objective */}
            <div className="mb-3 p-2.5 bg-[#121A2D] border border-slate-800 rounded">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Strategic Objective
              </span>
              <p className="text-slate-200 text-xs leading-relaxed">
                {selectedPhase.objective}
              </p>
            </div>

            {/* Key activities & Deliverables in 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                  Core Engineering Activities:
                </span>
                <ul className="space-y-1.5 text-[11px] text-slate-300">
                  {selectedPhase.keyActivities.map((act, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-blue-400 font-mono">▸</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block mb-1.5">
                  Concrete Deliverables:
                </span>
                <ul className="space-y-1.5 text-[11px] text-slate-300">
                  {selectedPhase.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Milestone Gate & Client Dependency */}
            <div className="p-2.5 bg-[#090F1C] border border-blue-900/60 rounded space-y-1.5">
              <div className="flex items-center gap-2 text-blue-300 font-semibold text-xs">
                <Flag className="w-3.5 h-3.5 text-blue-400" />
                {selectedPhase.approvalMilestone}
              </div>
              <div className="text-[11px] text-slate-400">
                <span className="text-slate-300 font-medium">Phase Dependencies: </span>
                {selectedPhase.dependencies.join(' · ')}
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between font-mono">
            <span>Progressive Approval Model</span>
            <span className="text-emerald-400">Zero Unverified Surprises</span>
          </div>
        </div>
      </div>
    </div>
  );
};

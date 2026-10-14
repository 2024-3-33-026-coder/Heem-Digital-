import React, { useState } from 'react';
import { 
  CheckSquare, 
  Copy, 
  Check, 
  Filter, 
  HelpCircle, 
  AlertCircle, 
  Key, 
  Server, 
  CreditCard, 
  Map, 
  Truck, 
  Mail, 
  CheckCircle2,
  Lock
} from 'lucide-react';
import { ClientChecklistItem } from '../../types/presentation';

const CHECKLIST_ITEMS: ClientChecklistItem[] = [
  // A. Domain & Hosting
  {
    id: 'dns-subdomains',
    category: 'Domain & Hosting',
    title: 'DNS Access for Subdomain Delegation',
    description: 'Access to DNS registrar (e.g., Cloudflare, GoDaddy, 123-Reg) to configure CNAME records for portal.neotransport.co.uk and admin.neotransport.co.uk.',
    status: 'required',
    impact: 'Critical',
    clientContactRole: 'IT / Webmaster',
    actionRequired: 'Provide DNS delegated access or designate IT contact to add two CNAME records provided by HEEM Digital.'
  },
  {
    id: 'vercel-hosting-ownership',
    category: 'Domain & Hosting',
    title: 'Hosting Account Confirmation',
    description: 'Confirmation whether production Vercel project will be hosted on NEO Transport enterprise team or managed by HEEM Digital on client behalf.',
    status: 'awaiting-confirmation',
    impact: 'High',
    clientContactRole: 'Director / Operations',
    actionRequired: 'Decide account billing ownership preference for the production hosting account.'
  },

  // B. Backend & Database
  {
    id: 'supabase-region-approval',
    category: 'Backend & Database',
    title: 'Supabase PostgreSQL UK Project Setup',
    description: 'Approval of Supabase managed PostgreSQL project in AWS London (eu-west-2) to ensure UK GDPR compliance and data sovereignty.',
    status: 'required',
    impact: 'Critical',
    clientContactRole: 'Managing Director',
    actionRequired: 'Sign off on Supabase production tier ($25/mo direct billing to client card).'
  },

  // C. Maps API
  {
    id: 'google-maps-credentials',
    category: 'Maps API & Routing',
    title: 'Google Cloud Platform Maps API Credentials',
    description: 'Access to Google Cloud console project with Places API, Geocoding API, and Routes API enabled with billing linked for address autocomplete.',
    status: 'required',
    impact: 'High',
    clientContactRole: 'IT / Operations',
    actionRequired: 'Invite HEEM Digital developer email to GCP project or generate restricted Maps API key.'
  },
  {
    id: 'distance-pricing-rules',
    category: 'Maps API & Routing',
    title: 'Distance Calculation & Rate Matrix Confirmation',
    description: 'Confirmation whether instant booking quotes should calculate prices automatically based on route mileage, vehicle type, and fuel surcharge rates.',
    status: 'awaiting-confirmation',
    impact: 'Medium',
    clientContactRole: 'Commercial Director',
    actionRequired: 'Provide commercial per-mile rate card and vehicle minimum charges if automated pricing is desired.'
  },

  // D. Tracking & Dispatch
  {
    id: 'tracking-provider-details',
    category: 'Tracking & Dispatch',
    title: 'Existing Fleet Telematics / TMS Details',
    description: 'Identification of current tracking or transport management software (e.g. Mandata, Webfleet, Samsara, or purely manual dispatch desk).',
    status: 'awaiting-confirmation',
    impact: 'High',
    clientContactRole: 'Transport Manager',
    actionRequired: 'Confirm whether telematics API integration is available, or proceed with Option A (Admin Portal manual status updates).'
  },
  {
    id: 'pod-format-standards',
    category: 'Tracking & Dispatch',
    title: 'Proof of Delivery (POD) Requirements',
    description: 'Specification of required POD fields: consignee signature capture, driver delivery photos, timestamp format, and retention period.',
    status: 'required',
    impact: 'High',
    clientContactRole: 'Operations Team',
    actionRequired: 'Supply sample copy of existing paper or digital POD consignment note.'
  },

  // E. Invoicing & Payments
  {
    id: 'invoice-template-sample',
    category: 'Invoicing & Payments',
    title: 'Invoice Layout & VAT Number Standards',
    description: 'Sample PDF invoice showing NEO Transport registered legal name, company number, VAT number, payment terms, and bank remittance details.',
    status: 'required',
    impact: 'High',
    clientContactRole: 'Finance Director',
    actionRequired: 'Email 1-2 redacted sample invoices to ensure portal layout matches your existing accounting format.'
  },
  {
    id: 'payment-gateway-selection',
    category: 'Invoicing & Payments',
    title: 'Online Payment Gateway Account (Stripe)',
    description: 'Decision on whether to accept online card settlements from customers in the portal, and provision of Stripe merchant account credentials.',
    status: 'awaiting-confirmation',
    impact: 'Medium',
    clientContactRole: 'Finance Director',
    actionRequired: 'Confirm whether card payments are required for first release or if BACS bank transfers are sufficient.'
  },

  // F. Notifications & Communications
  {
    id: 'email-domain-verification',
    category: 'Communications',
    title: 'Transactional Email Domain Verification',
    description: 'DKIM and SPF DNS records for dispatch@neotransport.co.uk to allow the portal to send automated booking confirmations and invoices.',
    status: 'required',
    impact: 'High',
    clientContactRole: 'IT / Webmaster',
    actionRequired: 'Add 2 DKIM TXT records to DNS to guarantee 100% email deliverability into client inboxes.'
  },
  {
    id: 'sms-alerts-approval',
    category: 'Communications',
    title: 'SMS Alerts for Emergency Bookings',
    description: 'Optional Twilio SMS integration to notify on-call transport managers when an emergency same-day booking is submitted after hours.',
    status: 'optional',
    impact: 'Medium',
    clientContactRole: 'Operations Manager',
    actionRequired: 'Confirm if SMS text message alerts are required in addition to email notifications.'
  },

  // G. Testing & Staging Records
  {
    id: 'sample-test-data',
    category: 'Testing & Launch',
    title: 'Anonymised Staging Test Data',
    description: '5-10 realistic sample consignment records, mock customer accounts, and common UK route pairs for realistic user acceptance testing (UAT).',
    status: 'required',
    impact: 'Medium',
    clientContactRole: 'Operations Lead',
    actionRequired: 'Provide sample test scenarios before Phase 5 QA commence.'
  }
];

export const ClientChecklist: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'required' | 'awaiting-confirmation' | 'optional'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [copied, setCopied] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(CHECKLIST_ITEMS[0].id);

  const categories = ['All', 'Domain & Hosting', 'Backend & Database', 'Maps API & Routing', 'Tracking & Dispatch', 'Invoicing & Payments', 'Communications', 'Testing & Launch'];

  const filteredItems = CHECKLIST_ITEMS.filter(item => {
    const matchesStatus = filter === 'all' || item.status === filter;
    const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
    return matchesStatus && matchesCategory;
  });

  const handleCopyChecklist = () => {
    const text = CHECKLIST_ITEMS.map((item, i) => 
      `${i + 1}. [${item.status.toUpperCase()}] ${item.title} (${item.category})\n   Required Action: ${item.actionRequired}\n   Contact: ${item.clientContactRole}\n`
    ).join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full">
      {/* Header Bar */}
      <div className="bg-[#0E1626] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CheckSquare className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-sm text-white">Client Technical Access & Integration Dependency Matrix</span>
          <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900">
            Remaining Technical Inputs
          </span>
        </div>

        <button
          onClick={handleCopyChecklist}
          className="text-xs bg-slate-800 hover:bg-slate-700 text-blue-300 border border-slate-700 px-3 py-1 rounded flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Checklist Copied to Clipboard!' : 'Copy Dependency Checklist'}</span>
        </button>
      </div>

      {/* Filter and Confirmed Context Strip */}
      <div className="p-3 bg-[#080D1A] border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-slate-400 text-[11px]">Status:</span>
          {(['all', 'required', 'awaiting-confirmation', 'optional'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-2 py-0.5 rounded text-[11px] font-medium capitalize transition-colors ${
                filter === s
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {s.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Already Confirmed Banner */}
        <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-900">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Already Provided: Figma Access, GitHub, Business Scope, Budget Approval. (No re-request needed)</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-3 grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 overflow-y-auto">
        {/* Left: Interactive Checklist List */}
        <div className="lg:col-span-7 space-y-2">
          {filteredItems.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div 
                key={item.id}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  isExpanded 
                    ? 'bg-blue-950/40 border-blue-500 shadow-md' 
                    : 'bg-[#0E1524] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5">
                      {item.status === 'required' && <AlertCircle className="w-4 h-4 text-amber-400" />}
                      {item.status === 'awaiting-confirmation' && <HelpCircle className="w-4 h-4 text-blue-400" />}
                      {item.status === 'optional' && <CheckCircle2 className="w-4 h-4 text-slate-400" />}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{item.title}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                        Category: {item.category} · Contact: {item.clientContactRole}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 ${
                    item.status === 'required'
                      ? 'bg-amber-950/80 text-amber-300 border-amber-800 font-bold'
                      : item.status === 'awaiting-confirmation'
                        ? 'bg-blue-950/80 text-blue-300 border-blue-800'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}>
                    {item.status === 'required' ? 'Required for Kick-off' : item.status === 'awaiting-confirmation' ? 'Awaiting Decision' : 'Optional Scope'}
                  </span>
                </div>

                {isExpanded && (
                  <div className="mt-2.5 pt-2.5 border-t border-slate-800/80 space-y-2 text-xs">
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {item.description}
                    </p>
                    <div className="p-2 bg-[#121A2C] border border-slate-800 rounded text-[11px]">
                      <span className="font-semibold text-blue-300">Action Required by NEO Transport: </span>
                      <span className="text-slate-300 font-mono text-[10px]">{item.actionRequired}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Technical Access Guidance & Security Assurance */}
        <div className="lg:col-span-5 bg-[#0E1524] border border-slate-800 rounded-lg p-3.5 flex flex-col justify-between text-xs space-y-3">
          <div>
            <div className="pb-2 border-b border-slate-800 mb-2.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">HEEM Digital Security Protocol</span>
              <h4 className="text-sm font-bold text-white">How Access Is Managed Securely</h4>
            </div>

            <div className="space-y-2.5 text-[11px] text-slate-300 leading-relaxed">
              <div className="p-2.5 bg-[#121A2D] border border-slate-800 rounded space-y-1">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  Principle of Least Privilege
                </div>
                <p className="text-slate-400">
                  We request invitation as collaborator or limited developer roles rather than primary root/owner credentials.
                </p>
              </div>

              <div className="p-2.5 bg-[#121A2D] border border-slate-800 rounded space-y-1">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-blue-400" />
                  Encrypted Secrets Management
                </div>
                <p className="text-slate-400">
                  All production API keys (Google Maps, Stripe, Supabase service roles) are stored in encrypted Vercel environment variables, never committed to git repositories.
                </p>
              </div>

              <div className="p-2.5 bg-[#121A2D] border border-slate-800 rounded space-y-1">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  Full Client Ownership Retention
                </div>
                <p className="text-slate-400">
                  NEO Transport remains the legal owner of all domain registrations, cloud accounts, database records, and intellectual property.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between font-mono">
            <span>Prepared by HEEM Digital</span>
            <span className="text-emerald-400">UK Compliance Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};

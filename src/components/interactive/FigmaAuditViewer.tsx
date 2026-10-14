import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Layout, 
  CreditCard, 
  Truck, 
  FileText, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';

interface Pin {
  id: string;
  title: string;
  category: string;
  badge: string;
  x: number; // percentage
  y: number; // percentage
  status: 'Ready in Wireframe' | 'Backend Connection Needed' | 'Integration Required';
  details: string;
  productionRequirement: string;
}

const PINS: Pin[] = [
  {
    id: 'standby',
    title: 'Standby Account Status',
    category: 'Customer Profile',
    badge: 'Account Tier',
    x: 22,
    y: 20,
    status: 'Ready in Wireframe',
    details: 'Displays current customer commercial tier, credit limit status, and dedicated account manager contact shortcut.',
    productionRequirement: 'Needs Supabase Auth user metadata + credit terms table in PostgreSQL.'
  },
  {
    id: 'today-jobs',
    title: "Today's Jobs Counter",
    category: 'Live Operations',
    badge: 'Operational KPI',
    x: 52,
    y: 20,
    status: 'Backend Connection Needed',
    details: 'Displays active dispatches, collections in transit, and scheduled deliveries due within the current 24-hour cycle.',
    productionRequirement: 'Requires automated database queries filtering active bookings by collection_date = CURRENT_DATE.'
  },
  {
    id: 'emergency',
    title: 'Emergency Bookings',
    category: 'Urgent Logistics',
    badge: 'Fast Track',
    x: 80,
    y: 20,
    status: 'Backend Connection Needed',
    details: 'Quick-dispatch workflow for urgent same-day or time-critical UK logistics jobs with instant priority notification to operations.',
    productionRequirement: 'Triggers high-priority flag in Admin dispatch queue + immediate transactional SMS/email to operations.'
  },
  {
    id: 'spend-invoices',
    title: 'Monthly Spend & Outstanding Invoices',
    category: 'Financial Summary',
    badge: 'Billing Snapshot',
    x: 35,
    y: 48,
    status: 'Backend Connection Needed',
    details: 'Real-time billing summary indicating total invoiced amount for the month and overdue balance requiring settlement.',
    productionRequirement: 'Direct integration with invoicing records and optional accounting software export.'
  },
  {
    id: 'quick-actions',
    title: 'Customer Quick Actions',
    category: 'Workflows',
    badge: 'Shortcuts',
    x: 75,
    y: 48,
    status: 'Ready in Wireframe',
    details: 'Fast-action grid: New Booking, Track Consignment, Download Proof of Delivery (POD), Pay Invoice, and Direct Dispatch Contact.',
    productionRequirement: 'Functional modal handlers and deep links into respective portal modules.'
  },
  {
    id: 'booking-table',
    title: 'Recent Consignment Records',
    category: 'Data Grid',
    badge: 'Shipment History',
    x: 50,
    y: 78,
    status: 'Ready in Wireframe',
    details: 'Recent delivery records with unique consignment numbers, route summary, status pills, and direct POD download buttons.',
    productionRequirement: 'Paginated server-side table with real-time status subscription.'
  }
];

export const FigmaAuditViewer: React.FC = () => {
  const [selectedPin, setSelectedPin] = useState<Pin>(PINS[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-full items-stretch">
      {/* Left: Interactive Wireframe Canvas Replica */}
      <div className="lg:col-span-8 bg-[#0B0F19] border border-slate-800 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden shadow-2xl">
        {/* Wireframe Mock Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="ml-2 font-mono text-slate-400">figma-prototype / neo-customer-portal / v1.2</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-mono text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              Interactive Wireframe Audit
            </span>
          </div>
        </div>

        {/* Wireframe UI Canvas with Interactive Pins */}
        <div className="relative my-3 p-4 rounded-lg bg-[#0E1524] border border-slate-800/80 flex-1 min-h-[300px] flex flex-col justify-between">
          {/* Top Bar of Customer Portal */}
          <div className="flex items-center justify-between bg-[#131D31] px-4 py-2.5 rounded-md border border-slate-700/60 mb-3">
            <div className="flex items-center gap-3">
              <div className="h-6 w-16 bg-blue-600/30 border border-blue-500/50 rounded flex items-center justify-center font-bold text-[11px] text-blue-300 tracking-wider">
                NEO
              </div>
              <span className="text-xs text-slate-300 font-medium">Customer Portal</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>Account: Acme Distribution Ltd</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className={`p-3 rounded border transition-all ${selectedPin.id === 'standby' ? 'bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-500/10' : 'bg-[#111A2C] border-slate-800'}`}>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Account Tier</div>
              <div className="text-sm font-semibold text-white mt-1">Standby Partner</div>
              <div className="text-[11px] text-emerald-400 mt-1">Credit Limit: £25,000</div>
            </div>

            <div className={`p-3 rounded border transition-all ${selectedPin.id === 'today-jobs' ? 'bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-500/10' : 'bg-[#111A2C] border-slate-800'}`}>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Today's Jobs</div>
              <div className="text-sm font-semibold text-white mt-1">7 Active Consignments</div>
              <div className="text-[11px] text-blue-400 mt-1">3 Collected · 4 In Transit</div>
            </div>

            <div className={`p-3 rounded border transition-all ${selectedPin.id === 'emergency' ? 'bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-500/10' : 'bg-[#111A2C] border-slate-800'}`}>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Emergency Booking</div>
              <div className="text-sm font-semibold text-amber-400 mt-1">Urgent Same-Day</div>
              <div className="text-[11px] text-slate-400 mt-1">Direct Express Dispatch</div>
            </div>
          </div>

          {/* Middle Row: Quick Actions & Financials */}
          <div className="grid grid-cols-12 gap-3 mb-3">
            <div className={`col-span-5 p-3 rounded border transition-all ${selectedPin.id === 'spend-invoices' ? 'bg-blue-950/40 border-blue-500' : 'bg-[#111A2C] border-slate-800'}`}>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Financial Overview</div>
              <div className="flex justify-between items-baseline mt-2">
                <span className="text-xs text-slate-300">Monthly Spend:</span>
                <span className="text-sm font-bold text-white font-mono">£18,450.00</span>
              </div>
              <div className="flex justify-between items-baseline mt-1 pt-1 border-t border-slate-800/80">
                <span className="text-xs text-amber-300">Outstanding:</span>
                <span className="text-xs font-bold text-amber-400 font-mono">£2,340.00 (Due 14d)</span>
              </div>
            </div>

            <div className={`col-span-7 p-3 rounded border transition-all ${selectedPin.id === 'quick-actions' ? 'bg-blue-950/40 border-blue-500' : 'bg-[#111A2C] border-slate-800'}`}>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-2">Quick Action Shortcuts</div>
              <div className="grid grid-cols-3 gap-1.5">
                <span className="text-[11px] bg-blue-600/20 text-blue-300 border border-blue-500/30 rounded py-1 px-2 text-center font-medium">+ New Booking</span>
                <span className="text-[11px] bg-slate-800/80 text-slate-200 border border-slate-700/60 rounded py-1 px-2 text-center">Track Consignment</span>
                <span className="text-[11px] bg-slate-800/80 text-slate-200 border border-slate-700/60 rounded py-1 px-2 text-center">Download POD</span>
                <span className="text-[11px] bg-slate-800/80 text-slate-200 border border-slate-700/60 rounded py-1 px-2 text-center">Pay Invoices</span>
                <span className="text-[11px] bg-slate-800/80 text-slate-200 border border-slate-700/60 rounded py-1 px-2 text-center">Request Quote</span>
                <span className="text-[11px] bg-slate-800/80 text-slate-200 border border-slate-700/60 rounded py-1 px-2 text-center">Dispatch Helpline</span>
              </div>
            </div>
          </div>

          {/* Bottom Table */}
          <div className={`p-3 rounded border transition-all ${selectedPin.id === 'booking-table' ? 'bg-blue-950/40 border-blue-500' : 'bg-[#111A2C] border-slate-800'}`}>
            <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 pb-1.5 border-b border-slate-800">
              <span>Consignment Ref</span>
              <span>Origin → Destination</span>
              <span>Vehicle</span>
              <span>Status</span>
              <span>Action</span>
            </div>
            <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-800/60 text-slate-300">
              <span className="font-mono text-blue-400">NEO-2489</span>
              <span>Birmingham → Heathrow Airport</span>
              <span className="text-slate-400">Luton Van</span>
              <span className="text-amber-400 text-[11px] font-medium">In Transit</span>
              <span className="text-slate-400 text-[11px] hover:text-white cursor-pointer">View Details →</span>
            </div>
            <div className="flex items-center justify-between text-xs py-1.5 text-slate-300">
              <span className="font-mono text-blue-400">NEO-2488</span>
              <span>Manchester Hub → Bristol Depot</span>
              <span className="text-slate-400">Artic 44T</span>
              <span className="text-emerald-400 text-[11px] font-medium">Delivered (POD Ready)</span>
              <span className="text-blue-400 text-[11px] hover:underline cursor-pointer">Download POD</span>
            </div>
          </div>

          {/* Interactive Inspection Pins overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {PINS.map((pin) => {
              const isSelected = selectedPin.id === pin.id;
              return (
                <button
                  key={pin.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPin(pin);
                  }}
                  className={`pointer-events-auto absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all ${
                    isSelected 
                      ? 'w-7 h-7 bg-blue-500 text-white shadow-lg shadow-blue-500/50 ring-4 ring-blue-500/20 z-20 scale-110' 
                      : 'w-5 h-5 bg-slate-900/90 text-blue-400 border border-blue-400/60 hover:bg-blue-600 hover:text-white z-10'
                  } rounded-full cursor-pointer`}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  title={pin.title}
                >
                  <span className="text-[10px] font-bold font-mono">
                    {pin.id === 'standby' ? '1' : pin.id === 'today-jobs' ? '2' : pin.id === 'emergency' ? '3' : pin.id === 'spend-invoices' ? '4' : pin.id === 'quick-actions' ? '5' : '6'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Caption */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Click numbered audit pins above or select cards on the right to inspect technical implementation needs.
          </span>
          <span className="text-slate-500 font-mono">Figma Wireframe Verified</span>
        </div>
      </div>

      {/* Right: Technical Audit & Production Transition Analysis */}
      <div className="lg:col-span-4 flex flex-col justify-between gap-3 bg-[#0E1524] border border-slate-800 rounded-xl p-4">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] uppercase font-mono tracking-wider text-blue-400 font-semibold">
              Component Audit
            </span>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
              selectedPin.status === 'Ready in Wireframe'
                ? 'bg-blue-950/60 text-blue-300 border-blue-800'
                : 'bg-amber-950/60 text-amber-300 border-amber-800'
            }`}>
              {selectedPin.status}
            </span>
          </div>

          <h4 className="text-base font-bold text-white mb-1">
            {selectedPin.title}
          </h4>
          <div className="text-xs text-slate-400 mb-3">
            Category: <span className="text-slate-200">{selectedPin.category}</span>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-[#131D31] border border-slate-800 rounded-lg">
              <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Layout className="w-3.5 h-3.5 text-blue-400" />
                Current Figma Wireframe State
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {selectedPin.details}
              </p>
            </div>

            <div className="p-3 bg-[#131D31] border border-slate-800 rounded-lg">
              <div className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                Required Production Architecture
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono text-[11px]">
                {selectedPin.productionRequirement}
              </p>
            </div>
          </div>
        </div>

        {/* Quick selector buttons */}
        <div className="pt-3 border-t border-slate-800">
          <div className="text-[10px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
            Audit Checklist Navigator
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {PINS.map((pin, i) => (
              <button
                key={pin.id}
                onClick={() => setSelectedPin(pin)}
                className={`text-[11px] py-1.5 px-2 rounded text-left truncate transition-colors ${
                  selectedPin.id === pin.id
                    ? 'bg-blue-600 text-white font-medium'
                    : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {i + 1}. {pin.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

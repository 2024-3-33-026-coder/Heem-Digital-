import React, { useState } from 'react';
import { 
  Shield, 
  Users, 
  Truck, 
  Filter, 
  Search, 
  Edit3, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Eye, 
  ArrowUpDown,
  FileSpreadsheet
} from 'lucide-react';

interface AdminBooking {
  id: string;
  customer: string;
  route: string;
  vehicle: string;
  status: 'Pending Dispatch' | 'Allocated' | 'In Transit' | 'Delivered' | 'Quoted';
  driver: string;
  value: string;
  urgency: 'Standard' | 'Emergency' | 'Critical SLA';
}

const INITIAL_BOOKINGS: AdminBooking[] = [
  {
    id: 'NEO-2490',
    customer: 'Rolls-Royce Aerospace',
    route: 'Derby DE24 → Filton BS34',
    vehicle: 'Luton Tail-Lift',
    status: 'Emergency' as any, // urgent flag
    driver: 'Assign Driver...',
    value: '£480.00',
    urgency: 'Emergency'
  },
  {
    id: 'NEO-2489',
    customer: 'Acme Automotive Ltd',
    route: 'Birmingham B24 → Heathrow TW6',
    vehicle: 'MWB Sprinter',
    status: 'In Transit',
    driver: 'Marcus Vance (Van 04)',
    value: '£315.00',
    urgency: 'Standard'
  },
  {
    id: 'NEO-2488',
    customer: 'Coventry Precision Eng.',
    route: 'Coventry CV3 → Sunderland SR5',
    vehicle: '44T Artic',
    status: 'Delivered',
    driver: 'Dave Higgins (Unit 12)',
    value: '£1,120.00',
    urgency: 'Standard'
  },
  {
    id: 'NEO-2487',
    customer: 'Midlands Pharma Logistics',
    route: 'Nottingham NG7 → Oxford OX3',
    vehicle: 'Temp-Controlled Van',
    status: 'Allocated',
    driver: 'Sarah Kelly (Van 09)',
    value: '£390.00',
    urgency: 'Critical SLA'
  }
];

export const AdminPortalMockup: React.FC = () => {
  const [bookings, setBookings] = useState<AdminBooking[]>(INITIAL_BOOKINGS);
  const [filter, setFilter] = useState<string>('All');
  const [selectedBooking, setSelectedBooking] = useState<AdminBooking>(INITIAL_BOOKINGS[0]);
  const [statusUpdateMessage, setStatusUpdateMessage] = useState<string | null>(null);

  const handleStatusChange = (bookingId: string, newStatus: any) => {
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: newStatus } : b));
    if (selectedBooking.id === bookingId) {
      setSelectedBooking(prev => ({ ...prev, status: newStatus }));
    }
    setStatusUpdateMessage(`Status for ${bookingId} updated to ${newStatus}. Customer notified.`);
    setTimeout(() => setStatusUpdateMessage(null), 3000);
  };

  const filteredBookings = filter === 'All' 
    ? bookings 
    : filter === 'Emergency' 
      ? bookings.filter(b => b.urgency === 'Emergency')
      : bookings.filter(b => b.status === filter);

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full">
      {/* Admin Top Header */}
      <div className="bg-[#0F172A] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="font-bold tracking-wider text-sm text-white">NEO OPS</span>
            <span className="text-xs font-mono text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800 flex items-center gap-1">
              <Shield className="w-3 h-3 text-purple-400" />
              ADMIN MANAGEMENT PORTAL
            </span>
          </div>
          <span className="hidden md:inline text-xs text-slate-400">· Operations & Dispatch Desk</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-[11px] font-mono">Logged in: Head of Operations</span>
          </div>
        </div>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-4 gap-2 p-3 bg-[#080D1A] border-b border-slate-800/80 text-xs">
        <div className="bg-[#0E1524] p-2.5 rounded border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Active Dispatches</div>
          <div className="text-lg font-bold text-white font-mono mt-0.5">14 Jobs</div>
          <div className="text-[10px] text-blue-400">4 in collection · 10 on highway</div>
        </div>

        <div className="bg-[#0E1524] p-2.5 rounded border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Emergency Queue</div>
          <div className="text-lg font-bold text-amber-400 font-mono mt-0.5">2 Urgent</div>
          <div className="text-[10px] text-amber-300">Immediate response required</div>
        </div>

        <div className="bg-[#0E1524] p-2.5 rounded border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Pending Quotes</div>
          <div className="text-lg font-bold text-purple-300 font-mono mt-0.5">3 Requests</div>
          <div className="text-[10px] text-purple-400">Avg turnaround: 12 mins</div>
        </div>

        <div className="bg-[#0E1524] p-2.5 rounded border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Today's Revenue</div>
          <div className="text-lg font-bold text-emerald-400 font-mono mt-0.5">£4,865.00</div>
          <div className="text-[10px] text-slate-400">18 completed consignments</div>
        </div>
      </div>

      {statusUpdateMessage && (
        <div className="bg-emerald-950/80 border-b border-emerald-800 px-4 py-1.5 text-xs text-emerald-300 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            {statusUpdateMessage}
          </span>
          <span className="text-[10px] font-mono text-emerald-400">Real-time sync to Customer Portal</span>
        </div>
      )}

      {/* Main Content Area: Table + Detail Inspector */}
      <div className="p-3 grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 overflow-y-auto">
        {/* Left: Bookings Table */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div>
            {/* Filter controls */}
            <div className="flex items-center justify-between mb-2 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 text-[11px]">Filter:</span>
                {['All', 'Emergency', 'In Transit', 'Delivered'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                      filter === f 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Showing {filteredBookings.length} bookings
              </span>
            </div>

            {/* Table */}
            <div className="border border-slate-800 rounded-lg overflow-hidden bg-[#0D1525]">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#090F1C] text-slate-400 text-[10px] uppercase font-mono border-b border-slate-800">
                  <tr>
                    <th className="py-2 px-2.5">Job Ref</th>
                    <th className="py-2 px-2.5">Customer</th>
                    <th className="py-2 px-2.5">Route</th>
                    <th className="py-2 px-2.5">Status</th>
                    <th className="py-2 px-2.5">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredBookings.map((b) => (
                    <tr 
                      key={b.id}
                      onClick={() => setSelectedBooking(b)}
                      className={`cursor-pointer transition-colors ${
                        selectedBooking.id === b.id ? 'bg-blue-950/40' : 'hover:bg-slate-900/60'
                      }`}
                    >
                      <td className="py-2 px-2.5 font-mono text-blue-400 font-semibold">{b.id}</td>
                      <td className="py-2 px-2.5 font-medium text-slate-200 truncate max-w-[120px]">{b.customer}</td>
                      <td className="py-2 px-2.5 text-slate-300 truncate max-w-[140px]">{b.route}</td>
                      <td className="py-2 px-2.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                          b.urgency === 'Emergency'
                            ? 'bg-red-950 text-red-300 border border-red-800 font-bold'
                            : b.status === 'In Transit'
                              ? 'bg-blue-950 text-blue-300 border border-blue-800'
                              : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        }`}>
                          {b.status}
                        </span>
                      </td>
                      <td className="py-2 px-2.5 font-mono font-bold text-white">{b.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 mt-2 flex items-center justify-between">
            <span>Click any consignment row to inspect internal notes & dispatch actions.</span>
            <span className="font-mono text-slate-500">Row-Level Security Active</span>
          </div>
        </div>

        {/* Right: Selected Booking Detail & Dispatch Action Panel */}
        <div className="lg:col-span-4 bg-[#0E1524] border border-slate-800 rounded-lg p-3 flex flex-col justify-between text-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2.5">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Selected Consignment</span>
                <div className="text-sm font-bold text-white font-mono">{selectedBooking.id}</div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900">
                {selectedBooking.value}
              </span>
            </div>

            <div className="space-y-2 mb-3">
              <div>
                <span className="text-[10px] text-slate-400 block">Customer Account</span>
                <span className="font-semibold text-slate-200">{selectedBooking.customer}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">Routing</span>
                <span className="text-slate-300 font-mono text-[11px]">{selectedBooking.route}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">Assigned Vehicle</span>
                <span className="text-slate-300">{selectedBooking.vehicle}</span>
              </div>
            </div>

            {/* Status Change Buttons for Admin */}
            <div className="pt-2 border-t border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                Update Dispatch Status:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={() => handleStatusChange(selectedBooking.id, 'In Transit')}
                  className="py-1 px-2 rounded text-[11px] bg-blue-900/60 hover:bg-blue-800 text-blue-200 border border-blue-700/60 text-center cursor-pointer"
                >
                  Mark In Transit
                </button>
                <button
                  onClick={() => handleStatusChange(selectedBooking.id, 'Delivered')}
                  className="py-1 px-2 rounded text-[11px] bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/60 text-center cursor-pointer"
                >
                  Mark Delivered (POD)
                </button>
              </div>
            </div>

            {/* Internal Ops Notes */}
            <div className="mt-3 p-2 bg-[#121A2D] border border-slate-800 rounded">
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                Internal Ops Notes
              </span>
              <p className="text-[11px] text-slate-300 italic">
                "Security clearance required at Gate 3. Driver carrying full PPE and photographic ID."
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 font-mono flex items-center justify-between">
            <span>Role: Administrator</span>
            <span className="text-purple-300">Audited Activity Log</span>
          </div>
        </div>
      </div>
    </div>
  );
};

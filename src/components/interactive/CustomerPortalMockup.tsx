import React, { useState } from 'react';
import { 
  PlusCircle, 
  Search, 
  Truck, 
  MapPin, 
  Calendar, 
  Clock, 
  FileCheck, 
  Download, 
  CreditCard, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Package
} from 'lucide-react';

export const CustomerPortalMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'booking' | 'tracking' | 'invoices'>('booking');
  const [vehicle, setVehicle] = useState('luton');
  const [serviceTier, setServiceTier] = useState('emergency');
  const [origin, setOrigin] = useState('Birmingham Logistics Hub (B24 8HX)');
  const [destination, setDestination] = useState('Heathrow World Cargo Terminal (TW6 3XZ)');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full">
      {/* Top Navigation Bar of Customer Portal */}
      <div className="bg-[#0D1527] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="font-bold tracking-wider text-sm text-white">NEO</span>
            <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-900">
              CUSTOMER PORTAL
            </span>
          </div>

          {/* Module Switcher Tabs */}
          <div className="flex items-center bg-[#070B14] p-0.5 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('booking')}
              className={`px-3 py-1 rounded-md transition-all font-medium ${
                activeTab === 'booking' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              1. New Booking Wizard
            </button>
            <button
              onClick={() => setActiveTab('tracking')}
              className={`px-3 py-1 rounded-md transition-all font-medium ${
                activeTab === 'tracking' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              2. Live Consignment Tracking
            </button>
            <button
              onClick={() => setActiveTab('invoices')}
              className={`px-3 py-1 rounded-md transition-all font-medium ${
                activeTab === 'invoices' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              3. Invoices & POD Archive
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="hidden md:inline font-mono">Acme Automotive UK</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="text-emerald-400 font-mono text-[11px]">Standby Active (£30k Limit)</span>
        </div>
      </div>

      {/* Main Interactive Screen Content */}
      <div className="p-4 flex-1 overflow-y-auto">
        {activeTab === 'booking' && (
          <div>
            {!bookingConfirmed ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Booking Form */}
                <div className="lg:col-span-8 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <PlusCircle className="w-4 h-4 text-blue-400" />
                      Create Consignment Booking
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400">Step 1 of 3: Route & Cargo Details</span>
                  </div>

                  {/* Route input pair */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-[#0E1524] border border-slate-800 rounded-lg">
                    <div>
                      <label className="text-[11px] font-medium text-slate-300 flex items-center gap-1.5 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        Collection Address (Origin)
                      </label>
                      <input 
                        type="text"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="w-full text-xs bg-[#131D31] border border-slate-700/80 rounded px-2.5 py-1.5 text-white focus:outline-none focus:border-blue-500 font-mono"
                      />
                      <div className="text-[10px] text-slate-400 mt-1">Google Places Autocomplete enabled</div>
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-slate-300 flex items-center gap-1.5 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-400" />
                        Delivery Address (Destination)
                      </label>
                      <input 
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full text-xs bg-[#131D31] border border-slate-700/80 rounded px-2.5 py-1.5 text-white focus:outline-none focus:border-blue-500 font-mono"
                      />
                      <div className="text-[10px] text-slate-400 mt-1">UK Postcode validation: TW6 3XZ verified</div>
                    </div>
                  </div>

                  {/* Vehicle selection */}
                  <div>
                    <label className="text-[11px] font-medium text-slate-300 block mb-1.5">
                      Select Vehicle Specification
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { id: 'small', label: 'Small Van', cap: '400kg / 1 Pallet' },
                        { id: 'mwb', label: 'MWB Sprinter', cap: '1,200kg / 3 Pallets' },
                        { id: 'luton', label: 'Luton Tail-Lift', cap: '1,000kg / 6 Pallets' },
                        { id: 'artic', label: '44T Artic Curtainsider', cap: '26,000kg / 26 Pallets' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setVehicle(item.id)}
                          className={`p-2 rounded text-left border transition-all text-xs ${
                            vehicle === item.id 
                              ? 'bg-blue-950/60 border-blue-500 text-white' 
                              : 'bg-[#0E1524] border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <div className="font-semibold text-slate-200">{item.label}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{item.cap}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Tier */}
                  <div>
                    <label className="text-[11px] font-medium text-slate-300 block mb-1.5">
                      Service Priority Tier
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'standard', label: 'Standard Next-Day', time: 'Collected today, delivered tomorrow', badge: 'Economy' },
                        { id: 'emergency', label: 'Emergency Same-Day', time: 'Direct courier dispatch within 45 mins', badge: 'High Priority' },
                        { id: 'timecritical', label: 'Dedicated Time-Slot', time: 'Guaranteed delivery window ±15 mins', badge: 'Critical SLA' }
                      ].map((tier) => (
                        <button
                          key={tier.id}
                          onClick={() => setServiceTier(tier.id)}
                          className={`p-2 rounded text-left border transition-all text-xs ${
                            serviceTier === tier.id 
                              ? 'bg-blue-950/60 border-blue-500 text-white ring-1 ring-blue-500/50' 
                              : 'bg-[#0E1524] border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-slate-200">{tier.label}</span>
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{tier.time}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Summary & Confirmation Card */}
                <div className="lg:col-span-4 bg-[#0E1524] border border-slate-800 rounded-lg p-3.5 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider mb-2">
                      Instant Quotation Preview
                    </div>
                    <div className="border-b border-slate-800 pb-2 mb-2">
                      <div className="text-2xl font-bold font-mono text-white">
                        £315.00 <span className="text-xs font-normal text-slate-400">+ VAT</span>
                      </div>
                      <div className="text-[11px] text-emerald-400 mt-0.5 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Pre-agreed Standby Account Contract Rate
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-300">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Estimated Distance:</span>
                        <span className="font-mono">118 miles</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Transit Window:</span>
                        <span className="font-mono">2h 15m</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Loading Requirement:</span>
                        <span>Tail-lift + Pallet Truck</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Goods In Transit Cover:</span>
                        <span className="text-emerald-400">Up to £50,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <button
                      onClick={() => setBookingConfirmed(true)}
                      className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded font-medium text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                    >
                      <span>Submit Consignment Booking</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <div className="text-[10px] text-center text-slate-400 mt-2">
                      Instantly registers with NEO Operations Dispatch Desk
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-[#0E1524] border border-emerald-500/30 rounded-lg text-center max-w-lg mx-auto">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-base font-bold text-white">Consignment Booking Confirmed</h4>
                <div className="text-xs font-mono text-blue-400 my-1 bg-blue-950/60 py-1 px-3 rounded inline-block border border-blue-900">
                  Consignment Ref: NEO-2026-9041
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Notification dispatched to Birmingham Ops. Luton Tail-Lift assigned for collection at 11:30.
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <button 
                    onClick={() => setActiveTab('tracking')}
                    className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded font-medium"
                  >
                    Track Shipment Live
                  </button>
                  <button 
                    onClick={() => setBookingConfirmed(false)}
                    className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded"
                  >
                    Create Another Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'tracking' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-white">Active Consignments</h4>
              <span className="text-xs text-slate-400 font-mono">Consignment Ref: NEO-2489</span>
            </div>

            <div className="p-3 bg-[#0E1524] border border-slate-800 rounded-lg">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-blue-400 font-semibold">NEO-2489</span>
                  <span className="text-xs text-slate-300 ml-2">Birmingham B24 → Heathrow TW6</span>
                </div>
                <span className="text-xs bg-amber-950/80 text-amber-300 border border-amber-800 px-2 py-0.5 rounded font-medium">
                  In Transit · ETA 14:15
                </span>
              </div>

              {/* Milestone stepper */}
              <div className="grid grid-cols-4 gap-2 pt-1 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">✓</div>
                  <span className="text-[11px] text-white font-medium mt-1">Booked</span>
                  <span className="text-[10px] text-slate-400 font-mono">08:15</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">✓</div>
                  <span className="text-[11px] text-white font-medium mt-1">Collected</span>
                  <span className="text-[10px] text-slate-400 font-mono">09:40</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold animate-pulse">●</div>
                  <span className="text-[11px] text-blue-300 font-medium mt-1">In Transit</span>
                  <span className="text-[10px] text-slate-400 font-mono">M40 Southbound</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-bold">○</div>
                  <span className="text-[11px] text-slate-400 font-medium mt-1">Delivered</span>
                  <span className="text-[10px] text-slate-500 font-mono">Est 14:15</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'invoices' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-white">Invoices & Proof of Delivery</h4>
              <button className="text-xs text-blue-400 hover:underline flex items-center gap-1">
                <Download className="w-3.5 h-3.5" />
                Download Account Statement (PDF)
              </button>
            </div>

            <div className="space-y-2">
              {[
                { inv: 'INV-2026-081', date: '02 Oct 2026', ref: 'NEO-2488', amount: '£420.00', status: 'Paid', pod: 'Signed by D. Jenkins' },
                { inv: 'INV-2026-092', date: '10 Oct 2026', ref: 'NEO-2485', amount: '£315.00', status: 'Pending 14d', pod: 'Signed by M. Sharma' },
                { inv: 'INV-2026-099', date: '12 Oct 2026', ref: 'NEO-2480', amount: '£780.00', status: 'Pending 21d', pod: 'Signed by T. Fletcher' }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 bg-[#0E1524] border border-slate-800 rounded-lg text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-white font-medium">{row.inv}</span>
                    <span className="text-slate-400">{row.date}</span>
                    <span className="text-slate-400 font-mono">Job: {row.ref}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-white font-semibold">{row.amount}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                      row.status === 'Paid' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-amber-950 text-amber-300 border border-amber-800'
                    }`}>
                      {row.status}
                    </span>
                    <button className="text-blue-400 hover:text-white flex items-center gap-1 text-[11px] bg-slate-800/80 px-2 py-1 rounded border border-slate-700">
                      <Download className="w-3 h-3" />
                      POD
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div className="bg-[#0D1527] px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span>Proposed Customer Self-Service Experience</span>
        <span className="font-mono text-slate-500">Connected to Supabase PostgreSQL</span>
      </div>
    </div>
  );
};

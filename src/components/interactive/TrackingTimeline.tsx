import React, { useState } from 'react';
import { 
  Truck, 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  Eye, 
  Radio, 
  Smartphone, 
  Server, 
  Download,
  AlertCircle
} from 'lucide-react';

export const TrackingTimeline: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C'>('A');
  const [showPodModal, setShowPodModal] = useState(false);

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full">
      {/* Header bar */}
      <div className="bg-[#0E1626] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Truck className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-sm text-white">Consignment Tracking Architecture & Dispatch Options</span>
          <span className="text-xs font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-900">
            3 Technical Implementation Options
          </span>
        </div>

        {/* Option Selector */}
        <div className="flex items-center bg-[#070B14] p-0.5 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setSelectedOption('A')}
            className={`px-3 py-1 rounded-md transition-all font-medium ${
              selectedOption === 'A' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Option A: Ops Desk Updates (Recommended Phase 1)
          </button>
          <button
            onClick={() => setSelectedOption('B')}
            className={`px-3 py-1 rounded-md transition-all font-medium ${
              selectedOption === 'B' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Option B: Fleet Management API
          </button>
          <button
            onClick={() => setSelectedOption('C')}
            className={`px-3 py-1 rounded-md transition-all font-medium ${
              selectedOption === 'C' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Option C: Real-Time Live Telematics
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 overflow-y-auto">
        {/* Left: Customer Tracking Timeline Preview */}
        <div className="lg:col-span-7 bg-[#0E1524] border border-slate-800 rounded-lg p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Customer Consignment Tracker</span>
                <div className="text-sm font-bold text-white font-mono">Consignment: NEO-2489</div>
              </div>
              <span className="text-xs bg-blue-950 text-blue-300 border border-blue-800 px-2.5 py-0.5 rounded-full font-medium">
                In Transit · 72% Complete
              </span>
            </div>

            {/* Timeline Steps */}
            <div className="space-y-3 relative pl-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white">
                  ✓
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-semibold text-white">1. Booking Created & Confirmed</span>
                  <span className="text-[10px] font-mono text-slate-400">08:15 BST</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Automated booking reference generated. Allocation queued for Birmingham depot.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white">
                  ✓
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-semibold text-white">2. Vehicle Dispatched & Collected</span>
                  <span className="text-[10px] font-mono text-slate-400">09:40 BST</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Driver Marcus Vance on site at Birmingham Hub. 3 pallets loaded and inspected.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white animate-pulse">
                  ●
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-semibold text-blue-300">3. In Transit (UK Highway Network)</span>
                  <span className="text-[10px] font-mono text-blue-400">Active Status</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Consignment en route via M40 Southbound. Approaching Oxford corridor.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative opacity-60">
                <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] text-slate-400">
                  ○
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-semibold text-slate-300">4. Delivered & Digital POD Signed</span>
                  <span className="text-[10px] font-mono text-slate-400">Est. 14:15 BST</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Final delivery to Heathrow Cargo Terminal 4. Electronic signature and photo POD.
                </p>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => setShowPodModal(true)}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-blue-300 border border-slate-700 px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FileCheck className="w-3.5 h-3.5 text-blue-400" />
              Preview Sample Proof of Delivery (POD)
            </button>
            <span className="text-[10px] font-mono text-slate-400">SMS & Email alert triggers enabled</span>
          </div>
        </div>

        {/* Right: Technical Evaluation of Selected Option */}
        <div className="lg:col-span-5 bg-[#0E1524] border border-slate-800 rounded-lg p-3.5 flex flex-col justify-between text-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Architecture Path</span>
                <h4 className="text-sm font-bold text-white">
                  {selectedOption === 'A' && 'Option A: Ops Desk Updates'}
                  {selectedOption === 'B' && 'Option B: Fleet System API Integration'}
                  {selectedOption === 'C' && 'Option C: Real-Time GPS Telematics'}
                </h4>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                selectedOption === 'A' 
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-800' 
                  : 'bg-blue-950 text-blue-300 border-blue-800'
              }`}>
                {selectedOption === 'A' ? 'Immediate / Low Risk' : 'Dependent on Client Hardware'}
              </span>
            </div>

            {selectedOption === 'A' && (
              <div className="space-y-2.5">
                <p className="text-slate-300 leading-relaxed">
                  NEO Transport dispatchers update shipment milestones directly inside the Admin Portal (1 click). Status updates immediately sync to the customer portal and trigger customer emails.
                </p>
                <div className="p-2.5 bg-[#121A2D] border border-slate-800 rounded space-y-1">
                  <div className="font-semibold text-slate-200">Advantages for Phase 1:</div>
                  <ul className="list-disc list-inside text-slate-400 text-[11px] space-y-0.5">
                    <li>Zero dependence on 3rd-party telematics hardware</li>
                    <li>Guaranteed delivery within first software release</li>
                    <li>Full operational control by NEO dispatchers</li>
                    <li>Zero ongoing per-vehicle API subscription fees</li>
                  </ul>
                </div>
              </div>
            )}

            {selectedOption === 'B' && (
              <div className="space-y-2.5">
                <p className="text-slate-300 leading-relaxed">
                  Connects to NEO Transport's existing transport management system (TMS) or fleet system (e.g., Mandata, Webfleet, Samsara) via automated REST webhooks.
                </p>
                <div className="p-2.5 bg-[#121A2D] border border-slate-800 rounded space-y-1">
                  <div className="font-semibold text-amber-300">Client Dependencies Required:</div>
                  <ul className="list-disc list-inside text-slate-400 text-[11px] space-y-0.5">
                    <li>Name and provider of current TMS software</li>
                    <li>Developer API documentation and authentication tokens</li>
                    <li>Confirmation of available webhook triggers</li>
                  </ul>
                </div>
              </div>
            )}

            {selectedOption === 'C' && (
              <div className="space-y-2.5">
                <p className="text-slate-300 leading-relaxed">
                  Displays live vehicle moving markers on a customer-facing interactive map feed, powered by real-time GPS coordinates.
                </p>
                <div className="p-2.5 bg-amber-950/40 border border-amber-900/60 rounded text-amber-300 text-[11px] space-y-1">
                  <div className="font-semibold text-amber-200 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Technical Feasibility Note:
                  </div>
                  <p className="leading-relaxed">
                    Live GPS requires confirmed hardware tracker units in all subcontractor / fleet vehicles, telemetry data frequency agreements, and cellular data feeds. Recommended as a Phase 2 enhancement.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between font-mono">
            <span>Recommended: Phase 1 Option A</span>
            <span className="text-blue-400">Future-Proof Extensibility</span>
          </div>
        </div>
      </div>

      {/* Proof of Delivery Modal Dialog Preview */}
      {showPodModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-slate-700 rounded-xl max-w-md w-full p-4 shadow-2xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <h4 className="text-sm font-bold text-white">Electronic Proof of Delivery (POD)</h4>
              </div>
              <button 
                onClick={() => setShowPodModal(false)}
                className="text-slate-400 hover:text-white text-xs font-mono px-1.5 py-0.5 rounded bg-slate-800"
              >
                ✕ Close
              </button>
            </div>

            <div className="p-3 bg-[#0A0F1A] border border-slate-800 rounded font-mono text-[11px] space-y-1.5 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Consignment:</span>
                <span className="text-blue-400">NEO-2489</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Delivered To:</span>
                <span>Heathrow Cargo T4 (TW6 3XZ)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Timestamp:</span>
                <span>14 Oct 2026, 14:18 BST</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Signed By:</span>
                <span className="text-white font-bold">D. JENKINS (Air Cargo Sup.)</span>
              </div>
            </div>

            {/* Stylized digital signature box */}
            <div className="p-3 bg-[#131D31] border border-slate-800 rounded text-center">
              <div className="text-[10px] text-slate-400 font-mono mb-1">Captured Driver Handheld Signature</div>
              <div className="h-12 border border-dashed border-slate-700 rounded flex items-center justify-center text-blue-300 font-serif italic text-lg bg-[#0A0F1A]">
                D. Jenkins
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-1">
              <button 
                onClick={() => setShowPodModal(false)}
                className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded flex items-center gap-1.5 font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF Consignment Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

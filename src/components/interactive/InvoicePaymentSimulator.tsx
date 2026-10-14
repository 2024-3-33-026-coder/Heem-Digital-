import React, { useState } from 'react';
import { 
  CreditCard, 
  Building2, 
  FileText, 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Receipt
} from 'lucide-react';

export const InvoicePaymentSimulator: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bacs'>('card');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState({
    number: 'INV-2026-089',
    jobRef: 'NEO-2489',
    date: '14 Oct 2026',
    dueDate: '28 Oct 2026 (14 Days Net)',
    customer: 'Acme Automotive UK Ltd',
    subtotal: 315.00,
    vat: 63.00,
    total: 378.00
  });

  const handleSimulatePayment = () => {
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
    }, 4000);
  };

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full">
      {/* Header bar */}
      <div className="bg-[#0E1626] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Receipt className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-sm text-white">Commercial Invoicing & Financial Settlement Gateway</span>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900">
            PCI-DSS Tokenised · BACS Ready
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span>VAT Reg: GB 384 9201 44</span>
          <span>·</span>
          <span>Currency: GBP (£)</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 overflow-y-auto">
        {/* Left: Interactive Invoice Document Preview */}
        <div className="lg:col-span-7 bg-[#0E1524] border border-slate-800 rounded-lg p-4 flex flex-col justify-between">
          <div>
            {/* Invoice Top Strip */}
            <div className="flex items-start justify-between pb-3 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-14 bg-blue-600/30 border border-blue-500/50 rounded flex items-center justify-center font-bold text-xs text-blue-300">
                    NEO
                  </div>
                  <span className="text-xs text-slate-300 font-medium">NEO Transport Ltd</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  100 Logistics Way, Birmingham, B24 8HX · billing@neotransport.co.uk
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Tax Invoice</span>
                <div className="text-sm font-bold font-mono text-white">{selectedInvoice.number}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Date: {selectedInvoice.date}</div>
              </div>
            </div>

            {/* Bill To & Job Reference */}
            <div className="grid grid-cols-2 gap-3 py-3 border-b border-slate-800 text-xs">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Invoiced To:</span>
                <div className="font-semibold text-slate-200">{selectedInvoice.customer}</div>
                <div className="text-[11px] text-slate-400">Finance Accounts Dept, Wharf Rd, Birmingham</div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">VAT: GB 928 3102 18</div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Consignment Details:</span>
                <div className="text-slate-300 font-mono text-[11px]">Job Ref: {selectedInvoice.jobRef}</div>
                <div className="text-[11px] text-slate-400">Route: Birmingham B24 → Heathrow TW6</div>
                <div className="text-[11px] text-amber-400 font-mono mt-0.5">Payment Due: {selectedInvoice.dueDate}</div>
              </div>
            </div>

            {/* Line items table */}
            <div className="py-2.5">
              <table className="w-full text-xs text-left">
                <thead className="text-[10px] font-mono uppercase text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="py-1">Description</th>
                    <th className="py-1 text-center">Service Tier</th>
                    <th className="py-1 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  <tr>
                    <td className="py-2">
                      <div className="font-medium text-slate-200">Dedicated Freight Movement (Luton Van)</div>
                      <div className="text-[10px] text-slate-400">Consignment Ref: NEO-2489 · 118 miles</div>
                    </td>
                    <td className="py-2 text-center text-[11px] font-mono text-blue-400">Same-Day Express</td>
                    <td className="py-2 text-right font-mono text-white">£315.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="pt-2 border-t border-slate-800 text-xs flex justify-end">
              <div className="w-52 space-y-1 text-right">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal:</span>
                  <span className="font-mono text-white">£{selectedInvoice.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Standard VAT (20%):</span>
                  <span className="font-mono text-white">£{selectedInvoice.vat.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-800 text-sm font-bold text-white">
                  <span>Total Due (GBP):</span>
                  <span className="font-mono text-emerald-400">£{selectedInvoice.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
            <button className="text-blue-400 hover:text-white flex items-center gap-1.5 transition-colors">
              <Download className="w-3.5 h-3.5" />
              Download Generated PDF Tax Invoice
            </button>
            <span className="text-slate-400 font-mono">Invoice Status: Unpaid (Due 14d)</span>
          </div>
        </div>

        {/* Right: Payment Method Selector & Gateway Settlement */}
        <div className="lg:col-span-5 bg-[#0E1524] border border-slate-800 rounded-lg p-3.5 flex flex-col justify-between text-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Customer Settlement Flow</span>
                <h4 className="text-sm font-bold text-white">Select Settlement Method</h4>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">
                £{selectedInvoice.total.toFixed(2)}
              </span>
            </div>

            {/* Payment Method Switcher */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`p-2.5 rounded border text-left transition-all ${
                  paymentMethod === 'card'
                    ? 'bg-blue-950/60 border-blue-500 text-white ring-1 ring-blue-500/50'
                    : 'bg-[#121A2C] border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                  <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                  Corporate Card / Debit
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Stripe / Adyen Hosted Checkout</div>
              </button>

              <button
                onClick={() => setPaymentMethod('bacs')}
                className={`p-2.5 rounded border text-left transition-all ${
                  paymentMethod === 'bacs'
                    ? 'bg-blue-950/60 border-blue-500 text-white ring-1 ring-blue-500/50'
                    : 'bg-[#121A2C] border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                  <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                  BACS Bank Transfer
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Direct Bank Remittance</div>
              </button>
            </div>

            {paymentMethod === 'card' ? (
              <div className="space-y-2 p-3 bg-[#121A2C] border border-slate-800 rounded">
                <div className="text-[11px] font-semibold text-slate-200 flex items-center justify-between">
                  <span>Online Card Payment Gateway</span>
                  <span className="text-[10px] font-mono text-emerald-400">PCI-DSS Level 1</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Processes Visa, Mastercard, and American Express via tokenized payment provider. Zero raw card details touch NEO Transport servers.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleSimulatePayment}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded font-medium text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-600/30"
                  >
                    <span>Simulate Instant Online Payment</span>
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-2 p-3 bg-[#121A2C] border border-slate-800 rounded">
                <div className="text-[11px] font-semibold text-slate-200 flex items-center justify-between">
                  <span>BACS Bank Remittance Details</span>
                  <span className="text-[10px] font-mono text-blue-400">NEO Commercial Account</span>
                </div>
                <div className="space-y-1 font-mono text-[11px] text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Bank:</span>
                    <span>Barclays Commercial UK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sort Code:</span>
                    <span>20-00-00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Account No:</span>
                    <span>83920194</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Mandatory Ref:</span>
                    <span className="text-blue-400 font-bold">{selectedInvoice.number}</span>
                  </div>
                </div>
                <div className="pt-1 text-[10px] text-slate-400">
                  Operations team manually records BACS settlement in Admin Portal upon bank statement reconciliation.
                </div>
              </div>
            )}

            {paymentSuccess && (
              <div className="mt-2.5 p-2 bg-emerald-950 border border-emerald-800 rounded text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Simulated payment confirmed! Webhook triggered, invoice marked Paid.</span>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between font-mono">
            <span>Client Input Needed: Payment Provider Approval</span>
            <span className="text-blue-400">UK VAT Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Cloud, 
  Server, 
  GitBranch, 
  Globe, 
  ShieldCheck, 
  Database, 
  ArrowRight, 
  Layers,
  Cpu,
  Lock
} from 'lucide-react';

export const HostingTopology: React.FC = () => {
  const [activeNode, setActiveNode] = useState<'vercel' | 'supabase' | 'github' | 'dns'>('vercel');

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full">
      {/* Header bar */}
      <div className="bg-[#0E1626] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Cloud className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-sm text-white">Enterprise UK Cloud Hosting & Production Infrastructure</span>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900">
            99.99% Uptime SLA · London Region (eu-west-2)
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span>UK Data Residency</span>
          <span>·</span>
          <span>Automated CI/CD Pipeline</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 overflow-y-auto">
        {/* Left: Interactive Topology Diagram */}
        <div className="lg:col-span-8 bg-[#080D1A] border border-slate-800 rounded-lg p-3.5 relative flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
            <span className="text-slate-400 font-mono text-[11px]">System Deployment & Traffic Flow Topology</span>
            <span className="text-[10px] text-blue-400 font-mono">Click any infrastructure component to inspect</span>
          </div>

          {/* Interactive Topology Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
            {/* 1. DNS & Domain Routing */}
            <div 
              onClick={() => setActiveNode('dns')}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                activeNode === 'dns' 
                  ? 'bg-blue-950/60 border-blue-500 shadow-lg shadow-blue-500/20' 
                  : 'bg-[#0E1524] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-900">
                  DNS Layer
                </span>
              </div>
              <h5 className="text-xs font-bold text-white mb-1">NEO Domain & Subdomains</h5>
              <div className="text-[10px] font-mono text-slate-300 space-y-0.5">
                <div>portal.neotransport.co.uk</div>
                <div>admin.neotransport.co.uk</div>
              </div>
              <div className="text-[10px] text-slate-400 mt-2">
                Automated SSL / TLS 1.3 certificates renewed at edge
              </div>
            </div>

            {/* 2. Vercel Application Server */}
            <div 
              onClick={() => setActiveNode('vercel')}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                activeNode === 'vercel' 
                  ? 'bg-blue-950/60 border-blue-500 shadow-lg shadow-blue-500/20' 
                  : 'bg-[#0E1524] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] font-mono text-blue-400 bg-blue-950/80 px-1.5 py-0.5 rounded border border-blue-900">
                  Frontend Edge
                </span>
              </div>
              <h5 className="text-xs font-bold text-white mb-1">Vercel Enterprise CDN</h5>
              <div className="text-[10px] font-mono text-slate-300 space-y-0.5">
                <div>Customer Portal (SSR/SSG)</div>
                <div>Admin Operations Desk</div>
              </div>
              <div className="text-[10px] text-slate-400 mt-2">
                Sub-second page loads across UK logistics users
              </div>
            </div>

            {/* 3. Supabase Cloud DB */}
            <div 
              onClick={() => setActiveNode('supabase')}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                activeNode === 'supabase' 
                  ? 'bg-blue-950/60 border-blue-500 shadow-lg shadow-blue-500/20' 
                  : 'bg-[#0E1524] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Database className="w-4 h-4 text-purple-400" />
                <span className="text-[10px] font-mono text-purple-400 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-900">
                  Data Engine
                </span>
              </div>
              <h5 className="text-xs font-bold text-white mb-1">Supabase PostgreSQL 16</h5>
              <div className="text-[10px] font-mono text-slate-300 space-y-0.5">
                <div>AWS London (eu-west-2)</div>
                <div>Row-Level Security & Storage</div>
              </div>
              <div className="text-[10px] text-slate-400 mt-2">
                Encrypted at rest & in transit with point-in-time recovery
              </div>
            </div>
          </div>

          {/* GitHub CI/CD Pipeline bar */}
          <div 
            onClick={() => setActiveNode('github')}
            className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
              activeNode === 'github' 
                ? 'bg-blue-950/60 border-blue-500' 
                : 'bg-[#0E1524] border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <GitBranch className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-white">GitHub Enterprise Version Control & Automated Pipeline</h5>
                <p className="text-[10px] text-slate-400">
                  Client retains 100% code ownership. Pull requests trigger instant automated preview staging builds.
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-900">
              CI / CD Active
            </span>
          </div>

          {/* Bottom Security Note */}
          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Zero proprietary vendor lock-in: Standard PostgreSQL + Next.js open ecosystem
            </span>
            <span className="font-mono text-slate-500">ISO 27001 / SOC 2 Type II</span>
          </div>
        </div>

        {/* Right: Detailed Node Specification & Client Inputs */}
        <div className="lg:col-span-4 bg-[#0E1524] border border-slate-800 rounded-lg p-3.5 flex flex-col justify-between text-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Architecture Deep Dive</span>
                <h4 className="text-sm font-bold text-white">
                  {activeNode === 'vercel' && 'Vercel Application Hosting'}
                  {activeNode === 'supabase' && 'Supabase Managed Backend'}
                  {activeNode === 'github' && 'GitHub Repository & Governance'}
                  {activeNode === 'dns' && 'DNS & Custom Domain Routing'}
                </h4>
              </div>
            </div>

            {activeNode === 'vercel' && (
              <div className="space-y-2.5">
                <p className="text-slate-300 leading-relaxed">
                  Deploys both the Customer Portal and Admin Management Portal with isolated environments for staging and production.
                </p>
                <div className="p-2.5 bg-[#121A2D] border border-slate-800 rounded space-y-1.5">
                  <div className="font-semibold text-slate-200">Responsibilities:</div>
                  <ul className="text-slate-400 text-[11px] space-y-1 list-disc list-inside">
                    <li>Edge CDN rendering across UK networks</li>
                    <li>Automated branch preview deployments</li>
                    <li>Environment variable encryption</li>
                    <li>Continuous monitoring and crash analytics</li>
                  </ul>
                </div>
                <div className="p-2 bg-blue-950/40 border border-blue-900/60 rounded text-[11px] text-blue-300">
                  Client input needed: Invite HEEM Digital to client Vercel team or approve team workspace.
                </div>
              </div>
            )}

            {activeNode === 'supabase' && (
              <div className="space-y-2.5">
                <p className="text-slate-300 leading-relaxed">
                  Enterprise managed PostgreSQL instance located in London (eu-west-2), fulfilling UK GDPR data sovereignty requirements.
                </p>
                <div className="p-2.5 bg-[#121A2D] border border-slate-800 rounded space-y-1.5">
                  <div className="font-semibold text-slate-200">Capabilities:</div>
                  <ul className="text-slate-400 text-[11px] space-y-1 list-disc list-inside">
                    <li>PostgreSQL 16 relational database engine</li>
                    <li>Row-Level Security (RLS) enforcement</li>
                    <li>S3-compatible secure bucket for POD storage</li>
                    <li>Automated daily backups with point-in-time rollback</li>
                  </ul>
                </div>
                <div className="p-2 bg-blue-950/40 border border-blue-900/60 rounded text-[11px] text-blue-300">
                  Client input needed: Approve production project creation in UK region.
                </div>
              </div>
            )}

            {activeNode === 'github' && (
              <div className="space-y-2.5">
                <p className="text-slate-300 leading-relaxed">
                  Centralized Git source control with branch protection rules on main/production branches.
                </p>
                <div className="p-2.5 bg-[#121A2D] border border-slate-800 rounded space-y-1.5">
                  <div className="font-semibold text-slate-200">Client Benefits:</div>
                  <ul className="text-slate-400 text-[11px] space-y-1 list-disc list-inside">
                    <li>Client retains 100% intellectual property & code ownership</li>
                    <li>Every code change is auditable with commit history</li>
                    <li>Seamless handover at project conclusion</li>
                  </ul>
                </div>
              </div>
            )}

            {activeNode === 'dns' && (
              <div className="space-y-2.5">
                <p className="text-slate-300 leading-relaxed">
                  Subdomain delegation from NEO Transport's primary domain (neotransport.co.uk).
                </p>
                <div className="p-2.5 bg-[#121A2D] border border-slate-800 rounded space-y-1.5">
                  <div className="font-semibold text-slate-200">Required DNS Records:</div>
                  <div className="font-mono text-[10px] space-y-1 text-slate-300 bg-[#090F1C] p-2 rounded">
                    <div>CNAME portal → cname.vercel-dns.com</div>
                    <div>CNAME admin → cname.vercel-dns.com</div>
                  </div>
                </div>
                <div className="p-2 bg-amber-950/40 border border-amber-900/60 rounded text-[11px] text-amber-300">
                  Client input needed: DNS control panel access or contact with domain registrar (GoDaddy / Cloudflare).
                </div>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between font-mono">
            <span>High-Availability Cloud Design</span>
            <span className="text-emerald-400">Zero Maintenance Headaches</span>
          </div>
        </div>
      </div>
    </div>
  );
};

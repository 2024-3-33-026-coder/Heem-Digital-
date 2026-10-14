import React, { useState } from 'react';
import { 
  Database, 
  Server, 
  ShieldCheck, 
  Lock, 
  Layers, 
  Table2, 
  ArrowRight, 
  KeyRound,
  FileCheck2,
  Users
} from 'lucide-react';

interface SchemaEntity {
  name: string;
  tableName: string;
  description: string;
  primaryKey: string;
  keyFields: string[];
  rlsPolicy: string;
}

const ENTITIES: SchemaEntity[] = [
  {
    name: 'Bookings & Consignments',
    tableName: 'bookings',
    description: 'Central booking records containing consignment references, cargo specs, service priority tiers, and operational instructions.',
    primaryKey: 'id (UUID)',
    keyFields: ['consignment_ref (TEXT, UNIQUE)', 'customer_id (FK)', 'vehicle_type (ENUM)', 'service_tier (ENUM)', 'total_amount (DECIMAL)', 'status (ENUM)'],
    rlsPolicy: 'SELECT: customer_id = auth.uid() OR is_admin(). INSERT: authenticated customers. UPDATE: admins only.'
  },
  {
    name: 'Collection & Delivery Addresses',
    tableName: 'consignment_addresses',
    description: 'Normalized postal addresses with verified UK postcodes, coordinates (lat/lng), contact persons, and gate access codes.',
    primaryKey: 'id (UUID)',
    keyFields: ['booking_id (FK)', 'type (collection | delivery)', 'company_name (TEXT)', 'postcode (TEXT)', 'latitude (NUMERIC)', 'longitude (NUMERIC)'],
    rlsPolicy: 'Linked via booking_id. Accessible to booking owner and operations dispatchers.'
  },
  {
    name: 'Customer Accounts & Credit',
    tableName: 'customer_profiles',
    description: 'Enterprise client profiles, standby tier agreements, approved credit limits, payment terms (14/30 days), and accounting emails.',
    primaryKey: 'id (UUID -> auth.users)',
    keyFields: ['company_name (TEXT)', 'commercial_tier (TEXT)', 'credit_limit (DECIMAL)', 'vat_number (TEXT)', 'account_manager (TEXT)'],
    rlsPolicy: 'Users can read their own profile. Only Admins with role=finance can modify credit limits.'
  },
  {
    name: 'Shipment Status Milestones',
    tableName: 'shipment_events',
    description: 'Immutable audit trail of status changes: Booked → Dispatched → Collected → In Transit → Delivered with timestamps and driver notes.',
    primaryKey: 'id (UUID)',
    keyFields: ['booking_id (FK)', 'status (ENUM)', 'timestamp (TIMESTAMPTZ)', 'actor_id (FK)', 'telematics_lat_lng (POINT)', 'notes (TEXT)'],
    rlsPolicy: 'SELECT: public/customer with consignment reference. INSERT: authenticated staff or verified telematics webhook.'
  },
  {
    name: 'Invoices & Financial Records',
    tableName: 'invoices',
    description: 'Billing summaries, VAT calculations, line items, payment status (paid, pending, overdue), and payment transaction references.',
    primaryKey: 'id (UUID)',
    keyFields: ['invoice_number (TEXT)', 'booking_id (FK)', 'subtotal (DECIMAL)', 'vat_amount (DECIMAL)', 'due_date (DATE)', 'payment_status (ENUM)'],
    rlsPolicy: 'Strict financial segregation. Read-only to customer organization. Full CRUD for admin finance.'
  },
  {
    name: 'Documents & Proof of Delivery',
    tableName: 'documents_pod',
    description: 'Secured references to uploaded POD signatures, photos, consignment notes, and customs forms stored in private S3/Supabase Storage.',
    primaryKey: 'id (UUID)',
    keyFields: ['booking_id (FK)', 'file_path (TEXT)', 'file_type (POD_SIGNATURE | CMR | INVOICE_PDF)', 'signer_name (TEXT)', 'uploaded_at (TIMESTAMPTZ)'],
    rlsPolicy: 'Secure signed URL generation. Prevents unauthorized downloading of sensitive delivery manifests.'
  }
];

export const BackendArchitectureDiagram: React.FC = () => {
  const [selectedEntity, setSelectedEntity] = useState<SchemaEntity>(ENTITIES[0]);
  const [activeTab, setActiveTab] = useState<'architecture' | 'schema'>('architecture');

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full">
      {/* Header bar */}
      <div className="bg-[#0E1626] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Database className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-sm text-white">Unified Backend & PostgreSQL Infrastructure</span>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900">
            PostgreSQL 16 + Row-Level Security
          </span>
        </div>

        <div className="flex items-center bg-[#070B14] p-0.5 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1 rounded-md transition-all font-medium ${
              activeTab === 'architecture' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            System Flow Architecture
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3 py-1 rounded-md transition-all font-medium ${
              activeTab === 'schema' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Database Schema & RLS Policies
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 flex-1 overflow-y-auto">
        {activeTab === 'architecture' ? (
          <div className="space-y-4">
            {/* Visual 3-tier System Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              {/* Client Layer */}
              <div className="md:col-span-3 space-y-2.5">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider text-center">
                  Tier 1: Presentation Layer
                </div>

                <div className="p-3 bg-[#0E1524] border border-blue-500/40 rounded-lg text-center">
                  <div className="text-xs font-bold text-white mb-0.5">Customer Portal</div>
                  <div className="text-[10px] font-mono text-blue-400">portal.neotransport.co.uk</div>
                  <div className="text-[10px] text-slate-400 mt-1">Next.js React Client · SSL</div>
                </div>

                <div className="p-3 bg-[#0E1524] border border-purple-500/40 rounded-lg text-center">
                  <div className="text-xs font-bold text-white mb-0.5">Admin Operations Portal</div>
                  <div className="text-[10px] font-mono text-purple-400">admin.neotransport.co.uk</div>
                  <div className="text-[10px] text-slate-400 mt-1">Next.js React Staff Client · RBAC</div>
                </div>
              </div>

              {/* Connecting arrows */}
              <div className="md:col-span-1 flex flex-col items-center justify-center text-slate-500">
                <ArrowRight className="w-5 h-5 hidden md:block" />
                <span className="text-[9px] font-mono mt-1 text-center">HTTPS API</span>
              </div>

              {/* Middleware & Business Logic Layer */}
              <div className="md:col-span-4 bg-[#0E1524] border border-slate-800 rounded-lg p-3.5 space-y-2">
                <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider text-center">
                  Tier 2: Backend Logic & Gateway
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="p-2 bg-[#131D31] rounded border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300 font-medium">Authentication & JWT</span>
                    <span className="text-[10px] font-mono text-emerald-400">Supabase Auth</span>
                  </div>
                  <div className="p-2 bg-[#131D31] rounded border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300 font-medium">Validation & Business Rules</span>
                    <span className="text-[10px] font-mono text-blue-400">TypeScript API</span>
                  </div>
                  <div className="p-2 bg-[#131D31] rounded border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300 font-medium">External Webhooks Handler</span>
                    <span className="text-[10px] font-mono text-slate-400">Maps / Payments / Telematics</span>
                  </div>
                  <div className="p-2 bg-[#131D31] rounded border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300 font-medium">Encrypted Storage Gateway</span>
                    <span className="text-[10px] font-mono text-purple-300">Signed S3 URLs</span>
                  </div>
                </div>
              </div>

              {/* Connecting arrows */}
              <div className="md:col-span-1 flex flex-col items-center justify-center text-slate-500">
                <ArrowRight className="w-5 h-5 hidden md:block" />
                <span className="text-[9px] font-mono mt-1 text-center">SQL / RLS</span>
              </div>

              {/* Data Layer */}
              <div className="md:col-span-3 bg-[#0E1524] border border-emerald-500/30 rounded-lg p-3 text-center space-y-2">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                  Tier 3: PostgreSQL Database
                </div>
                <div className="p-2 bg-[#131D31] rounded border border-slate-800">
                  <div className="text-xs font-bold text-white">PostgreSQL 16 Engine</div>
                  <div className="text-[10px] text-slate-400">AWS London (eu-west-2)</div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-1">UK GDPR Residency</div>
                </div>
                <div className="text-[10px] text-slate-400 leading-tight">
                  ACID transactional integrity, automated point-in-time recovery & Row-Level Security
                </div>
              </div>
            </div>

            {/* Core Architectural Guarantees */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <div className="p-2.5 bg-[#0E1524] border border-slate-800 rounded text-xs">
                <div className="font-semibold text-slate-200 flex items-center gap-1.5 mb-1">
                  <Lock className="w-3.5 h-3.5 text-blue-400" />
                  Tenant Data Isolation
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Postgres Row-Level Security (RLS) ensures Company A can never view or modify Company B's bookings.
                </p>
              </div>

              <div className="p-2.5 bg-[#0E1524] border border-slate-800 rounded text-xs">
                <div className="font-semibold text-slate-200 flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Role-Based Access Control
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Granular permission checks: Dispatchers manage bookings, Finance oversees invoices, Customers view their own records.
                </p>
              </div>

              <div className="p-2.5 bg-[#0E1524] border border-slate-800 rounded text-xs">
                <div className="font-semibold text-slate-200 flex items-center gap-1.5 mb-1">
                  <KeyRound className="w-3.5 h-3.5 text-purple-400" />
                  Zero Secret Exposure
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Payment secrets, Maps API private keys, and database passwords remain securely on server environment variables.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            {/* Entity List */}
            <div className="lg:col-span-4 space-y-1.5">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                Core Relational Entities
              </div>
              {ENTITIES.map((entity) => (
                <button
                  key={entity.tableName}
                  onClick={() => setSelectedEntity(entity)}
                  className={`w-full text-left p-2.5 rounded border transition-all text-xs ${
                    selectedEntity.tableName === entity.tableName
                      ? 'bg-blue-950/60 border-blue-500 text-white'
                      : 'bg-[#0E1524] border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="font-semibold text-slate-200">{entity.name}</div>
                  <div className="text-[10px] font-mono text-blue-400 mt-0.5">table: {entity.tableName}</div>
                </button>
              ))}
            </div>

            {/* Entity Inspector */}
            <div className="lg:col-span-8 bg-[#0E1524] border border-slate-800 rounded-lg p-3.5 flex flex-col justify-between text-xs">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-white">{selectedEntity.name}</h4>
                    <span className="text-[11px] font-mono text-blue-400">public.{selectedEntity.tableName}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">PK: {selectedEntity.primaryKey}</span>
                </div>

                <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                  {selectedEntity.description}
                </p>

                <div className="mb-3">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                    Schema Columns & Foreign Keys
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px]">
                    {selectedEntity.keyFields.map((field, idx) => (
                      <div key={idx} className="p-1.5 bg-[#121A2C] border border-slate-800 rounded text-slate-300">
                        {field}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                    Row-Level Security (RLS) Policy
                  </span>
                  <div className="p-2 bg-[#09101C] border border-emerald-900/60 rounded text-[11px] font-mono text-emerald-300">
                    {selectedEntity.rlsPolicy}
                  </div>
                </div>
              </div>

              <div className="pt-2 mt-3 border-t border-slate-800/80 text-[10px] text-slate-400 flex justify-between items-center">
                <span>Fully normalized PostgreSQL relational schema</span>
                <span className="font-mono text-blue-400">TypeScript Drizzle/Prisma typed</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div className="bg-[#0E1626] px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span>Shared Database Architecture: One Engine, Multi-Role Access</span>
        <span className="font-mono text-slate-500">Supabase EU-West-2</span>
      </div>
    </div>
  );
};

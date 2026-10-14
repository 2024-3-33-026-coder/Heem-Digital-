import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Compass, 
  Route, 
  Clock, 
  Info, 
  CheckCircle2, 
  AlertTriangle,
  Search
} from 'lucide-react';

interface PredefinedRoute {
  name: string;
  origin: string;
  destination: string;
  originPostcode: string;
  destPostcode: string;
  distanceMiles: number;
  transitTime: string;
  hgvRoute: string;
  co2Estimate: string;
}

const PREDEFINED_ROUTES: PredefinedRoute[] = [
  {
    name: 'Midlands to London Air Cargo',
    origin: 'NEO Hub, Birmingham Logistics Park',
    destination: 'Heathrow Cargo Terminal 4, Hounslow',
    originPostcode: 'B24 8HX',
    destPostcode: 'TW6 3XZ',
    distanceMiles: 118,
    transitTime: '2h 14m',
    hgvRoute: 'M6 Southbound → M40 → M25 J14',
    co2Estimate: '68 kg CO2e'
  },
  {
    name: 'North West to Southern Gateway',
    origin: 'Manchester Freight Terminal, Trafford',
    destination: 'London Gateway Port, Stanford-le-Hope',
    originPostcode: 'M17 1EH',
    destPostcode: 'SS17 9DY',
    distanceMiles: 236,
    transitTime: '4h 18m',
    hgvRoute: 'M6 → M1 Southbound → M25 Eastbound',
    co2Estimate: '138 kg CO2e'
  },
  {
    name: 'South West Precision Run',
    origin: 'Avonmouth Docks, Bristol',
    destination: 'Coventry Automotive Hub',
    originPostcode: 'BS11 9DX',
    destPostcode: 'CV3 4GA',
    distanceMiles: 92,
    transitTime: '1h 42m',
    hgvRoute: 'M5 Northbound → M42 → A45',
    co2Estimate: '52 kg CO2e'
  }
];

export const MapsSimulator: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<PredefinedRoute>(PREDEFINED_ROUTES[0]);
  const [routeType, setRouteType] = useState<'hgv' | 'express'>('hgv');

  return (
    <div className="bg-[#0B0F19] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full">
      {/* Header bar */}
      <div className="bg-[#0E1626] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Navigation className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-sm text-white">Google Maps Platform & Routing Simulator</span>
          <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900">
            Places Autocomplete + Routes API
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400">Route Profile:</span>
          <button
            onClick={() => setRouteType('hgv')}
            className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
              routeType === 'hgv' ? 'bg-blue-600 text-white font-medium' : 'bg-slate-900 text-slate-400'
            }`}
          >
            HGV / Commercial Spec
          </button>
          <button
            onClick={() => setRouteType('express')}
            className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
              routeType === 'express' ? 'bg-blue-600 text-white font-medium' : 'bg-slate-900 text-slate-400'
            }`}
          >
            Express Courier (Van)
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 overflow-y-auto">
        {/* Left: Interactive Map Visualizer */}
        <div className="lg:col-span-7 bg-[#070C16] border border-slate-800 rounded-lg p-3 relative flex flex-col justify-between overflow-hidden min-h-[300px]">
          {/* Simulated UK Stylized Vector Map Canvas */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          {/* Simulated Route Polyline SVG */}
          <div className="relative z-10 flex-1 flex flex-col justify-between p-2">
            <div className="flex items-center justify-between text-xs">
              <span className="bg-slate-900/90 text-blue-300 border border-blue-800/60 px-2 py-1 rounded text-[11px] font-mono">
                UK Highway Network Layer: Highways England (M6 / M40 / M25)
              </span>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-900 px-2 py-0.5 rounded font-mono">
                Live Traffic Factor: Nominal (+6 mins)
              </span>
            </div>

            {/* Stylized route path graphic */}
            <div className="my-6 relative py-4">
              <div className="flex items-center justify-between relative">
                {/* Collection Origin Marker */}
                <div className="flex flex-col items-center z-10">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 shadow-lg shadow-emerald-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white mt-1">Origin</span>
                  <span className="text-[10px] font-mono text-emerald-400">{selectedRoute.originPostcode}</span>
                </div>

                {/* Animated connecting highway line */}
                <div className="flex-1 mx-4 relative">
                  <div className="h-1 bg-slate-800 rounded-full w-full"></div>
                  <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-blue-400 rounded-full w-full"></div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-blue-500/40 rounded px-2 py-0.5 text-[10px] font-mono text-blue-300">
                    {selectedRoute.distanceMiles} Miles · {selectedRoute.transitTime}
                  </div>
                </div>

                {/* Delivery Destination Marker */}
                <div className="flex flex-col items-center z-10">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center text-blue-300 shadow-lg shadow-blue-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white mt-1">Destination</span>
                  <span className="text-[10px] font-mono text-blue-400">{selectedRoute.destPostcode}</span>
                </div>
              </div>

              {/* Waypoint metadata */}
              <div className="mt-4 p-2 bg-[#0C1424] border border-slate-800/80 rounded text-[11px] text-slate-300 font-mono flex items-center justify-between">
                <span>Routing: {selectedRoute.hgvRoute}</span>
                <span className="text-slate-400">{selectedRoute.co2Estimate}</span>
              </div>
            </div>

            {/* Critical disclaimer card */}
            <div className="p-2.5 bg-amber-950/40 border border-amber-900/60 rounded text-xs text-amber-300 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-amber-200">Critical Architecture Distinction:</strong>
                <p className="text-[11px] text-amber-300/90 mt-0.5">
                  A Maps API calculates routes, UK postcodes, and distance calculations. It does <em>not</em> provide real-time vehicle GPS tracking without a connected telematics / tracking hardware feed (covered in Slide 10).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Technical Requirements & Route Picker */}
        <div className="lg:col-span-5 space-y-3 text-xs flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
              Select Sample Logistics Corridor:
            </div>
            <div className="space-y-1.5 mb-3">
              {PREDEFINED_ROUTES.map((route, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedRoute(route)}
                  className={`w-full p-2.5 rounded border text-left transition-all ${
                    selectedRoute.name === route.name
                      ? 'bg-blue-950/60 border-blue-500 text-white'
                      : 'bg-[#0E1524] border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-200">{route.name}</span>
                    <span className="text-[10px] font-mono text-blue-400">{route.distanceMiles} mi</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {route.originPostcode} → {route.destPostcode} ({route.transitTime})
                  </div>
                </button>
              ))}
            </div>

            {/* API Checklist */}
            <div className="p-3 bg-[#0E1524] border border-slate-800 rounded-lg space-y-2">
              <div className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Required Client Inputs from NEO Transport
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-300">
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-400 font-mono">1.</span>
                  <span>Google Cloud Platform account ownership & project creation</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-400 font-mono">2.</span>
                  <span>Enable Places API, Geocoding API, and Routes API</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-400 font-mono">3.</span>
                  <span>Google billing setup ($200/mo free recurring credit from Google)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-400 font-mono">4.</span>
                  <span>Confirmation whether automated mileage-based pricing applies</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-2.5 bg-[#09101C] border border-slate-800 rounded text-[11px] text-slate-400 flex items-center justify-between">
            <span>Proposed Integration: Google Maps Platform</span>
            <span className="font-mono text-emerald-400">UK Postcode Native</span>
          </div>
        </div>
      </div>
    </div>
  );
};

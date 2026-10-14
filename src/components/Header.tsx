import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Grid, 
  FileText, 
  MonitorPlay, 
  MessageSquare,
  Printer,
  Sparkles,
  Layers
} from 'lucide-react';
import { SlideData } from '../types/presentation';

interface HeaderProps {
  currentSlideIndex: number;
  totalSlides: number;
  slides: SlideData[];
  viewMode: 'slide' | 'grid' | 'dossier';
  showSpeakerNotes: boolean;
  isFullscreen: boolean;
  onSelectSlide: (index: number) => void;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  onToggleViewMode: (mode: 'slide' | 'grid' | 'dossier') => void;
  onToggleSpeakerNotes: () => void;
  onToggleFullscreen: () => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlideIndex,
  totalSlides,
  slides,
  viewMode,
  showSpeakerNotes,
  isFullscreen,
  onSelectSlide,
  onNextSlide,
  onPrevSlide,
  onToggleViewMode,
  onToggleSpeakerNotes,
  onToggleFullscreen,
  onPrint
}) => {
  const currentSlide = slides[currentSlideIndex];

  return (
    <header className="no-print bg-[#070B14]/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-2.5 sticky top-0 z-40 flex items-center justify-between text-xs">
      {/* Brand Identity Lockup */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="h-6 px-2 bg-blue-600 rounded flex items-center justify-center font-bold tracking-wider text-xs text-white shadow-sm shadow-blue-500/20">
            HEEM
          </div>
          <span className="text-slate-400 font-mono text-[11px]">×</span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold tracking-wider text-white text-xs">NEO TRANSPORT</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-slate-800 text-[11px] text-slate-400">
          <span className="text-slate-300 font-medium">Software Development Proposal</span>
          <span>·</span>
          <span className="font-mono text-blue-400">Figma to Production Portal</span>
        </div>
      </div>

      {/* Center: Slide Navigator (only active in slide mode) */}
      {viewMode === 'slide' && (
        <div className="flex items-center gap-2">
          <button
            onClick={onPrevSlide}
            disabled={currentSlideIndex === 0}
            className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
            title="Previous Slide (← or PageUp)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Quick Dropdown Slide Jumper */}
          <div className="relative">
            <select
              value={currentSlideIndex}
              onChange={(e) => onSelectSlide(Number(e.target.value))}
              aria-label="Select presentation slide"
              className="bg-[#0B101D] border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-mono rounded px-2.5 py-1 focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              {slides.map((s, idx) => (
                <option key={s.id} value={idx} className="bg-[#0B101D] text-slate-200">
                  {s.numberStr} / {totalSlides} — {s.title.length > 32 ? s.title.slice(0, 32) + '...' : s.title}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={onNextSlide}
            disabled={currentSlideIndex === totalSlides - 1}
            className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
            title="Next Slide (→ or Space)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Right Controls: View Switchers, Speaker Notes & Fullscreen */}
      <div className="flex items-center gap-2">
        {/* View Mode Switcher */}
        <div className="flex items-center bg-[#0B101D] p-0.5 rounded-lg border border-slate-800">
          <button
            onClick={() => onToggleViewMode('slide')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1.5 transition-all ${
              viewMode === 'slide' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="16:9 Presentation Slide Canvas"
          >
            <MonitorPlay className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Presentation</span>
          </button>

          <button
            onClick={() => onToggleViewMode('grid')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1.5 transition-all ${
              viewMode === 'grid' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Overview Grid (All 20 Slides)"
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Grid Overview</span>
          </button>

          <button
            onClick={() => onToggleViewMode('dossier')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1.5 transition-all ${
              viewMode === 'dossier' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Continuous Executive Briefing Document"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Executive Dossier</span>
          </button>
        </div>

        {/* Speaker Notes Toggle Button */}
        {viewMode === 'slide' && (
          <button
            onClick={onToggleSpeakerNotes}
            className={`p-1.5 rounded border text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
              showSpeakerNotes
                ? 'bg-blue-950/80 border-blue-500 text-blue-300'
                : 'bg-[#0B101D] border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle Speaker Notes & Client Talking Points"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden md:inline text-[11px]">Speaker Notes</span>
          </button>
        )}

        {/* Print / PDF Button */}
        <button
          onClick={onPrint}
          className="p-1.5 rounded bg-[#0B101D] border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-all cursor-pointer"
          title="Print Presentation / Save as PDF"
        >
          <Printer className="w-3.5 h-3.5" />
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={onToggleFullscreen}
          className="p-1.5 rounded bg-[#0B101D] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
          title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Enter Presentation Fullscreen (F)'}
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </header>
  );
};

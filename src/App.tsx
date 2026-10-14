import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SLIDES_DATA } from './data/slidesData';
import { Header } from './components/Header';
import { SlideViewer } from './components/SlideViewer';
import { SpeakerNotes } from './components/SpeakerNotes';
import { SlideThumbnails } from './components/SlideThumbnails';
import { ExecutiveDossierView } from './components/ExecutiveDossierView';
import { 
  ChevronLeft, 
  ChevronRight, 
  Keyboard, 
  Sparkles, 
  Info,
  Maximize2
} from 'lucide-react';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'slide' | 'grid' | 'dossier'>('slide');
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = SLIDES_DATA.length;
  const currentSlide = SLIDES_DATA[currentSlideIndex];

  const handleNextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleSelectSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
      setViewMode('slide');
    }
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const handlePrint = () => {
    setViewMode('dossier');
    setTimeout(() => {
      window.print();
    }, 400);
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          handleNextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          handlePrevSlide();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          setViewMode((prev) => (prev === 'grid' ? 'slide' : 'grid'));
          break;
        case 'd':
        case 'D':
          e.preventDefault();
          setViewMode((prev) => (prev === 'dossier' ? 'slide' : 'dossier'));
          break;
        case 's':
        case 'S':
        case 'n':
        case 'N':
          e.preventDefault();
          setShowSpeakerNotes((prev) => !prev);
          break;
        case 'Escape':
          if (showKeyboardHelp) setShowKeyboardHelp(false);
          if (viewMode !== 'slide') setViewMode('slide');
          break;
        case '?':
          setShowKeyboardHelp((prev) => !prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide, showKeyboardHelp, viewMode]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col font-sans select-none antialiased"
    >
      {/* Top Application Header */}
      <Header
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        slides={SLIDES_DATA}
        viewMode={viewMode}
        showSpeakerNotes={showSpeakerNotes}
        isFullscreen={isFullscreen}
        onSelectSlide={handleSelectSlide}
        onNextSlide={handleNextSlide}
        onPrevSlide={handlePrevSlide}
        onToggleViewMode={setViewMode}
        onToggleSpeakerNotes={() => setShowSpeakerNotes((prev) => !prev)}
        onToggleFullscreen={handleToggleFullscreen}
        onPrint={handlePrint}
      />

      {/* Main Presentation Stage */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {viewMode === 'slide' && (
          <div className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
            {/* 16:9 Aspect Ratio Widescreen Canvas Box */}
            <div className="w-full max-w-7xl aspect-[16/9] min-h-[520px] max-h-[820px] bg-[#090F1C] border border-slate-800 rounded-2xl shadow-2xl relative flex flex-col overflow-hidden">
              <SlideViewer
                slide={currentSlide}
                totalSlides={totalSlides}
                onNextSlide={handleNextSlide}
                onPrevSlide={handlePrevSlide}
              />

              {/* Floating Slide Progress Pill at Canvas Bottom */}
              <div className="no-print absolute bottom-3 right-4 z-20 flex items-center gap-2 bg-[#0A0F1D]/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800 text-[11px] font-mono text-slate-400">
                <span>Slide {currentSlide.numberStr} of {totalSlides}</span>
                <span className="text-slate-600">·</span>
                <span className="text-blue-400 truncate max-w-[140px]">{currentSlide.categoryLabel}</span>
              </div>
            </div>

            {/* Bottom Keyboard Controls Hint */}
            <div className="no-print mt-3 flex items-center justify-between w-full max-w-7xl px-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowKeyboardHelp(true)}
                  className="hover:text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Keyboard className="w-3.5 h-3.5 text-blue-400" />
                  <span>Keyboard Shortcuts (? for help)</span>
                </button>
                <span className="hidden sm:inline text-slate-700">|</span>
                <span className="hidden sm:inline text-slate-400">
                  Use <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">←</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">→</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">Space</kbd> to navigate
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-mono">NEO Transport × HEEM Digital</span>
              </div>
            </div>
          </div>
        )}

        {viewMode === 'grid' && (
          <div className="flex-1 overflow-y-auto">
            <SlideThumbnails
              slides={SLIDES_DATA}
              currentSlideIndex={currentSlideIndex}
              onSelectSlide={handleSelectSlide}
              onClose={() => setViewMode('slide')}
            />
          </div>
        )}

        {viewMode === 'dossier' && (
          <div className="flex-1 overflow-y-auto">
            <ExecutiveDossierView slides={SLIDES_DATA} />
          </div>
        )}
      </main>

      {/* Speaker Notes Drawer (Toggled by user or S key) */}
      {showSpeakerNotes && viewMode === 'slide' && (
        <SpeakerNotes 
          slide={currentSlide} 
          onClose={() => setShowSpeakerNotes(false)} 
        />
      )}

      {/* Keyboard Shortcuts Modal */}
      {showKeyboardHelp && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-slate-700 rounded-xl max-w-md w-full p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-blue-400" />
                <h3 className="text-sm font-bold text-white">Presentation Keyboard Shortcuts</h3>
              </div>
              <button
                onClick={() => setShowKeyboardHelp(false)}
                className="text-slate-400 hover:text-white text-xs font-mono px-2 py-0.5 rounded bg-slate-800"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-2 text-xs">
              {[
                { key: '→ / Space / PageDown', action: 'Advance to next slide' },
                { key: '← / PageUp', action: 'Return to previous slide' },
                { key: 'F', action: 'Toggle Presentation Fullscreen mode' },
                { key: 'G', action: 'Toggle 20-Slide Thumbnail Grid view' },
                { key: 'D', action: 'Toggle Executive Dossier continuous reading mode' },
                { key: 'S / N', action: 'Toggle Presenter Speaker Notes drawer' },
                { key: 'Esc', action: 'Exit Fullscreen or close modal' }
              ].map((shortcut, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-[#0A0F1D] border border-slate-800 rounded">
                  <span className="text-slate-300">{shortcut.action}</span>
                  <kbd className="px-2 py-1 rounded bg-[#131D31] text-[11px] font-mono text-blue-300 border border-slate-700">
                    {shortcut.key}
                  </kbd>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => setShowKeyboardHelp(false)}
                className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-medium"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

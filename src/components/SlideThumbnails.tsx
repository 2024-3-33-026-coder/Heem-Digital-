import React, { useState } from 'react';
import { SlideData } from '../types/presentation';
import { Layers, ArrowRight, CheckCircle2, Search, Filter } from 'lucide-react';

interface SlideThumbnailsProps {
  slides: SlideData[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  onClose: () => void;
}

export const SlideThumbnails: React.FC<SlideThumbnailsProps> = ({
  slides,
  currentSlideIndex,
  onSelectSlide,
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 20 Slides' },
    { id: 'overview', label: 'Overview' },
    { id: 'design', label: 'Figma Audit' },
    { id: 'customer-portal', label: 'Customer Portal' },
    { id: 'admin-portal', label: 'Admin Desk' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'governance', label: 'Governance & Access' },
    { id: 'roadmap', label: 'Roadmap & Next Steps' }
  ];

  const filteredSlides = slides.filter(slide => {
    const matchesSearch = 
      slide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slide.subtitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slide.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slide.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || slide.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Top Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-400" />
            Presentation Deck Overview & Slide Directory
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            20 Comprehensive Widescreen Slides · NEO Transport × HEEM Digital Proposal
          </p>
        </div>

        {/* Search input */}
        <div className="w-full sm:w-72 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search slides, APIs, topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0E1524] border border-slate-800 focus:border-blue-500 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 flex-wrap text-xs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1 rounded-md transition-all font-medium ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white shadow'
                : 'bg-[#0E1524] text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Slides Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredSlides.map((slide, idx) => {
          const isCurrent = slides[currentSlideIndex].id === slide.id;
          const originalIndex = slides.findIndex(s => s.id === slide.id);

          return (
            <div
              key={slide.id}
              onClick={() => {
                onSelectSlide(originalIndex);
                onClose();
              }}
              className={`group bg-[#0B101D] border rounded-xl p-3.5 flex flex-col justify-between cursor-pointer transition-all duration-200 relative overflow-hidden ${
                isCurrent 
                  ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-xl shadow-blue-500/10' 
                  : 'border-slate-800/90 hover:border-slate-700 hover:bg-[#0E1526]'
              }`}
            >
              {/* Top tag strip */}
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-2">
                  <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-900">
                    SLIDE {slide.numberStr}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {slide.categoryLabel}
                  </span>
                </div>

                <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mb-1 line-clamp-1">
                  {slide.eyebrow}
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                  {slide.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {slide.summary}
                </p>
              </div>

              {/* Bottom footer strip */}
              <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 text-slate-400">
                  {slide.interactiveComponent && (
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-900">
                      Interactive Tool
                    </span>
                  )}
                </div>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                  Open Slide <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

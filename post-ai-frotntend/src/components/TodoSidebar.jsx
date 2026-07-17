import React, { useState } from "react";
import { Plus, Sparkles, Layers, ArrowRight, FileText, CalendarCheck2, Loader2 } from "lucide-react";

export default function ContentPipelineSidebar({ onCreatePostClick, onQuickSchedulePost }) {
  // Mocking out draft posts that haven't been scheduled onto the grid yet
  const [drafts, setDrafts] = useState([
    { id: "d1", title: "Luxury Brand Aesthetic Breakdown", platform: "LinkedIn", caption: "Simplicity is the ultimate sophistication..." },
    { id: "d2", title: "Summer Capsule Collection Reveal", platform: "Instagram", caption: "Understated patterns meet premium silk textures." },
  ]);

  const [isGenerating, setIsGenerating] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState(null);

  // Simulating an AI generation spark sequence
  const handleAiGenerate = () => {
    setIsGenerating(true);
    setAiSuggestion(null);
    
    setTimeout(() => {
      setIsGenerating(false);
      setAiSuggestion({
        title: "The Power of Negative Space in Premium UI Design",
        platform: "LinkedIn",
        caption: "Why reducing elements down to bare essentials increases perceived value by over 40%."
      });
    }, 1400);
  };

  const handleAcceptAiSuggestion = () => {
    if (!aiSuggestion) return;
    const newDraft = {
      id: `d-${Date.now()}`,
      ...aiSuggestion
    };
    setDrafts([newDraft, ...drafts]);
    setAiSuggestion(null);
  };

  return (
    <div className="w-64 h-screen border-r border-neutral-100 bg-white flex flex-col select-none overflow-hidden">
      
      {/* Sidebar Header */}
      <div className="p-5 pb-3 flex items-center justify-between">
        <h1 className="font-bold text-neutral-900 text-sm tracking-tight uppercase">
          Content Hub
        </h1>
        <button
          onClick={onCreatePostClick}
          className="w-6 h-6 rounded-lg hover:bg-neutral-50 flex items-center justify-center border border-neutral-200 text-neutral-900 shadow-sm transition-all active:scale-95"
          title="Create New Post Draft"
        >
          <Plus size={14} />
        </button>
      </div>

      {/* Main Context Workspace Stream */}
      <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-6 scrollbar-none">
        
        {/* Section 1: AI Brainstorming Box (Eye-Catcher) */}
        <div className="bg-neutral-50 border border-neutral-200/60 rounded-xl p-4 space-y-3.5 relative overflow-hidden">
          <div className="space-y-1">
            <h3 className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
              <Sparkles size={13} className="text-neutral-900 animate-pulse" />
              <span>Writer's Block?</span>
            </h3>
            <p className="text-[11px] text-neutral-500 font-medium leading-relaxed">
              Let the engine synthesize luxury brand concepts tailored to your profile audience.
            </p>
          </div>

          {!aiSuggestion ? (
            <button
              onClick={handleAiGenerate}
              disabled={isGenerating}
              className="w-full bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-400 text-white py-2 px-3 rounded-lg text-[11px] font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              {isGenerating ? (
                <>
                  <Loader2 size={12} className="animate-spin" />
                  <span>Synthesizing Ideas...</span>
                </>
              ) : (
                <>
                  <span>Generate Campaign Idea</span>
                  <ArrowRight size={12} />
                </>
              )}
            </button>
          ) : (
            /* AI Output Reveal State Panel */
            <div className="bg-white border border-neutral-200 rounded-lg p-3 space-y-2.5 animate-fadeIn">
              <div className="flex justify-between items-center">
                <span className="bg-neutral-900 text-white text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded">
                  {aiSuggestion.platform}
                </span>
                <button 
                  onClick={() => setAiSuggestion(null)} 
                  className="text-[10px] text-neutral-400 hover:text-neutral-900 font-medium"
                >
                  Discard
                </button>
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-neutral-900 tracking-tight leading-snug">{aiSuggestion.title}</div>
                <div className="text-[10px] text-neutral-500 line-clamp-2 font-medium">{aiSuggestion.caption}</div>
              </div>
              <button
                onClick={handleAcceptAiSuggestion}
                className="w-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-800 text-[10px] font-bold py-1.5 px-2 rounded-md transition-colors"
              >
                Accept & Stage to Drafts
              </button>
            </div>
          )}
        </div>

        {/* Section 2: Unscheduled Master Workspace Backlog */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
              Staged Drafts ({drafts.length})
            </h2>
          </div>
          {drafts.length === 0 ? (
            <div className="border border-dashed border-neutral-200 rounded-xl p-6 text-center">
              <p className="text-[11px] text-neutral-400 font-medium">Pipeline is empty.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-2.5">
              {drafts.map((draft) => (
                <div 
                  key={draft.id} 
                  className="group relative bg-white border border-neutral-200/80 hover:border-neutral-900/40 p-3 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <div className="space-y-2">
                    {/* Top Row Flag Badges */}
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] tracking-widest uppercase font-black text-neutral-400 bg-neutral-50 border border-neutral-200/50 px-1.5 py-0.5 rounded">
                        {draft.platform}
                      </span>
                      <button 
                        onClick={() => onQuickSchedulePost?.(draft)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[10px] font-bold text-neutral-900 hover:underline"
                        title="Schedule this draft directly onto calendar grid"
                      >
                        <CalendarCheck2 size={11} />
                        <span>Slot</span>
                      </button>
                    </div>
                    {/* Meta Data Context Headers */}
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-neutral-900 truncate tracking-tight">
                        {draft.title}
                      </h4>
                      <p className="text-[11px] text-neutral-500 font-medium line-clamp-2 leading-relaxed">
                        {draft.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
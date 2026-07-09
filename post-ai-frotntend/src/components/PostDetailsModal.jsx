import React from 'react';
import { X, Calendar, Layers, Hash, FileText, Trash2, Edit3, CheckCircle, Clock } from 'lucide-react';

export default function PostDetailsModal({ isOpen, post, onClose, onDelete, onEdit }) {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 bg-neutral-950/20 backdrop-blur-[4px] z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white border border-neutral-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] rounded-xl w-full max-w-md overflow-hidden flex flex-col transform transition-all duration-300 ease-out scale-100">
        
        {/* Header Section */}
        <div className="p-6 pb-4 flex justify-between items-start">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide border ${
                post.status === 'Scheduled' 
                  ? 'bg-blue-50/60 text-blue-700 border-blue-100' 
                  : 'bg-neutral-50 text-neutral-600 border-neutral-200/80'
              }`}>
                {post.status === 'Scheduled' ? <Clock size={10} /> : <CheckCircle size={10} />}
                {post.status}
              </span>
            </div>
            <h3 className="text-base font-bold text-neutral-900 tracking-tight leading-snug">
              {post.title || "Untitled Publication"}
            </h3>
          </div>
          
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-50 transition-all"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content Body Grid */}
        <div className="px-6 pb-6 space-y-5 text-xs overflow-y-auto max-h-[55vh]">
          
          {/* Metadata Grid Row */}
          <div className="grid grid-cols-2 gap-4 bg-neutral-50/50 p-3.5 rounded-xl border border-neutral-100/60">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-neutral-400 font-medium">
                <Calendar size={12} />
                <span>Publish Date</span>
              </div>
              <div className="text-neutral-800 font-bold">
                {new Date(post.start).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="text-neutral-500 text-[11px] font-medium">
                {new Date(post.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>

            <div className="space-y-1 border-l border-neutral-200/60 pl-4">
              <div className="flex items-center gap-1.5 text-neutral-400 font-medium">
                <Layers size={12} />
                <span>Channels</span>
              </div>
              <div className="flex gap-1 flex-wrap pt-0.5">
                {post.platform?.split(',').map((p, idx) => (
                  <span key={idx} className="bg-neutral-900 text-white font-bold tracking-wider px-2 py-0.5 rounded text-[8px] uppercase">
                    {p.trim()}
                  </span>
                )) || <span className="text-neutral-400 italic">None</span>}
              </div>
            </div>
          </div>

          {/* Caption Area */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-neutral-400 font-semibold uppercase tracking-wider text-[10px]">
              <FileText size={12} />
              <span>Caption Copy</span>
            </div>
            <div className="bg-white text-neutral-700 p-3.5 rounded-xl border border-neutral-200/80 whitespace-pre-wrap leading-relaxed font-medium text-[11px] shadow-sm selection:bg-neutral-100">
              {post.caption || <span className="text-neutral-400 italic">No description text attached to this post.</span>}
            </div>
          </div>

          {/* Hashtags Area */}
          {post.hashtags && (
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-neutral-400 font-semibold uppercase tracking-wider text-[10px]">
                <Hash size={12} />
                <span>Hashtags</span>
              </div>
              <div className="text-sky-600 font-medium tracking-wide select-text bg-sky-50/30 border border-sky-100/50 p-2.5 rounded-lg text-[11px]">
                {post.hashtags}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons Section */}
        <div className="p-4 px-6 bg-neutral-50 border-t border-neutral-100 flex justify-between items-center gap-3">
          <button
            onClick={() => onDelete(post.id)}
            className="flex items-center gap-2 px-3 py-2.5 text-red-600 hover:bg-red-50/60 rounded-xl text-xs font-semibold transition-all border border-transparent"
          >
            <Trash2 size={13} />
            <span>Delete</span>
          </button>

          <button
            onClick={() => onEdit(post)}
            className="flex items-center gap-2 px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
          >
            <Edit3 size={13} />
            <span>Edit Workspace</span>
          </button>
        </div>

      </div>
    </div>
  );
}
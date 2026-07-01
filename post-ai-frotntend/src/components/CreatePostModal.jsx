import React from 'react';

export default function CreatePostModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/20 backdrop-blur-xs">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 border border-neutral-100 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-neutral-900">Create Scheduled Post</h3>
          <button onClick={onClose} className="text-neutral-400 hover:text-neutral-600 text-sm p-1">✕</button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Caption</label>
            <textarea 
              rows={3} 
              placeholder="What do you want to share? (AI recommendation coming soon...)" 
              className="w-full text-sm rounded-lg border border-neutral-200 p-2.5 focus:outline-none focus:border-neutral-900 resize-none font-normal placeholder-neutral-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Schedule Date</label>
              <input type="date" className="w-full text-sm rounded-lg border border-neutral-200 p-2 focus:outline-none focus:border-neutral-900" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Schedule Time</label>
              <input type="time" className="w-full text-sm rounded-lg border border-neutral-200 p-2 focus:outline-none focus:border-neutral-900" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-xs font-medium border border-neutral-200 rounded-lg hover:bg-neutral-50">Cancel</button>
          <button className="px-4 py-2 text-xs font-medium bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">Schedule Post</button>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function AccountsView() {
  // Built-in crisp SVG wrappers to replace the missing Lucide brand icons safely
  const platforms = [
    { 
      id: 'instagram', 
      name: 'Instagram Business', 
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ), 
      color: 'text-rose-600', 
      bg: 'hover:bg-rose-50/30', 
      connected: true, 
      handle: '@elcircle_studio' 
    },
    { 
      id: 'linkedin', 
      name: 'LinkedIn Company', 
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ), 
      color: 'text-sky-700', 
      bg: 'hover:bg-sky-50/30', 
      connected: true, 
      handle: 'ELCIRCLE Studio' 
    },
    { 
      id: 'twitter', 
      name: 'X / Twitter Developer', 
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      ), 
      color: 'text-neutral-900', 
      bg: 'hover:bg-neutral-50', 
      connected: false, 
      handle: null 
    },
  ];

  return (
    <div className="flex-1 bg-white p-10 overflow-y-auto select-none">
      <div className="max-w-xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight">Linked Profiles</h2>
          <p className="text-sm text-neutral-400 mt-1">Connect your brand social accounts to activate instant post scheduling logic chains.</p>
        </div>

        <div className="grid gap-3">
          {platforms.map((platform) => {
            const PlatIcon = platform.icon;
            return (
              <div key={platform.id} className="p-4 rounded-xl border border-neutral-100 flex items-center justify-between bg-white hover:border-neutral-200 transition-all duration-150">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center border border-neutral-100 ${platform.color}`}>
                    <PlatIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900">{platform.name}</h4>
                    <p className="text-[11px] font-semibold text-neutral-400 mt-0.5">{platform.connected ? platform.handle : 'Disconnected'}</p>
                  </div>
                </div>

                {platform.connected ? (
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
                    <CheckCircle2 size={11} /> Connected
                  </span>
                ) : (
                  <button className="text-[11px] font-bold bg-neutral-900 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors hover:bg-neutral-800">
                    Link <ArrowUpRight size={11} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
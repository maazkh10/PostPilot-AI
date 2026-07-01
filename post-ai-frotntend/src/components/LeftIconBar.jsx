import React from "react";
import { LayoutDashboard, PenTool, Link2, LogOut } from 'lucide-react';

export default function LeftIconBar({activeTab , setActiveTab , onLogout}) {
    const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'composer', label: 'AI Composer', icon: PenTool, hasBadge: true },
    { id: 'accounts', label: 'Linked Accounts', icon: Link2 },
  ];

  return(
    <div className="w-16 h-screen border-r border-neutral-100 flex flex-col items-center py-5 justify-between 
    bg-white select-none shrink-0 ">
        <div className="flex flex-col items-center gap-6 w-full px-2">
            {/* App Logo Indicator */}
        <div className="w-8 h-8 bg-neutral-900 text-white rounded-xl flex items-center justify-center font-bold text-xs shadow-xs">
          GG
        </div>
        <hr className="w-8 border-neutral-100" />
        <nav className="flex flex-col gap-2 w-full items-center">
            {navItems.map((item) =>{
                const IconComponenst = item.icon;
                const isActive = activeTab === item.id;
                return(
                    <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center relative group transition-all duration-150
                    ${isActive ? "bg-neutral-900 text-white" : "text-neutral-400 hover:text-neutral-900 hover:bg-neutral-50"}`}>
<IconComponenst size={20} strokeWidth={isActive ? 2.2 : 1.8} />

{item.hasBadge && !isActive && (
    <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
)}

                    </button>
                )
            })}
        </nav>
        </div>


{/* logout thing  */}


<div className="w-full px-2 flex justify-center">

<button>
    <LogOut size={19} strokeWidth={1.8} />
</button>
</div>

    </div>
  )
}
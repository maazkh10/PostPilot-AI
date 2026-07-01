import React, { useState } from 'react'
import { Sparkles, Eye, RefreshCw } from 'lucide-react';

function ComposerView() {
    const [prompt , setPrompt] = useState("")
    const [ previewText , setPreviewText] = useState("ur xxx will apear dynamicly hree")
 

    const handleGenrateText = () =>{
        if (! prompt) return ; 
        setPreviewText(`✨ [AI Generation]: "Crafting minimalist brand patterns with deliberate space. Every layout counts when you design for timeless aesthetic clarity."`);
    }
 
    return (
    <div className='flex-1 bg-white flex overflow-hidden w-full select-none'>
<div className='w-1/2 p-10 border-r border-neutral-100 flex flex-col justify-between overflow-y-auto'>

<div className='space-y-6'>
<div>
    <h2 className="text-xl font-bold text-neutral-900 tracking-tight flex items-center gap-2">AI Content Composer</h2>
            <p className="text-sm text-neutral-400 mt-1">Describe what your upcoming brand marketing campaign is about below.</p>
</div>


<div className='space-y-2'>
<label htmlFor="" className='text-[10px] font-bold text-neutral-400 uppercase tracking-wider'>
    Description topic text prompt
</label>

<textarea name=""
value={prompt} 
onChange={(e) => setPrompt(e.target.value)}
placeholder='nuhuhuhuhuohuhohuohuhohluohouh'
rows={5}
className="w-full border border-neutral-200 rounded-2xl p-4 text-sm focus:outline-none focus:border-neutral-900 resize-none font-normal placeholder-neutral-300 shadow-2xs leading-relaxed"
 />

</div>

<button
onClick={handleGenrateText}
disabled={!prompt}
className='w-full bg-neutral-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 disabled:opacity-30 shadow-sm'>
<Sparkles size={14} />
Genrate Smart Layout captions
</button>

</div>
</div>

{/* right side  */}
<div className="w-1/2 bg-neutral-50/50 p-10 flex flex-col items-center justify-center">
        <div className="w-full max-w-sm flex flex-col">
          <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-3">
            <Eye size={13} /> Live Preview Mockup
          </div>
          
          <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-xl flex flex-col justify-between min-h-[240px]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px]">88</div>
              <div>
                <h5 className="text-xs font-bold text-neutral-900">elcircle_studio</h5>
                <p className="text-[9px] text-neutral-400 font-medium">Scheduled Content Pipeline</p>
              </div>
            </div>

            <p className="text-xs text-neutral-700 font-medium leading-relaxed my-5 flex-1">{previewText}</p>
            
            <div className="border-t border-neutral-50 pt-3 flex items-center justify-between">
              <span className="text-[10px] text-neutral-400 font-semibold">Feed Target: Connected Account</span>
              <RefreshCw size={13} className="text-neutral-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ComposerView
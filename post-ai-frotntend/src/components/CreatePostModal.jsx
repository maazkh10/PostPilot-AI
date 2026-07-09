import React, { useState } from 'react';
import { notify } from '../utils/toast';
import { createPostApi } from '../api/postApi';

const AVAILABLE_PLATFORMS = ["Instagram", "Twitter", "LinkedIn"];

export default function CreatePostModal({ isOpen, onClose, onPostCreated }) {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState(""); 
  const [rawHashtags, setRawHashtags] = useState("");

  if (!isOpen) return null;

  const handlePlatformToggle = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      if (selectedPlatforms.length > 1) {
        setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
      } else {
        notify.error("At least one social platform must be selected.");
      }
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();

    if (!title || !caption || !date || !time) {
      notify.error("All fields must be completely filled out.");
      return;
    }

    try {
      const localScheduledString = `${date}T${time}:00`;
      const isoTimeStamp = new Date(localScheduledString).toISOString();
      
      // Clean up string hashtags input formatting
      const formattedHashtagsString = rawHashtags
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0)
        .map(tag => tag.startsWith("#") ? tag : `#${tag}`)
        .join(", "); // Joins array back into a single string line

      const payload = {
        title,
        caption,
        scheduledAt: isoTimeStamp,
        // ✅ Converts ["Instagram", "LinkedIn"] into string: "Instagram,LinkedIn"
        platform: selectedPlatforms.join(","), 
        status: "Scheduled",
        hashtags: formattedHashtagsString || null
      };

      const res = await createPostApi(payload);
      if (res.data && res.data.success) {
        notify.success("Post created successfully");
        
        // Reset local variables clean
        setTitle("");
        setCaption("");
        setDate("");
        setTime("");
        setRawHashtags("");
        setSelectedPlatforms(["Instagram"]);
        
        onPostCreated(); 
        onClose();
      }
    } catch (error) {
      const errormsg = error.response?.data?.message || "Internal system block failure";
      notify.error(errormsg);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/20 backdrop-blur-xs">
      <form onSubmit={handleCreatePost} className="bg-white rounded-2xl w-full max-w-md p-6 border border-neutral-100 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-neutral-900">Create Scheduled Post</h3>
          <button type="button" onClick={onClose} className="text-neutral-400 hover:text-neutral-600 text-sm p-1">✕</button>
        </div>
        
        <div className="space-y-4">
          {/* Platform Inverted Pills Selection */}
          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Target Platforms</label>
            <div className="flex gap-2">
              {AVAILABLE_PLATFORMS.map((platform) => {
                const isSelected = selectedPlatforms.includes(platform);
                return (
                  <button
                    key={platform}
                    type="button"
                    onClick={() => handlePlatformToggle(platform)}
                    className={`flex-1 py-2 text-xs font-medium rounded-xl border transition-all duration-150 ${
                      isSelected 
                        ? "bg-black text-white border-black shadow-sm" 
                        : "bg-neutral-50 text-neutral-500 border-neutral-200 hover:bg-neutral-100"
                    }`}
                  >
                    {platform === "Twitter" ? "X / Twitter" : platform}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className='block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5'>Post Title</label>
            <input 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Campaign Title'
              className='w-full text-sm rounded-lg border border-neutral-200 p-2.5 focus:outline-none focus:border-neutral-900 font-normal' 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Caption</label>
            <textarea 
              rows={3} 
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="What do you want to share?" 
              className="w-full text-sm rounded-lg border border-neutral-200 p-2.5 focus:outline-none focus:border-neutral-900 resize-none font-normal placeholder-neutral-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Hashtags</label>
            <input 
              type="text"
              value={rawHashtags}
              onChange={(e) => setRawHashtags(e.target.value)}
              placeholder="luxury, branding, design" 
              className="w-full text-sm rounded-lg border border-neutral-200 p-2.5 focus:outline-none focus:border-neutral-900 font-normal placeholder-neutral-400" 
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Schedule Date</label>
              <input 
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-sm rounded-lg border border-neutral-200 p-2 focus:outline-none focus:border-neutral-900" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">Schedule Time</label>
              <input 
                type="time" 
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full text-sm rounded-lg border border-neutral-200 p-2 focus:outline-none focus:border-neutral-900" 
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-4 py-2 text-xs font-medium border border-neutral-200 rounded-lg hover:bg-neutral-50">Cancel</button>
          <button type="submit" className="px-4 py-2 text-xs font-medium bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">Schedule Post</button>
        </div>
      </form>
    </div>
  );
}
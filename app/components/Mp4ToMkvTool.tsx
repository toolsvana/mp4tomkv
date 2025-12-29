'use client';
import { useState } from 'react';

export default function Mp4ToMkvTool() {
  const [feedback] = useState('This tool provides information about MP4 to MKV conversion. For actual conversion, please use desktop software like FFmpeg, HandBrake, or VLC Media Player.');

  return (
    <section className="glass-panel p-6 sm:p-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-amber-400"></span>
            Information guide
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">MP4 to MKV Converter</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">Learn about converting MP4 videos to MKV format. This page provides comprehensive information about the conversion process and recommended tools.</p>
        </div>
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
          <div className="flex items-start gap-4">
            <svg className="h-6 w-6 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/></svg>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">Browser Limitations</h3>
              <p className="text-sm leading-relaxed text-slate-300">{feedback}</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm font-semibold text-white">Recommended Desktop Tools:</p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• <strong>FFmpeg</strong> - Command-line tool (free, open-source)</li>
                  <li>• <strong>HandBrake</strong> - User-friendly GUI (free, open-source)</li>
                  <li>• <strong>VLC Media Player</strong> - Media player with conversion (free)</li>
                  <li>• <strong>MKVToolNix</strong> - Specialized MKV tool (free, open-source)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="mb-3 text-lg font-semibold text-white">Why Convert MP4 to MKV?</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Support for multiple audio tracks</li>
              <li>• Multiple subtitle tracks</li>
              <li>• Chapter markers</li>
              <li>• Better metadata support</li>
              <li>• No quality loss (container change only)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="mb-3 text-lg font-semibold text-white">Conversion Process</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Download desktop software</li>
              <li>• Load your MP4 file</li>
              <li>• Select MKV as output format</li>
              <li>• Choose quality settings</li>
              <li>• Start conversion</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

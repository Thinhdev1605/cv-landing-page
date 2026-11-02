'use client';

import React from 'react';
import { ArrowUp, Code2, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  isApiLive?: boolean;
}

export default function Footer({ isApiLive = false }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#070b12] text-xs text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center space-x-2 font-mono">
            <span className="text-orange-400 font-bold">&lt;quangthinh.dev /&gt;</span>
            <span className="text-slate-600">•</span>
            <span>Crafted with Next.js, NestJS &amp; Neon DB</span>
          </div>

          {/* Right Status & Back to Top */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 font-mono">
              <span
                className={`h-2 w-2 rounded-full inline-block ${
                  isApiLive ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                }`}
              />
              <span className={isApiLive ? 'text-emerald-400' : 'text-amber-400'}>
                API: {isApiLive ? 'Live (Wispbyte Connected)' : 'Cached / Local Ready'}
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-105"
              title="Về đầu trang"
            >
              <ArrowUp className="w-4 h-4 text-orange-400" />
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Kpa Trần Quang Thịnh. Lớp IT24M — Trường Đại học Đông Á.
          </div>
          <div>
            Kiến trúc Full-Stack Web • Next.js + NestJS + Neon PostgreSQL
          </div>
        </div>
      </div>
    </footer>
  );
}


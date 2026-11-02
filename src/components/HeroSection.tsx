'use client';

import React from 'react';
import { Profile } from '@/types';
import {
  ArrowRight,
  Terminal,
  FileText,
  Mail,
  MapPin,
  GraduationCap,
  Sparkles,
  Github,
  Linkedin,
  Database,
  Layers,
  Cpu,
} from 'lucide-react';

interface HeroSectionProps {
  profile: Profile;
  onOpenCvModal: () => void;
}

export default function HeroSection({ profile, onOpenCvModal }: HeroSectionProps) {
  const avatarSrc =
    profile.avatar_url && !profile.avatar_url.includes('avatars.githubusercontent.com')
      ? profile.avatar_url
      : '/avatar.jpg';

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background radial gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/15 to-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Introduction */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Sẵn sàng nhận dự án mới • Fresher Web Developer</span>
            </div>

            {/* Avatar + Main Greeting & Name */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
              <div className="relative group flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-300" />
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-orange-500/60 bg-[#0f172a] shadow-xl">
                  <img
                    src={avatarSrc}
                    alt={profile.full_name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span
                  className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-emerald-500 border-2 border-[#090d16] flex items-center justify-center shadow"
                  title="Sẵn sàng nhận dự án mới"
                >
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                </span>
              </div>

              <div className="space-y-1.5">
                <p className="text-xs sm:text-sm font-mono text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span>Xin chào, tôi là</span>
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                    {profile.full_name}
                  </span>
                </h1>
                <h2 className="text-base sm:text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                  {profile.title}
                </h2>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              {profile.bio}
            </p>

            {/* Quick Badges Info */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <GraduationCap className="w-4 h-4 text-orange-400" />
                <span>{profile.university} ({profile.class_name})</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{profile.location || 'Đà Nẵng, VN'}</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Database className="w-4 h-4 text-blue-400" />
                <span>Neon PostgreSQL</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Xem Dự Án Nổi Bật</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white border border-white/10 hover:border-orange-500/40 text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4 text-orange-400" />
                <span>Liên Hệ Trực Tiếp</span>
              </a>

              <button
                onClick={onOpenCvModal}
                className="flex items-center space-x-2 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-sm font-mono transition-all"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Bản Xem CV</span>
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-4 pt-4 text-slate-400 text-xs font-mono">
              <span>Mã nguồn & Kết nối:</span>
              <a
                href={profile.github_url || 'https://github.com/quangthinh'}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 hover:text-orange-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={profile.linkedin_url || '#'}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 hover:text-orange-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Code Window / Developer Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Glow border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>

              {/* Terminal Window */}
              <div className="relative rounded-2xl bg-[#0f172a] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
                {/* Terminal Header */}
                <div className="bg-[#1e293b] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-slate-400 text-[11px] ml-2">quangthinh@portfolio:~</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-400 text-[11px]">
                    <Terminal className="w-3.5 h-3.5 text-orange-400" />
                    <span>bash</span>
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-5 space-y-3 text-slate-300 overflow-x-auto leading-relaxed">
                  <div className="flex items-center space-x-2 text-slate-500">
                    <span className="text-emerald-400">$</span>
                    <span>cat developer-profile.json</span>
                  </div>

                  <div className="text-slate-200">
                    <span className="text-amber-400">&#123;</span>
                    <div className="pl-4 space-y-1">
                      <div>
                        <span className="text-blue-300">"candidate"</span>: <span className="text-orange-300">"{profile.full_name}"</span>,
                      </div>
                      <div>
                        <span className="text-blue-300">"class"</span>: <span className="text-orange-300">"{profile.class_name}"</span>,
                      </div>
                      <div>
                        <span className="text-blue-300">"university"</span>: <span className="text-orange-300">"{profile.university}"</span>,
                      </div>
                      <div>
                        <span className="text-blue-300">"role"</span>: <span className="text-emerald-300">"Full-Stack Web Fresher"</span>,
                      </div>
                      <div>
                        <span className="text-blue-300">"stack"</span>: [
                        <div className="pl-4 text-emerald-400">
                          "Next.js 14", "NestJS", "TypeScript",
                          <br />
                          "Neon PostgreSQL", "Tailwind CSS"
                        </div>
                        ],
                      </div>
                      <div>
                        <span className="text-blue-300">"hosting"</span>: <span className="text-purple-300">"Wispbyte (Node.js)"</span>,
                      </div>
                      <div>
                        <span className="text-blue-300">"status"</span>: <span className="text-emerald-400">"Ready for Opportunities"</span>
                      </div>
                    </div>
                    <span className="text-amber-400">&#125;</span>
                  </div>

                  {/* Terminal interactive indicator */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center space-x-2">
                      <span className="text-emerald-400 animate-pulse">●</span>
                      <span>System: TypeORM + SSL OK</span>
                    </div>
                    <span className="text-orange-400 font-bold">2 Projects Loaded</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar below terminal */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-lg font-bold font-mono text-orange-400">02</div>
                <div className="text-[11px] text-slate-400 font-mono">Dự án cốt lõi</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-lg font-bold font-mono text-amber-400">100%</div>
                <div className="text-[11px] text-slate-400 font-mono">TypeScript & SSL</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-lg font-bold font-mono text-emerald-400">IT24M</div>
                <div className="text-[11px] text-slate-400 font-mono">ĐH Đông Á</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


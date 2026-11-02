'use client';

import React, { useEffect } from 'react';
import { Profile, GroupedSkills, Project } from '@/types';
import { X, Printer, Download, Sparkles, GraduationCap, Mail, MapPin, Github } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
  groupedSkills: GroupedSkills[];
  projects: Project[];
}

export default function CvModal({
  isOpen,
  onClose,
  profile,
  groupedSkills,
  projects,
}: CvModalProps) {
  const avatarSrc =
    profile.avatar_url && !profile.avatar_url.includes('avatars.githubusercontent.com')
      ? profile.avatar_url
      : '/avatar.jpg';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-[#0f172a] rounded-2xl border border-orange-500/30 shadow-2xl overflow-hidden z-10 my-6 text-slate-200 animate-scale-up">
        {/* Top Control Bar */}
        <div className="bg-[#1e293b] px-6 py-3.5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-emerald-400 inline-block" />
            <span className="font-mono text-xs text-orange-400 font-semibold uppercase tracking-wider">
              Bản Xem Trước Hồ Sơ / Curriculum Vitae (CV)
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Tải / In PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="Đóng"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 font-sans print:p-0 print:max-h-none print:text-black">
          {/* Header of CV with Avatar */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {profile.full_name}
              </h1>
              <p className="text-base font-bold text-orange-400 font-mono">
                {profile.title}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 font-mono pt-2">
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-orange-400" />
                  {profile.university} • Lớp {profile.class_name}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-orange-400" />
                  {profile.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  {profile.location || 'Đà Nẵng'}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Github className="w-3.5 h-3.5 text-orange-400" />
                  GitHub: /quangthinh
                </span>
              </div>
            </div>

            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-orange-500/40 bg-[#1e293b] flex-shrink-0 shadow-lg">
              <img
                src={avatarSrc}
                alt={profile.full_name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Objective */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
              1. Mục Tiêu Nghề Nghiệp (Career Objective)
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
              2. Học Vấn (Education)
            </h2>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1 text-xs">
              <div className="flex justify-between items-center font-bold text-white">
                <span>{profile.university}</span>
                <span className="font-mono text-slate-400">Đang theo học chính khóa</span>
              </div>
              <div className="text-orange-400 font-mono">
                Ngành Công nghệ Thông tin • Lớp {profile.class_name}
              </div>
              <p className="text-slate-300 pt-1">
                Học phần trọng tâm: Lập trình mã nguồn mở, Cấu trúc dữ liệu &amp; Giải thuật, Hệ quản trị CSDL (PostgreSQL, MySQL), Phát triển Web Full-Stack với Next.js và NestJS.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
              3. Kỹ Năng Kỹ Thuật (Technical Skills)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {groupedSkills.map((grp) => (
                <div key={grp.category} className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="font-mono font-bold text-orange-400 block mb-1">
                    {grp.label}:
                  </span>
                  <span className="text-slate-200">
                    {grp.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
              4. Dự Án Tiêu Biểu (Featured Projects)
            </h2>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-white">
                      0{idx + 1}. {proj.title}
                    </span>
                    <span className="font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px]">
                      Hoàn thành
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                  {proj.long_description && (
                    <p className="text-slate-400 leading-relaxed">
                      {proj.long_description}
                    </p>
                  )}
                  <div className="pt-1 flex flex-wrap gap-1.5 font-mono text-[11px] text-orange-300">
                    <span className="text-slate-400">Tech:</span>
                    {proj.tech_stack.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


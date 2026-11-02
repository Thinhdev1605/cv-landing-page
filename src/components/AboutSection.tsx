'use client';

import React from 'react';
import { Profile } from '@/types';
import {
  User,
  GraduationCap,
  Layers,
  Database,
  Server,
  Code2,
  CheckCircle2,
  MapPin,
  Mail,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface AboutSectionProps {
  profile: Profile;
}

export default function AboutSection({ profile }: AboutSectionProps) {
  const avatarSrc =
    profile.avatar_url && !profile.avatar_url.includes('avatars.githubusercontent.com')
      ? profile.avatar_url
      : '/avatar.jpg';

  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-orange-400" />,
      title: 'Frontend Hiện Đại & Tối Ưu',
      description:
        'Chuyên sâu với Next.js (App Router), React và Tailwind CSS. Xây dựng giao diện Single-Page mượt mà, chuẩn Responsive trên mọi thiết bị và tích hợp dữ liệu động từ REST API.',
    },
    {
      icon: <Server className="w-5 h-5 text-amber-400" />,
      title: 'Backend NestJS & Clean Architecture',
      description:
        'Áp dụng kiến trúc module hoá chuẩn mực của NestJS (Controller, Service, Entity). Xây dựng RESTful API chặt chẽ, xác thực dữ liệu qua DTO, xử lý CORS và triển khai mượt mà trên hosting Wispbyte.',
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: 'Cơ Sở Dữ Liệu Cloud (Neon PostgreSQL)',
      description:
        'Thiết kế lược đồ quan hệ rõ ràng, tương tác CSDL qua TypeORM với kết nối SSL an toàn (sslmode=require). Làm việc thành thạo với PostgreSQL, MySQL và các công cụ quản trị CSDL.',
    },
  ];

  const quickFacts = [
    { label: 'Họ và tên', value: profile.full_name },
    { label: 'Cơ sở đào tạo', value: profile.university },
    { label: 'Lớp chuyên ngành', value: profile.class_name },
    { label: 'Định hướng nghề nghiệp', value: profile.title },
    { label: 'Địa bàn hoạt động', value: profile.location || 'Đà Nẵng, Việt Nam' },
    { label: 'Email liên hệ', value: profile.email },
  ];

  return (
    <section id="about" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-orange-400 uppercase tracking-widest">
            <span className="h-px w-6 bg-orange-400 inline-block" />
            <span>// 01. Về Bản Thân</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Về Bản Thân &amp; Định Hướng Nghề Nghiệp
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
            Tập trung giải quyết bài toán thực tế bằng các giải pháp kỹ thuật tinh gọn, cấu trúc mã nguồn sạch và hiệu năng tối ưu.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Bio & Focus Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f172a] border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-orange-400" />
                <span>Kỹ sư phần mềm hướng chất lượng (Quality-driven Developer)</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tôi là <strong className="text-white">{profile.full_name}</strong>, sinh viên lớp{' '}
                <strong className="text-orange-400 font-mono">{profile.class_name}</strong> tại{' '}
                <strong className="text-white">{profile.university}</strong>. Với đam mê mãnh liệt dành cho công nghệ web, mục tiêu hàng đầu của tôi là xây dựng những hệ sinh thái web Full-Stack hoàn chỉnh, từ giao diện người dùng sống động cho đến hệ thống backend vững chắc và cơ sở dữ liệu tin cậy.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Thay vì dừng lại ở việc tạo giao diện tĩnh, tôi tập trung vào kiến trúc phân tầng độc lập: Frontend Next.js tương tác REST API với Backend NestJS và lưu trữ trên nền tảng đám mây Neon PostgreSQL, sẵn sàng cho môi trường thực tế như Wispbyte.
              </p>

              <div className="pt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Tuân thủ Clean Code &amp; TypeScript</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Kết nối Neon SSL mode bảo mật</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>TypeORM Entity &amp; Migration chuẩn</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Triển khai Node.js Hosting Wispbyte</span>
                </div>
              </div>
            </div>

            {/* 3 Pillars Cards */}
            <div className="space-y-3">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-orange-500/30 transition-all flex items-start space-x-4 group"
                >
                  <div className="p-2.5 rounded-lg bg-[#1e293b] border border-white/10 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quick Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0f172a] border border-white/10 overflow-hidden shadow-xl">
              <div className="bg-[#1e293b] px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-orange-400" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Thông Tin Hồ Sơ
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
              </div>

              {/* Profile Photo & Name Banner */}
              <div className="p-5 sm:p-6 bg-[#111827] border-b border-white/5 flex items-center space-x-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-orange-500/40 flex-shrink-0 shadow-md">
                  <img
                    src={avatarSrc}
                    alt={profile.full_name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white leading-tight">
                    {profile.full_name}
                  </h4>
                  <p className="text-xs text-orange-400 font-mono">
                    {profile.class_name} • {profile.university}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {profile.title}
                  </p>
                </div>
              </div>

              <div className="p-6 divide-y divide-white/5">
                {quickFacts.map((fact, idx) => (
                  <div key={idx} className="py-3 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs gap-1">
                    <span className="text-slate-400 font-mono">{fact.label}</span>
                    <span className="text-white font-medium text-right break-words font-sans">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Highlight footer */}
              <div className="p-5 bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border-t border-white/10">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <p className="text-xs text-slate-300">
                    Sẵn sàng tiếp nhận cơ hội <strong>Fresher / Junior Web Developer</strong> và tham gia vào các dự án phần mềm chuyên nghiệp.
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Card */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-xs font-mono space-y-3">
              <div className="text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>// Kiến Trúc Hệ Thống Đang Triển Khai</span>
              </div>
              <div className="bg-[#090d16] p-3 rounded-xl border border-white/5 space-y-1 text-slate-300 text-[11px]">
                <div className="text-orange-400 font-bold">Client (Next.js 14 App Router)</div>
                <div className="text-slate-500">  ↓ REST API (HTTPS / CORS Enabled)</div>
                <div className="text-blue-400 font-bold">Backend (NestJS API on Wispbyte)</div>
                <div className="text-slate-500">  ↓ TypeORM (sslmode=require)</div>
                <div className="text-emerald-400 font-bold">Database (Neon Serverless PostgreSQL)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


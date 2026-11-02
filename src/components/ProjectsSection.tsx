'use client';

import React from 'react';
import { Project } from '@/types';
import {
  FolderGit2,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Server,
  Database,
  Cloud,
  Cpu,
  Sparkles,
} from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  // Feature highlights customized for the 2 projects
  const projectHighlights: Record<number, string[]> = {
    1: [
      'Giao diện One-Page chuẩn Responsive với Tailwind CSS và Next.js 14 App Router',
      'Kết nối REST API động từ NestJS backend, có cơ chế try/catch và dữ liệu fallback an toàn',
      'Định cấu hình biến môi trường NEXT_PUBLIC_API_URL tối ưu cho môi trường deploy',
      'Tích hợp điều hướng mượt mà (smooth scrolling) qua các anchor #about, #skills, #projects, #education, #contact',
    ],
    2: [
      'Kiến trúc RESTful API chuẩn mực gồm Controller, Service, Module và DTO Validation',
      'Xác thực người dùng qua JWT token kết hợp phân quyền theo vai trò (Role-based Access Control)',
      'Tương tác cơ sở dữ liệu PostgreSQL thông qua TypeORM Entity và Migration tự động',
      'Tích hợp Swagger UI trực quan giúp kiểm thử và xem tài liệu API ngay trên trình duyệt',
    ],
  };

  return (
    <section id="projects" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-orange-400 uppercase tracking-widest">
            <span className="h-px w-6 bg-orange-400 inline-block" />
            <span>// 03. Sản Phẩm &amp; Dự Án</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dự Án Tiêu Biểu &amp; Thực Chiến
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
            Các sản phẩm thực tế được thiết kế và triển khai với kiến trúc hoàn chỉnh từ CSDL Neon, API NestJS đến frontend Next.js.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const highlights = projectHighlights[project.id] || [
              'Xây dựng với TypeScript và kiến trúc module sạch',
              'Tối ưu hóa hiệu năng và kết nối cơ sở dữ liệu an toàn',
            ];

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#0f172a] border border-white/10 hover:border-orange-500/40 p-6 sm:p-8 space-y-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 group"
              >
                <div className="space-y-5">
                  {/* Project Top Bar */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform">
                        <FolderGit2 className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-slate-400">
                        Dự Án #0{index + 1}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center space-x-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Hoàn thành</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {project.description}
                    </p>
                    {project.long_description && (
                      <p className="text-xs text-slate-400 leading-relaxed pt-1">
                        {project.long_description}
                      </p>
                    )}
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                      <span>Điểm nhấn kiến trúc kỹ thuật:</span>
                    </div>
                    <ul className="space-y-2">
                      {highlights.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start space-x-2 text-xs text-slate-300 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[11px] font-mono text-slate-400">
                      Công nghệ sử dụng:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#1e293b] text-slate-300 border border-white/5 group-hover:border-orange-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Action Links */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Mã nguồn GitHub</span>
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-xs font-mono text-orange-400 hover:text-orange-300 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Xem Trực Tiếp</span>
                      </a>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-slate-500">
                    Kpa Trần Quang Thịnh • IT24M
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


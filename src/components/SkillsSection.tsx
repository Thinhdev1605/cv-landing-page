'use client';

import React, { useState, useMemo } from 'react';
import { GroupedSkills, Skill, SkillCategory } from '@/types';
import {
  Code,
  Globe,
  Server,
  Database,
  Wrench,
  Search,
  Sparkles,
  Terminal,
  Cpu,
} from 'lucide-react';

interface SkillsSectionProps {
  groupedSkills: GroupedSkills[];
}

export default function SkillsSection({ groupedSkills }: SkillsSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryMeta: Record<
    SkillCategory,
    { label: string; icon: React.ReactNode; color: string; badge: string }
  > = {
    language: {
      label: 'Ngôn ngữ lập trình',
      icon: <Code className="w-5 h-5 text-orange-400" />,
      color: 'border-orange-500/30 bg-orange-500/5',
      badge: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
    },
    frontend: {
      label: 'Frontend',
      icon: <Globe className="w-5 h-5 text-blue-400" />,
      color: 'border-blue-500/30 bg-blue-500/5',
      badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    },
    backend: {
      label: 'Backend & API',
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      color: 'border-emerald-500/30 bg-emerald-500/5',
      badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    },
    database: {
      label: 'Cơ sở dữ liệu',
      icon: <Database className="w-5 h-5 text-purple-400" />,
      color: 'border-purple-500/30 bg-purple-500/5',
      badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    },
    tool: {
      label: 'Công cụ & Môi trường',
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      color: 'border-amber-500/30 bg-amber-500/5',
      badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    },
  };

  const tabs = [
    { id: 'all', label: 'Tất cả kỹ năng' },
    { id: 'language', label: 'Ngôn ngữ' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Cơ sở dữ liệu' },
    { id: 'tool', label: 'Công cụ' },
  ];

  // Flatten and filter skills
  const filteredGroups = useMemo(() => {
    return groupedSkills
      .filter((group) => activeTab === 'all' || group.category === activeTab)
      .map((group) => {
        const filteredSkills = group.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase().trim()),
        );
        return {
          ...group,
          skills: filteredSkills,
        };
      })
      .filter((group) => group.skills.length > 0);
  }, [groupedSkills, activeTab, searchQuery]);

  const totalSkillCount = useMemo(() => {
    return groupedSkills.reduce((acc, g) => acc + g.skills.length, 0);
  }, [groupedSkills]);

  return (
    <section id="skills" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-orange-400 uppercase tracking-widest">
              <span className="h-px w-6 bg-orange-400 inline-block" />
              <span>// 02. Năng Lực Chuyên Môn</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Kỹ Năng &amp; Công Nghệ Thực Chiến
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Hệ thống công nghệ được tôi sử dụng thường xuyên trong việc xây dựng các ứng dụng Web Full-Stack và hệ thống cơ sở dữ liệu.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm kỹ năng..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0f172a] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50 font-mono transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs font-mono"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-500 text-slate-950 font-bold shadow-md shadow-orange-500/20'
                    : 'bg-[#0f172a] text-slate-300 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        {filteredGroups.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#0f172a] border border-white/5 space-y-3">
            <Terminal className="w-8 h-8 text-slate-500 mx-auto" />
            <p className="text-sm font-mono text-slate-400">
              Không tìm thấy kỹ năng nào phù hợp với từ khóa: &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="text-xs font-mono text-orange-400 hover:underline"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group) => {
              const meta = categoryMeta[group.category as SkillCategory] || {
                label: group.label,
                icon: <Code className="w-5 h-5 text-slate-300" />,
                color: 'border-white/10 bg-white/5',
                badge: 'bg-white/10 text-slate-300 border-white/10',
              };

              return (
                <div
                  key={group.category}
                  className="rounded-2xl bg-[#0f172a] border border-white/10 p-6 space-y-4 hover:border-orange-500/30 transition-all duration-300 group hover:shadow-xl hover:shadow-black/40"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-[#1e293b] border border-white/10 group-hover:scale-105 transition-transform">
                        {meta.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                          {group.label}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-400">
                          {group.skills.length} công nghệ
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Pill Grid */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.id}
                        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#1e293b]/70 hover:bg-[#1e293b] border border-white/5 hover:border-orange-500/40 text-slate-200 hover:text-white text-xs font-mono transition-all group/item"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400 inline-block group-hover/item:scale-125 transition-transform" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight note */}
                  <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                    <span>Dự án thực tế &amp; Clean Code</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-10 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center space-x-2 text-slate-300">
            <span className="text-emerald-400">✓</span>
            <span>
              Tổng cộng <strong>{totalSkillCount} kỹ năng</strong> được đồng bộ trực tiếp từ Neon Database qua NestJS REST API.
            </span>
          </div>
          <span className="text-orange-400">API Endpoint: /api/skills/grouped</span>
        </div>
      </div>
    </section>
  );
}


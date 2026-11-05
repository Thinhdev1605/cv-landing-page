'use client';

import React from 'react';
import { Service } from '@/types';
import {
  Globe,
  Server,
  Database,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Code2,
} from 'lucide-react';

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'globe':
        return <Globe className="w-6 h-6 text-orange-400" />;
      case 'server':
        return <Server className="w-6 h-6 text-amber-400" />;
      case 'database':
        return <Database className="w-6 h-6 text-emerald-400" />;
      case 'cloud':
        return <Cloud className="w-6 h-6 text-blue-400" />;
      default:
        return <Code2 className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="services" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-orange-400 uppercase tracking-widest">
              <span className="h-px w-6 bg-orange-400 inline-block" />
              <span>// 02. Dịch Vụ Cung Cấp</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Dịch Vụ Theo Thương Hiệu Cá Nhân
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Các giải pháp công nghệ Web Full-Stack chuyên nghiệp, từ giao diện người dùng Next.js đến hệ thống NestJS API và cơ sở dữ liệu Neon Cloud.
            </p>
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>Cam kết Clean Code &amp; Đúng Tiến Độ</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id || index}
              className="rounded-2xl bg-[#0f172a] border border-white/10 hover:border-orange-500/40 p-6 sm:p-8 space-y-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 group"
            >
              <div className="space-y-4">
                {/* Header: Icon + Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  {service.pricing_note && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300">
                      {service.pricing_note}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2 border-t border-white/5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Hạng mục cung cấp:
                  </span>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start space-x-2 text-xs text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Dịch vụ #{index + 1}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-orange-400 hover:text-orange-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Yêu cầu tư vấn</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

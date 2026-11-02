'use client';

import React, { useState } from 'react';
import { Profile } from '@/types';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  GraduationCap,
  CheckCircle2,
  Sparkles,
  MessageSquare,
} from 'lucide-react';

interface ContactSectionProps {
  profile: Profile;
}

export default function ContactSection({ profile }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-orange-400 uppercase tracking-widest">
            <span className="h-px w-6 bg-orange-400 inline-block" />
            <span>// 05. Kết Nối &amp; Hợp Tác</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kết Nối &amp; Hợp Tác Dự Án
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
            Bạn có cơ hội việc làm Web Developer Fresher, dự án cần xây dựng hoặc muốn trao đổi về giải pháp công nghệ? Đừng ngần ngại liên hệ với tôi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0f172a] border border-white/10 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-orange-400" />
                <span>Thông Tin Trực Tiếp</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Hiện tôi đang sẵn sàng tiếp nhận các cơ hội việc làm <strong>Fresher Web Developer / Software Developer</strong> tại Đà Nẵng hoặc làm việc Remote / Hybrid.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                      Hộp Thư Điện Tử
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-medium text-white hover:text-orange-400 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                      Trường &amp; Lớp Chuyên Ngành
                    </span>
                    <span className="text-sm font-medium text-white">
                      {profile.university} • Lớp {profile.class_name}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                      Địa Bàn Hoạt Động
                    </span>
                    <span className="text-sm font-medium text-white">
                      {profile.location || 'Đà Nẵng, Việt Nam'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-xs font-mono text-slate-400 block">
                  Mạng xã hội &amp; Kênh mã nguồn:
                </span>
                <div className="flex items-center space-x-3">
                  <a
                    href={profile.github_url || 'https://github.com/quangthinh'}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-all"
                  >
                    <Github className="w-4 h-4 text-orange-400" />
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href={profile.linkedin_url || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0f172a] border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Gửi Tin Nhắn Nhanh
                </h3>
                <p className="text-xs text-slate-400">
                  Điền thông tin vào biểu mẫu dưới đây, tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
                </p>
              </div>

              {isSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center space-x-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>
                    Cảm ơn bạn! Tin nhắn đã được gửi thành công. Tôi sẽ sớm phản hồi qua email.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Họ và Tên của bạn *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Địa chỉ Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="example@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Chủ đề / Mục đích liên hệ *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Trao đổi cơ hội việc làm / Hợp tác dự án..."
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Nội dung tin nhắn *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Chào Thịnh, tôi muốn trao đổi về vị trí Web Developer..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold text-sm shadow-lg shadow-orange-500/20 flex items-center justify-center space-x-2 transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <span className="h-4 w-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                      <span>Đang gửi thông tin...</span>
                    </div>
                  ) : (
                    <>
                      <span>Gửi Tin Nhắn Cho Tôi</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


'use client';

import React from 'react';
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  CheckCircle2,
  Code2,
  Sparkles,
  School,
} from 'lucide-react';

export default function EducationSection() {
  const courses = [
    {
      title: 'Lập trình mã nguồn mở',
      desc: 'Nghiên cứu kiến trúc Full-Stack, thực hành xây dựng hệ thống NestJS API, CSDL Neon PostgreSQL và Frontend Next.js.',
    },
    {
      title: 'Hệ quản trị CSDL & Tối ưu SQL',
      desc: 'Thiết kế lược đồ quan hệ ERD chuẩn 3NF, xử lý Transaction, kết nối ORM (TypeORM) và truy vấn tối ưu.',
    },
    {
      title: 'Cấu trúc dữ liệu & Giải thuật',
      desc: 'Tư duy thuật toán, cấu trúc dữ liệu cơ bản & nâng cao, tối ưu độ phức tạp thuật toán (Time & Space Complexity).',
    },
    {
      title: 'Phát triển ứng dụng Web Hiện Đại',
      desc: 'Nắm vững kiến trúc Client - Server, xác thực phân quyền, RESTful API, Single-Page Application và Responsive Design.',
    },
  ];

  return (
    <section id="education" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-orange-400 uppercase tracking-widest">
            <span className="h-px w-6 bg-orange-400 inline-block" />
            <span>// 04. Học Vấn &amp; Đào Tạo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Học Vấn &amp; Quá Trình Đào Tạo
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
            Nền tảng học thuật vững chắc tại giảng đường kết hợp việc tự nghiên cứu và phát triển các sản phẩm phần mềm thực tế.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main University Card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0f172a] border border-white/10 p-6 sm:p-8 space-y-6 hover:border-orange-500/30 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-start space-x-3.5">
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Đại học Đông Á
                  </h3>
                  <p className="text-sm text-orange-400 font-mono font-medium">
                    Ngành: Công nghệ Thông tin
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white font-bold">
                  Lớp: IT24M
                </span>
                <span className="mt-1 flex items-center gap-1 text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-orange-400" />
                  <span>Đang theo học chính khóa</span>
                </span>
              </div>
            </div>

            {/* University statement */}
            <p className="text-sm text-slate-300 leading-relaxed">
              Theo đuổi định hướng trở thành một <strong className="text-white">Full-Stack Web Developer</strong>. Tại trường, tôi chủ động rèn luyện tư duy lập trình cấu trúc, làm chủ các công nghệ web hiện đại (TypeScript, React, Next.js, NestJS), tích cực tham gia đồ án chuyên môn và đóng góp vào các dự án mã nguồn mở.
            </p>

            {/* Key Subjects */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span>Các học phần &amp; nội dung nghiên cứu tiêu biểu:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {courses.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#1e293b]/50 border border-white/5 hover:border-orange-500/20 transition-all space-y-1"
                  >
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                      <span>{course.title}</span>
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {course.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card: Academic Objectives & Values */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0f172a] border border-white/10 p-6 sm:p-8 space-y-5">
              <div className="flex items-center space-x-2.5 pb-3 border-b border-white/10">
                <Award className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
                  Mục Tiêu Học Tập &amp; Thực Tiễn
                </h3>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Hoàn thành xuất sắc đồ án học phần với kiến trúc hệ thống phân tầng và triển khai cloud thực tế.
                  </span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Xây dựng nền tảng vững chắc về TypeScript, RESTful API và cơ sở dữ liệu quan hệ PostgreSQL/MySQL.
                  </span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Rèn luyện tác phong làm việc chuyên nghiệp, viết code sạch, có tài liệu và quản lý phiên bản qua Git.
                  </span>
                </div>
              </div>

              {/* Class badge callout */}
              <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs font-mono space-y-1">
                <div className="text-orange-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sinh viên Lớp IT24M</span>
                </div>
                <p className="text-slate-300 text-[11px]">
                  Khoa Công nghệ Thông tin • Đại học Đông Á
                  <br />
                  Sẵn sàng gia nhập môi trường doanh nghiệp với tinh thần học hỏi cao và trách nhiệm công việc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


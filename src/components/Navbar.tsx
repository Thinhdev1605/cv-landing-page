'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2, Sparkles, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenCvModal: () => void;
  isApiLive?: boolean;
}

export default function Navbar({ onOpenCvModal, isApiLive = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'services', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Giới thiệu', id: 'about' },
    { href: '#services', label: 'Dịch vụ', id: 'services' },
    { href: '#skills', label: 'Kỹ năng', id: 'skills' },
    { href: '#projects', label: 'Dự án', id: 'projects' },
    { href: '#education', label: 'Học vấn', id: 'education' },
    { href: '#contact', label: 'Liên hệ', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center space-x-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-1">
                <span className="text-orange-400">&lt;</span>
                quangthinh
                <span className="text-orange-400">.dev /&gt;</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 -mt-0.5">
                IT24M • ĐH Đông Á
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#0f172a]/70 p-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-mono transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-500 text-slate-950 font-semibold shadow-md shadow-orange-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Live API badge */}
            <div
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border ${
                isApiLive
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
              }`}
              title={isApiLive ? 'Backend API NestJS đang kết nối' : 'Đang dùng dữ liệu cache / fallback'}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isApiLive ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                }`}
              />
              <span>{isApiLive ? 'NestJS API Live' : 'API Cached'}</span>
            </div>

            {/* View CV Button */}
            <button
              onClick={onOpenCvModal}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold text-xs font-mono shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Xem CV</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenCvModal}
              className="p-2 rounded-lg bg-orange-500 text-slate-950 font-bold text-xs"
              title="Xem CV"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d16]/98 border-b border-white/10 px-4 pt-3 pb-5 space-y-2 backdrop-blur-xl animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-mono text-slate-200 hover:bg-orange-500/10 hover:text-orange-400 border border-transparent hover:border-orange-500/20 transition-colors"
            >
              # {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">
              API Status: {isApiLive ? 'Connected' : 'Fallback'}
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="px-3 py-1.5 rounded-lg bg-orange-500 text-slate-950 font-bold text-xs font-mono"
            >
              Xem CV chi tiết
            </button>
          </div>
        </div>
      )}
    </header>
  );
}


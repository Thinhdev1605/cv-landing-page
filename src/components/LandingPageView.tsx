'use client';

import React, { useState } from 'react';
import { Profile, GroupedSkills, Project } from '@/types';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CvModal from '@/components/CvModal';

interface LandingPageViewProps {
  initialProfile: Profile;
  initialSkills: GroupedSkills[];
  initialProjects: Project[];
  isApiLive: boolean;
}

export default function LandingPageView({
  initialProfile,
  initialSkills,
  initialProjects,
  isApiLive,
}: LandingPageViewProps) {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100">
      {/* Sticky Fixed Navbar */}
      <Navbar
        onOpenCvModal={() => setIsCvModalOpen(true)}
        isApiLive={isApiLive}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          profile={initialProfile}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />
        <AboutSection profile={initialProfile} />
        <SkillsSection groupedSkills={initialSkills} />
        <ProjectsSection projects={initialProjects} />
        <EducationSection />
        <ContactSection profile={initialProfile} />
      </main>

      {/* Footer */}
      <Footer isApiLive={isApiLive} />

      {/* CV Preview Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        profile={initialProfile}
        groupedSkills={initialSkills}
        projects={initialProjects}
      />
    </div>
  );
}


import React from 'react';
import { getProfile, getSkillsGrouped, getProjects } from '@/lib/api';
import LandingPageView from '@/components/LandingPageView';

// Đảm bảo fetch dữ liệu động nhưng có cache revalidate
export const revalidate = 60;

export default async function HomePage() {
  // Fetch data từ Backend API (kèm cơ chế try/catch và fallback dữ liệu an toàn)
  const [profileRes, skillsRes, projectsRes] = await Promise.all([
    getProfile(),
    getSkillsGrouped(),
    getProjects(),
  ]);

  const isApiLive = profileRes.isLive || skillsRes.isLive || projectsRes.isLive;

  return (
    <LandingPageView
      initialProfile={profileRes.data}
      initialSkills={skillsRes.data}
      initialProjects={projectsRes.data}
      isApiLive={isApiLive}
    />
  );
}


import React from 'react';
import { getProfile, getServices, getSkillsGrouped, getProjects } from '@/lib/api';
import LandingPageView from '@/components/LandingPageView';

// Đảm bảo fetch dữ liệu động nhưng có cache revalidate
export const revalidate = 60;

export default async function HomePage() {
  // Fetch data từ Backend API (kèm cơ chế try/catch và fallback dữ liệu an toàn)
  const [profileRes, servicesRes, skillsRes, projectsRes] = await Promise.all([
    getProfile(),
    getServices(),
    getSkillsGrouped(),
    getProjects(),
  ]);

  const isApiLive =
    profileRes.isLive || servicesRes.isLive || skillsRes.isLive || projectsRes.isLive;

  return (
    <LandingPageView
      initialProfile={profileRes.data}
      initialServices={servicesRes.data}
      initialSkills={skillsRes.data}
      initialProjects={projectsRes.data}
      isApiLive={isApiLive}
    />
  );
}


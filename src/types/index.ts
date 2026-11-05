export interface Profile {
  id: number;
  full_name: string;
  title: string;
  bio: string;
  university: string;
  class_name: string;
  email: string;
  phone?: string;
  github_url?: string;
  linkedin_url?: string;
  avatar_url?: string;
  location?: string;
  created_at?: string;
  updated_at?: string;
}

export type SkillCategory = 'language' | 'frontend' | 'backend' | 'database' | 'tool';

export interface Skill {
  id: number;
  name: string;
  category: SkillCategory;
  sort_order: number;
  icon_url?: string;
}

export interface GroupedSkills {
  category: SkillCategory;
  label: string;
  skills: Skill[];
}

export type ProjectStatus = 'completed' | 'in_progress' | 'planned';

export interface Project {
  id: number;
  title: string;
  description: string;
  long_description?: string;
  tech_stack: string[];
  github_url?: string;
  live_url?: string;
  image_url?: string;
  status: ProjectStatus;
  sort_order: number;
  is_featured: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing_note?: string;
  sort_order: number;
}



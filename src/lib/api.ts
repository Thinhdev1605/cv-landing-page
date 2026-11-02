import { Profile, Skill, GroupedSkills, Project } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// ============================================================
// DỮ LIỆU DỰ PHÒNG (FALLBACK DATA)
// Đảm bảo giao diện luôn hiển thị đầy đủ, đẹp mắt ngay cả khi API chưa kịp phản hồi
// ============================================================

export const FALLBACK_PROFILE: Profile = {
  id: 1,
  full_name: 'Kpa Trần Quang Thịnh',
  title: 'Web Developer / Software Developer Fresher',
  bio: 'Sinh viên ngành Công nghệ thông tin đam mê lập trình và phát triển hệ thống web full-stack, mong muốn ứng dụng kiến thức về Next.js, NestJS và kiến trúc cơ sở dữ liệu để tạo ra các sản phẩm hoàn chỉnh, tối ưu hiệu năng.',
  university: 'Đại học Đông Á',
  class_name: 'IT24M',
  email: 'quangthinh@example.com',
  phone: '+84 xxx xxx xxx',
  github_url: 'https://github.com/quangthinh',
  linkedin_url: 'https://linkedin.com/in/quangthinh',
  avatar_url: '/avatar.jpg',
  location: 'Đà Nẵng, Việt Nam',
};

export const FALLBACK_GROUPED_SKILLS: GroupedSkills[] = [
  {
    category: 'language',
    label: 'Ngôn ngữ lập trình',
    skills: [
      { id: 1, name: 'TypeScript', category: 'language', sort_order: 1 },
      { id: 2, name: 'JavaScript', category: 'language', sort_order: 2 },
      { id: 3, name: 'Python', category: 'language', sort_order: 3 },
      { id: 4, name: 'Java', category: 'language', sort_order: 4 },
    ],
  },
  {
    category: 'frontend',
    label: 'Frontend',
    skills: [
      { id: 5, name: 'Next.js', category: 'frontend', sort_order: 1 },
      { id: 6, name: 'React', category: 'frontend', sort_order: 2 },
      { id: 7, name: 'Tailwind CSS', category: 'frontend', sort_order: 3 },
      { id: 8, name: 'HTML5', category: 'frontend', sort_order: 4 },
      { id: 9, name: 'CSS3', category: 'frontend', sort_order: 5 },
    ],
  },
  {
    category: 'backend',
    label: 'Backend',
    skills: [
      { id: 10, name: 'NestJS', category: 'backend', sort_order: 1 },
      { id: 11, name: 'Node.js', category: 'backend', sort_order: 2 },
      { id: 12, name: 'RESTful API', category: 'backend', sort_order: 3 },
      { id: 13, name: 'TypeORM', category: 'backend', sort_order: 4 },
    ],
  },
  {
    category: 'database',
    label: 'Cơ sở dữ liệu',
    skills: [
      { id: 14, name: 'PostgreSQL (Neon)', category: 'database', sort_order: 1 },
      { id: 15, name: 'MySQL', category: 'database', sort_order: 2 },
    ],
  },
  {
    category: 'tool',
    label: 'Công cụ & Môi trường',
    skills: [
      { id: 16, name: 'Visual Studio Code', category: 'tool', sort_order: 1 },
      { id: 17, name: 'Git', category: 'tool', sort_order: 2 },
      { id: 18, name: 'GitHub', category: 'tool', sort_order: 3 },
      { id: 19, name: 'Postman', category: 'tool', sort_order: 4 },
      { id: 20, name: 'XAMPP', category: 'tool', sort_order: 5 },
      { id: 21, name: 'VMware', category: 'tool', sort_order: 6 },
    ],
  },
];

export const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'NextJS Landing Page Cá Nhân',
    description: 'Hệ thống Web CV / Landing Page cá nhân Full-Stack với kiến trúc hiện đại, dữ liệu động từ NestJS API.',
    long_description: 'Kiến trúc Full-Stack sử dụng Next.js (App Router) cho frontend, NestJS REST API cho backend, Neon PostgreSQL làm cơ sở dữ liệu và triển khai trên Wispbyte. Thiết kế One-Page với smooth scroll, responsive hoàn toàn trên mọi thiết bị.',
    tech_stack: ['Next.js', 'NestJS', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'TypeORM', 'Neon', 'Wispbyte'],
    github_url: 'https://github.com/quangthinh/cv-landing-page',
    live_url: undefined,
    status: 'completed',
    sort_order: 1,
    is_featured: true,
  },
  {
    id: 2,
    title: 'NestJS Product Management API',
    description: 'Hệ thống REST API CRUD quản lý sản phẩm với xác thực dữ liệu, phân quyền và kết nối CSDL qua TypeORM.',
    long_description: 'Xây dựng REST API hoàn chỉnh với NestJS framework, bao gồm xác thực JWT, phân quyền theo vai trò (RBAC), validation với class-validator, kết nối PostgreSQL qua TypeORM với migration, và tài liệu Swagger tự động.',
    tech_stack: ['NestJS', 'TypeScript', 'TypeORM', 'PostgreSQL', 'JWT', 'Swagger', 'class-validator'],
    github_url: 'https://github.com/quangthinh/nestjs-product-api',
    live_url: undefined,
    status: 'completed',
    sort_order: 2,
    is_featured: true,
  },
];

// ============================================================
// API FETCH CLIENT WITH TIMEOUT & FALLBACK
// ============================================================

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 4000): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

export async function getProfile(): Promise<{ data: Profile; isLive: boolean }> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/profile`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json.data) {
      const data = json.data;
      // Ưu tiên hiển thị ảnh avatar thực tế của bạn nếu DB đang lưu URL github mặc định
      if (!data.avatar_url || data.avatar_url.includes('avatars.githubusercontent.com')) {
        data.avatar_url = '/avatar.jpg';
      }
      return { data, isLive: true };
    }
  } catch (err) {
    console.warn('⚠️ [API Profile] Không thể kết nối API Backend, sử dụng dữ liệu fallback:', err);
  }
  return { data: FALLBACK_PROFILE, isLive: false };
}

export async function getSkillsGrouped(): Promise<{ data: GroupedSkills[]; isLive: boolean }> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/skills/grouped`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json.data && Array.isArray(json.data) && json.data.length > 0) {
      return { data: json.data, isLive: true };
    }
  } catch (err) {
    console.warn('⚠️ [API Skills] Không thể kết nối API Backend, sử dụng dữ liệu fallback:', err);
  }
  return { data: FALLBACK_GROUPED_SKILLS, isLive: false };
}

export async function getProjects(): Promise<{ data: Project[]; isLive: boolean }> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/api/projects`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json.data && Array.isArray(json.data) && json.data.length > 0) {
      return { data: json.data, isLive: true };
    }
  } catch (err) {
    console.warn('⚠️ [API Projects] Không thể kết nối API Backend, sử dụng dữ liệu fallback:', err);
  }
  return { data: FALLBACK_PROJECTS, isLive: false };
}


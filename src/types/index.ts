import type { IconType } from 'react-icons';

export type TeamMember = {
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
  location?: string;
  links?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
    website?: string;
  };
};

export type Platform = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  Icon: IconType;
  color: string;
  route: string;
};

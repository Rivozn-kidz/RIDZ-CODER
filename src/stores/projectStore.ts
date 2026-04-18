import { create } from 'zustand';
import type { Project } from '@/types';
import { DEFAULT_PROJECTS } from '@/constants/mockData';

const STORAGE_KEY = 'ridz-projects';

function loadProjects(): Project[] {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return JSON.parse(saved);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
  return DEFAULT_PROJECTS;
}

function saveProjects(projects: Project[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

interface ProjectState {
  projects: Project[];
  addProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProject: (id: string, data: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  reorderProjects: (projects: Project[]) => void;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: loadProjects(),

  addProject: (data) => {
    const newProject: Project = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const updated = [...get().projects, newProject].sort(
      (a, b) => a.sortOrder - b.sortOrder
    );
    saveProjects(updated);
    set({ projects: updated });
  },

  updateProject: (id, data) => {
    const updated = get().projects.map((p) =>
      p.id === id ? { ...p, ...data, updatedAt: new Date().toISOString() } : p
    ).sort((a, b) => a.sortOrder - b.sortOrder);
    saveProjects(updated);
    set({ projects: updated });
  },

  deleteProject: (id) => {
    const updated = get().projects.filter((p) => p.id !== id);
    saveProjects(updated);
    set({ projects: updated });
  },

  reorderProjects: (projects) => {
    saveProjects(projects);
    set({ projects });
  },
}));

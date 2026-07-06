import jobsData from '../data/jobs.json';
import type { Job } from '../types/career';

export async function getJobs(): Promise<Job[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return jobsData as Job[];
}

export async function getJobById(id: string): Promise<Job | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return (jobsData as Job[]).find((job) => job.id === id);
}

export async function getJobBySlug(slug: string): Promise<Job | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return (jobsData as Job[]).find((job) => job.slug === slug);
}

export async function getJobsByDepartment(department: string): Promise<Job[]> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return (jobsData as Job[]).filter(
    (job) => job.department.toLowerCase() === department.toLowerCase()
  );
}

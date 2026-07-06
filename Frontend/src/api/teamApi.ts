import teamData from '../data/team.json';
import type { TeamMember } from '../types/team';

export async function getTeamMembers(): Promise<TeamMember[]> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return teamData as TeamMember[];
}

export interface Team {
  name: string;
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
  division: 'college-mens' | 'college-womens' | 'club-mens';
}

export interface Ranking {
  team: string;
  rank: number;
  year: number;
  division: 'college-mens' | 'college-womens' | 'club-mens';
}

export interface DynastyData {
  team: string;
  division: 'college-mens' | 'college-womens' | 'club-mens';
  years: number[];
  averageRank: number;
  championships: number;
  top4Finishes: number;
  top8Finishes: number;
} 
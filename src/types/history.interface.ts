interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
}

interface Achievement {
  id: number;
  time: string;
  title: string;
  description: string;
}

interface History {
  id: number;
  attributes:{history_of_development: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  achievements: Achievement[];
  milestones: Milestone[];}
  
}

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
  documentId: string;
  history_of_development: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  achievements: Achievement[];
  milestones: Milestone[];
}

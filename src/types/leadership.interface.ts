export interface Leader {
  id: number;
  name: string;
  title: string;
  image: {data: Image};
  description: string | null;
}

export interface Leadership {
  id: number;
  attributes: {
    description: string;
    structure: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    leaders: Leader[];
  };
}

export interface Leader {
  id: number;
  name: string;
  title: string;
  image: Image;
  description: string | null;
}

export interface Leadership {
  id: number;
  documentId: string;
  description: string;
  structure: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  leaders: Leader[];
}

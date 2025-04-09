interface CoreValue {
  id: number;
  title: string;
  description: string;
}

interface Objective {
  id: number;
  name: string;
}

interface Vision {
  id: number;
  documentId: string;
  vision: string;
  mission: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  core_values: CoreValue[];
  objectives: Objective[];
}

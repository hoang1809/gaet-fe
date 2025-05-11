export type Activity = {
  id: number;
  title: string;
  description: string;
};

export type Activities_layout = "layout1" | "layout2" | "layout3" | "layout4";

export type Locolizations = BusinessDetail[];

export type BusinessDetail = {
  id: number;
  documentId: string;
  attributes: {
    title: string;
    subtitle: string;
    general: string;
    commitment: string;
    createdAt: string;
    locale: string;
    updatedAt: string;
    publishedAt: string;
    localizations: Locolizations;
    activities_layout: Activities_layout;
    cover: { data: Image };
    activities: Activity[];
    images: { data: Image[] };
  };
};

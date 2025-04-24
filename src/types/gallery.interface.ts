type BaseMedia = {
  id: string;
  url: string;
  // Add common media fields here
};

export type Image = BaseMedia & {
  format: "jpeg" | "png" | "webp"; // example formats
};

export type Video = BaseMedia & {
  duration: number;
  format: "mp4" | "webm"; // example formats
};

export type Gallery<T extends "image" | "video" = "image" | "video"> = {
  id: number;
  documentId: string;
  title: string;
  type: T;
  media: T extends "image" ? Image[] : Video[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Image;
};

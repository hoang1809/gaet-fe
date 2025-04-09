import { BlocksContent } from "@strapi/blocks-react-renderer";

export type NewsDetail = {
  id: number;
  documentId: string;
  title: string;
  content: BlocksContent;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  cover: Image;
  tags: Array<{
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }>;
};

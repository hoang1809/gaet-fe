import { BlocksContent } from "@strapi/blocks-react-renderer";

export type Tag = {
  id: number;
  documentId: string;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type NewsDetail = {
  id: number;
  documentId: string;
  attributes: {
    title: string;
    content: BlocksContent;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: string;
    cover: {data: Image};
    tags: {data: Tag[]};
  };
};

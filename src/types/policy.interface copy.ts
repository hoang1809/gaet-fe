import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Policy {
  id: number;
  documentId: string;
  content: BlocksContent;
}

export interface Terms {
  id: number;
  documentId: string;
  content: BlocksContent;
}

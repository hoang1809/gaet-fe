import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Policy {
  id: number;
  attributes: {
    content: BlocksContent;
  };
}

export interface Terms {
  id: number;
  attributes: {
    content: BlocksContent;
  };
}

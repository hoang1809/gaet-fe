import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface About {
  id: number;
  documentId: string;
  attributes: {
    overview: string;
    details: BlocksContent;
    address: string;
    image: { data: Image };
    email: string;
    phone_number1: string;
    phone_number2: string;
    website: string;
    facebook: string;
    instagram: string;
    twitter: string;
    createdAt: string;
  };
}

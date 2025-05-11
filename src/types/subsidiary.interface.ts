import { BlocksContent } from "@strapi/blocks-react-renderer";


export type Subsidiary = {
  id: number;
  attributes: {
    name: string;
    description: string;
    phone_number: string;
    fax: string;
    address: string;
    email: string;
    website: string;
    functions: BlocksContent;
    createdAt: string;
    updatedAt: string;
    image: {data: Image};
  };
};

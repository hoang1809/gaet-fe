interface Video {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Partner {
  id: number;
  name: string;
  logo: Image;
}

interface Feature {
  id: number;
  title: string;
  description: string;
}

interface Home {
  id: number;
  documentId: string;
  description: string;
  business_description: string;
  partner_description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  video: Video;
  partners: Partner[];
  features: Feature[];
}

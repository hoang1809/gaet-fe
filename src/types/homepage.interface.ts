interface Video {
  id: number;
  attributes: {
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
  };
}

interface Partner {
  id: number;
  attributes: {
    name: string;
    logo: { data: Image };
  };
}

interface Feature {
  id: number;
  title: string;
  description: string;
}

interface Banner {
  id: number;
  image: { data: Image };
  url: string;
}

interface Home {
  id: number;
  attributes: {
    documentId: string;
    description: string;
    business_description: string;
    partner_description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    video: { data: Video };
    partners: Partner[];
    features: Feature[];
    banners: Banner[];
  };
}

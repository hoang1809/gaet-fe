type MediaType = 'image' | 'video' | 'file';
interface Format {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

interface MediaAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: {
    large?: Format;
    small?: Format;
    medium?: Format;
    thumbnail?: Format;
  } | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
}

interface Media {
  id: number;
  attributes: MediaAttributes;
}

interface Cover {
  data: Media;
}

interface LocalizationAttributes {
  title: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
}

interface Localization {
  id: number;
  attributes: LocalizationAttributes;
}

interface Attributes {
  title: string;
  type: MediaType;
  createdAt: string;
  updatedAt: string;
  locale: string;
  cover: Cover;
  media: {
    data: Media[];
  };
  localizations: {
    data: Localization[];
  };
}

interface Gallery {
  id: number;
  attributes: Attributes;
}

export interface ModelType {
  sys: {
    id: string;
    publishedAt?: string;
    firstPublishedAt?: string;
    publishedVersion?: string;
  };
  contentfulMetadata: {
    tags: {
      id: string;
      name: string;
    };
  };
  title: string;
  subtitle: string;
  description: {
    json: Object;
  };
  image: {
    items: {
      url: string;
    }[];
  };
  thumbnail: {
    url: string;
  };
  categories: {
    items: {
      title: string;
      subtitle: string;
      thumbnail: {
        url: string;
      };
    }[];
  };
  price: number;
  size: string[];
  color: string[];
}

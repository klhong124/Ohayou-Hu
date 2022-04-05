export interface ProductType {
  _id: any;
  model: ModelType;
  size: string;
  color: string;
  status: any;
  created_at: Date;
  updated_at: Date;
}

export interface ModelType {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string[];
  size: string[];
  color: string[];
  categories: string[];
  price: number;
  thumbnail: string;
  tag: string[];
  created_at: Date;
  updated_at: Date;
}
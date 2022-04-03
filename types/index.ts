export interface ProductType {
  _id: any;
  model: ModelType;
  tag: [string];
  image: [string];
  price: number;
  size: string;
  color: string;
  status: any;
  categories: [any];
  created_at: Date;
  updated_at: Date;
}

export interface ModelType {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  tag: [string];
  created_at: Date;
  updated_at: Date;
}
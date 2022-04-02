export interface ProductType {
  _id: any;
  model: any;
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
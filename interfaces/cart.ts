import { ISize, IType } from "./products";

export interface ICartProduct {
  _id?: string;
  image: string;
  price: number;
  size?: ISize;
  slug: string;
  title: string;
  gender: "men" | "women" | "kid" | "unisex";
  type: IType;
  quantity: number;
  totalPrice: number;
}

export interface shippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  
  zip: string;
  city: string;
  country: string;
  phone: string;
}

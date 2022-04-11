import { ISize, IType } from './products'

export interface ICartProduct {
    _id?: string;
    image: string;
    price: number;
    size?: ISize;
    slug: string;
    title: string;
    gender: 'men'|'women'|'kid'|'unisex';
    type: IType;
    quantity: number;
}
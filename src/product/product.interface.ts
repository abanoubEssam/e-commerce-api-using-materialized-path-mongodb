import { Document } from 'mongoose';

export interface Product extends Document {
    _id: string;
    id: string
    name: string;
    price: number;
    currency: string;
    categories: string[];
    createdAt: string;
    updatedAt: string;
}

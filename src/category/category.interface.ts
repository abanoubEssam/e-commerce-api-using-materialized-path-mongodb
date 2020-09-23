import { Document } from 'mongoose';

export interface Category extends Document {
    _id: string;
    id: string
    name: string;
    parent: string
    category: string;
    createdAt: string;
    updatedAt: string;
}

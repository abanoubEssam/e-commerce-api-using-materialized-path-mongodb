import { Schema } from 'mongoose';


export const ProductSchema: Schema = new Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    currency: {
        type: String,
    },
    categories: {
        type: [String]
    }

}, { timestamps: true });



ProductSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret.deleted;
        delete ret._id;
        delete ret.__v;
    },
});

import { Schema } from 'mongoose';


export const CategorySchema: Schema = new Schema({

    name: {
        type: String,
        required: true
    },
    parent: {
        type: String,
        default: '/'
    },
    category: {
        type: String
    }

}, { timestamps: true });


CategorySchema.index({ parent: 1, category: 1 , name: 1 })

CategorySchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret.deleted;
        delete ret._id;
        delete ret.__v;
    },
});

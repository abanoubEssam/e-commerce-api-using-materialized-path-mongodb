import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { json } from 'express';
import { Model } from 'mongoose';
import { PRODUCT_MODEL_NAME } from '../utils/constants/model-names';
import { FindProductsDto } from './dtos/find-products.dto';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
    constructor(@InjectModel(PRODUCT_MODEL_NAME) private readonly _productModel: Model<Product>) { }

    async createProduct(
        product: Product
    ): Promise<Product> {
        return await this._productModel.create(product)
    }

    async findProduct(
        findProductsDto: FindProductsDto
    ): Promise<Product[]> {
        let query = {}
        if (findProductsDto.name) {
            query = {
                ...query,
                name: findProductsDto.name
            }
        }
        if (findProductsDto.categories) {
            query = {
                ...query,
                categories: {$in: JSON.parse(findProductsDto.categories as any)}
            }
        }

        return await this._productModel.find(query)

    }
}

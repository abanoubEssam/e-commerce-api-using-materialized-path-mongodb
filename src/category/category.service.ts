import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CATEGORY_MODEL_NAME } from '../utils/constants/model-names';
import { Category } from './category.interface';
import { FindDirectCategoriesDto } from './dtos/find-direct-ance-categories.dto';
import { FindSubtreeCategoriesDto } from './dtos/find-subtree-categories.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(CATEGORY_MODEL_NAME) private readonly _categoryModel: Model<Category>) { }

    async createCategory(
        category: Category
    ): Promise<Category> {
        return await this._categoryModel.create(category)
    }

    async findDirectCategoryAncestor(findDirectCategoriesDto: FindDirectCategoriesDto): Promise<Category[]> {
        let query = {
            parent: /^\/$/
        }
        if (findDirectCategoriesDto.category) {
            query = {
                ...query,
                parent: new RegExp(`^${findDirectCategoriesDto.category}$`)
            }
        }
        const coveredQuery =  await this._categoryModel.find(query, { parent: 1, category: 1 , name: 1, _id: 0 })

        return coveredQuery
    }


    async findSubtreeCategory(findSubtreeCategoriesDto: FindSubtreeCategoriesDto): Promise<Category[]> {
        let query = {
            parent: /^\//
        }
        if (findSubtreeCategoriesDto.category) {
            query = {
                ...query,
                parent: new RegExp(`^${findSubtreeCategoriesDto.category}`)
            }
        }
        const coveredQuery =  await this._categoryModel.find(query, { parent: 1, category: 1 , name: 1, _id: 0 })

        return coveredQuery
    }
}

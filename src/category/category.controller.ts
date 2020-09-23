import { Category } from './category.interface';
import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { FindDirectCategoriesDto } from './dtos/find-direct-ance-categories.dto';
import { FindSubtreeCategoriesDto } from './dtos/find-subtree-categories.dto';

@Controller('categories')
export class CategoryController {
    constructor(
        private readonly _categoryService: CategoryService
    ) { }

    @Post('/')
    async createCategory(
        @Body() category: Category
    ): Promise<Category> {
        return await this._categoryService.createCategory(category)
    }

    @Get('/direct-ancestors')
    findDirectAncestorCategories(
        @Query() findDirectCategoriesDto: FindDirectCategoriesDto
    ): Promise<Category[]> {
        return this._categoryService.findDirectCategoryAncestor(findDirectCategoriesDto)
    }
    
    @Get('/subtree')
    findSubtreeCategories(
        @Query() findSubtreeCategoriesDto: FindSubtreeCategoriesDto
    ): Promise<Category[]> {
        return this._categoryService.findSubtreeCategory(findSubtreeCategoriesDto)
    }
}

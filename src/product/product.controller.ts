import { Product } from './product.interface';
import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { FindProductsDto } from './dtos/find-products.dto';

@Controller('products')
export class ProductController {
    constructor(
        private readonly _productService: ProductService
    ) { }

    @Post('/')
    async createProduct(
        @Body() product: Product
    ): Promise<Product> {
        return await this._productService.createProduct(product)
    }

    @Get('/')
    findProducts(
        @Query() findProductsDto: FindProductsDto
    ): Promise<Product[]> {
        return this._productService.findProduct(findProductsDto)
    }
}

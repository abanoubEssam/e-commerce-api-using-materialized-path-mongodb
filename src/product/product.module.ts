import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PRODUCT_MODEL_NAME } from '../utils/constants/model-names';
import { ProductSchema } from './prodyct.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PRODUCT_MODEL_NAME,
        schema: ProductSchema
      }
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}

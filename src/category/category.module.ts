import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CATEGORY_MODEL_NAME } from '../utils/constants/model-names';
import { CategorySchema } from './category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CATEGORY_MODEL_NAME,
        schema: CategorySchema
      }
    ])
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}

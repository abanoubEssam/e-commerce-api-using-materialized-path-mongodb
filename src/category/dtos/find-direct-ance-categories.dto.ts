import { IsString } from "class-validator";

export class FindDirectCategoriesDto {
    
    @IsString()
    category: string;

    
  }
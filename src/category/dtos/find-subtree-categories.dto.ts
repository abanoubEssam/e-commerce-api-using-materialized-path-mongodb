import { IsString } from "class-validator";

export class FindSubtreeCategoriesDto {
    
    @IsString()
    category: string;

    
  }
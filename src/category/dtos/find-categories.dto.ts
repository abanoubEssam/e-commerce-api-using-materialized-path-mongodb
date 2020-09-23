import { IsString } from "class-validator";

export class FindCategoriesDto {
    
    @IsString()
    name: string;

    @IsString()
    parent: string;

    
  }
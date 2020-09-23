import { Type } from "class-transformer";
import { IsArray, IsString } from "class-validator";

export class FindProductsDto {
    
    @IsString()
    name: string;

    @IsArray()
    @Type(()=> Array)
    categories: string[];
    
  }
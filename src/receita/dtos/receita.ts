
import { IsArray, IsNotEmpty, IsNumberString, IsString } from 'class-validator'

export class ReceitaDTO
{   


    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    // @IsArray()
    // @IsString({ each: true })
    task: string[];

    // @IsArray()
    // @IsString({ each: true })
    tags: string[];
}
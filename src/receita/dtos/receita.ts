
import { IsNotEmpty } from 'class-validator'

export class ReceitaDTO
{   
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    task: string;

    tags: string;
}
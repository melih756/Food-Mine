export class Food{
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favourite:boolean=false;
    stars:number=0;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}
import { Category } from './Category';
import { Tag } from './Tag';
export interface Pet {
    id?: number;
    category?: Category;
    name: string;
    photoUrls: Array<string>;
    tags?: Array<Tag>;
    status?: PetStatus;
}
export declare type PetStatus = "available" | "pending" | "sold";

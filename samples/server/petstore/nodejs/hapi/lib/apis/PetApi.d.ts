import * as hapi from '@hapi/hapi';
import { ApiResponse } from '../models/ApiResponse';
import { Pet } from '../models/Pet';
export interface HapiHandlers {
    addPet(bodyParams: Pet): Pet;
    deletePet(pathParams: {
        petId: number;
    }): void;
    findPetsByStatus(queryParams: {
        status: Array<'available' | 'pending' | 'sold'>;
    }): Array<Pet>;
    findPetsByTags(queryParams: {
        tags: Array<string>;
    }): Array<Pet>;
    getPetById(pathParams: {
        petId: number;
    }): Pet;
    updatePet(bodyParams: Pet): Pet;
    updatePetWithForm(pathParams: {
        petId: number;
    }): void;
    uploadFile(pathParams: {
        petId: number;
    }): ApiResponse;
}
export declare const plugin: (handlers: HapiHandlers) => hapi.Plugin<{}>;

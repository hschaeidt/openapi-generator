import * as hapi from '@hapi/hapi';
import { ApiResponse } from '../models/ApiResponse';
import { Pet } from '../models/Pet';

export interface HapiHandlers {
    addPet(bodyParams: Pet): Pet;
    deletePet(pathParams: { petId: number }): void;
    findPetsByStatus(queryParams: { status: Array<'available' | 'pending' | 'sold'> }): Array<Pet>;
    findPetsByTags(queryParams: { tags: Array<string> }): Array<Pet>;
    getPetById(pathParams: { petId: number }): Pet;
    updatePet(bodyParams: Pet): Pet;
    updatePetWithForm(pathParams: { petId: number }): void;
    uploadFile(pathParams: { petId: number }): ApiResponse;
}

export const plugin = (handlers: HapiHandlers): hapi.Plugin<{}> => ({
    name: 'PetApi',
    version: '',
    register: (server: hapi.Server, options: {}) => {
        server.route({
            method: 'POST',
            path: '/pet',
            handler: (request, h) => {
                const result = handlers.addPet(request.payload as Pet);

                return h.response(result).code(200);
            },
        });

        server.route({
            method: 'DELETE',
            path: '/pet/{petId}',
            handler: (request, h) => {
                handlers.deletePet(request.params as { petId: number });

                return h.response().code(200);
            },
        });

        server.route({
            method: 'GET',
            path: '/pet/findByStatus',
            handler: (request, h) => {
                const result = handlers.findPetsByStatus(request.query as { status: Array<'available' | 'pending' | 'sold'> });

                return h.response(result).code(200);
            },
        });

        server.route({
            method: 'GET',
            path: '/pet/findByTags',
            handler: (request, h) => {
                const result = handlers.findPetsByTags(request.query as { tags: Array<string> });

                return h.response(result).code(200);
            },
        });

        server.route({
            method: 'GET',
            path: '/pet/{petId}',
            handler: (request, h) => {
                const result = handlers.getPetById(request.params as { petId: number });

                return h.response(result).code(200);
            },
        });

        server.route({
            method: 'PUT',
            path: '/pet',
            handler: (request, h) => {
                const result = handlers.updatePet(request.payload as Pet);

                return h.response(result).code(200);
            },
        });

        server.route({
            method: 'POST',
            path: '/pet/{petId}',
            handler: (request, h) => {
                handlers.updatePetWithForm(request.params as { petId: number });

                return h.response().code(200);
            },
        });

        server.route({
            method: 'POST',
            path: '/pet/{petId}/uploadImage',
            handler: (request, h) => {
                const result = handlers.uploadFile(request.params as { petId: number });

                return h.response(result).code(200);
            },
        });
    },
});

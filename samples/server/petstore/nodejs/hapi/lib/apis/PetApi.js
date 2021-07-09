"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const plugin = (handlers) => ({
    name: 'PetApi',
    version: '',
    register: (server, options) => {
        server.route({
            method: 'POST',
            path: '/pet',
            handler: (request, h) => {
                const result = handlers.addPet(request.payload);
                return h.response(result).code(200);
            },
        });
        server.route({
            method: 'DELETE',
            path: '/pet/{petId}',
            handler: (request, h) => {
                handlers.deletePet(request.params);
                return h.response().code(200);
            },
        });
        server.route({
            method: 'GET',
            path: '/pet/findByStatus',
            handler: (request, h) => {
                const result = handlers.findPetsByStatus(request.query);
                return h.response(result).code(200);
            },
        });
        server.route({
            method: 'GET',
            path: '/pet/findByTags',
            handler: (request, h) => {
                const result = handlers.findPetsByTags(request.query);
                return h.response(result).code(200);
            },
        });
        server.route({
            method: 'GET',
            path: '/pet/{petId}',
            handler: (request, h) => {
                const result = handlers.getPetById(request.params);
                return h.response(result).code(200);
            },
        });
        server.route({
            method: 'PUT',
            path: '/pet',
            handler: (request, h) => {
                const result = handlers.updatePet(request.payload);
                return h.response(result).code(200);
            },
        });
        server.route({
            method: 'POST',
            path: '/pet/{petId}',
            handler: (request, h) => {
                handlers.updatePetWithForm(request.params);
                return h.response().code(200);
            },
        });
        server.route({
            method: 'POST',
            path: '/pet/{petId}/uploadImage',
            handler: (request, h) => {
                const result = handlers.uploadFile(request.params);
                return h.response(result).code(200);
            },
        });
    },
});
exports.plugin = plugin;

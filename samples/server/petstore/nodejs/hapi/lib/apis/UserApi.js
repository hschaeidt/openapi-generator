"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const plugin = (handlers) => ({
    name: 'UserApi',
    version: '',
    register: (server, options) => {
        server.route({
            method: 'POST',
            path: '/user',
            handler: (request, h) => {
                handlers.createUser(request.payload);
                return h.response().code(200);
            },
        });
        server.route({
            method: 'POST',
            path: '/user/createWithArray',
            handler: (request, h) => {
                handlers.createUsersWithArrayInput(request.payload);
                return h.response().code(200);
            },
        });
        server.route({
            method: 'POST',
            path: '/user/createWithList',
            handler: (request, h) => {
                handlers.createUsersWithListInput(request.payload);
                return h.response().code(200);
            },
        });
        server.route({
            method: 'DELETE',
            path: '/user/{username}',
            handler: (request, h) => {
                handlers.deleteUser(request.params);
                return h.response().code(200);
            },
        });
        server.route({
            method: 'GET',
            path: '/user/{username}',
            handler: (request, h) => {
                const result = handlers.getUserByName(request.params);
                return h.response(result).code(200);
            },
        });
        server.route({
            method: 'GET',
            path: '/user/login',
            handler: (request, h) => {
                const result = handlers.loginUser(request.query);
                return h.response(result).code(200);
            },
        });
        server.route({
            method: 'GET',
            path: '/user/logout',
            handler: (request, h) => {
                handlers.logoutUser();
                return h.response().code(200);
            },
        });
        server.route({
            method: 'PUT',
            path: '/user/{username}',
            handler: (request, h) => {
                handlers.updateUser(request.params, request.payload);
                return h.response().code(200);
            },
        });
    },
});
exports.plugin = plugin;

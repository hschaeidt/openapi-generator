import * as hapi from '@hapi/hapi';
import { User } from '../models/User';

export interface HapiHandlers {
    createUser(bodyParams: User): void;
    createUsersWithArrayInput(bodyParams: Array<User>): void;
    createUsersWithListInput(bodyParams: Array<User>): void;
    deleteUser(pathParams: { username: string }): void;
    getUserByName(pathParams: { username: string }): User;
    loginUser(queryParams: { username: string, password: string }): string;
    logoutUser(): void;
    updateUser(pathParams: { username: string }, bodyParams: User): void;
}

export const plugin = (handlers: HapiHandlers): hapi.Plugin<{}> => ({
    name: 'UserApi',
    version: '',
    register: (server: hapi.Server, options: {}) => {
        server.route({
            method: 'POST',
            path: '/user',
            handler: (request, h) => {
                handlers.createUser(request.payload as User);

                return h.response().code(200);
            },
        });

        server.route({
            method: 'POST',
            path: '/user/createWithArray',
            handler: (request, h) => {
                handlers.createUsersWithArrayInput(request.payload as Array<User>);

                return h.response().code(200);
            },
        });

        server.route({
            method: 'POST',
            path: '/user/createWithList',
            handler: (request, h) => {
                handlers.createUsersWithListInput(request.payload as Array<User>);

                return h.response().code(200);
            },
        });

        server.route({
            method: 'DELETE',
            path: '/user/{username}',
            handler: (request, h) => {
                handlers.deleteUser(request.params as { username: string });

                return h.response().code(200);
            },
        });

        server.route({
            method: 'GET',
            path: '/user/{username}',
            handler: (request, h) => {
                const result = handlers.getUserByName(request.params as { username: string });

                return h.response(result).code(200);
            },
        });

        server.route({
            method: 'GET',
            path: '/user/login',
            handler: (request, h) => {
                const result = handlers.loginUser(request.query as { username: string, password: string });

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
                handlers.updateUser(request.params as { username: string }, request.payload as User);

                return h.response().code(200);
            },
        });
    },
});

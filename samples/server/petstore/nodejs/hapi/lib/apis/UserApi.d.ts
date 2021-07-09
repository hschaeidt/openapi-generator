import * as hapi from '@hapi/hapi';
import { User } from '../models/User';
export interface HapiHandlers {
    createUser(bodyParams: User): void;
    createUsersWithArrayInput(bodyParams: Array<User>): void;
    createUsersWithListInput(bodyParams: Array<User>): void;
    deleteUser(pathParams: {
        username: string;
    }): void;
    getUserByName(pathParams: {
        username: string;
    }): User;
    loginUser(queryParams: {
        username: string;
        password: string;
    }): string;
    logoutUser(): void;
    updateUser(pathParams: {
        username: string;
    }, bodyParams: User): void;
}
export declare const plugin: (handlers: HapiHandlers) => hapi.Plugin<{}>;

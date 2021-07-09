import * as hapi from '@hapi/hapi';
import { Order } from '../models/Order';

export interface HapiHandlers {
    deleteOrder(pathParams: { orderId: string }): void;
    getInventory(): { [key: string]: number; };
    getOrderById(pathParams: { orderId: number }): Order;
    placeOrder(bodyParams: Order): Order;
}

export const plugin = (handlers: HapiHandlers): hapi.Plugin<{}> => ({
    name: 'StoreApi',
    version: '',
    register: (server: hapi.Server, options: {}) => {
        server.route({
            method: 'DELETE',
            path: '/store/order/{orderId}',
            handler: (request, h) => {
                handlers.deleteOrder(request.params as { orderId: string });

                return h.response().code(200);
            },
        });

        server.route({
            method: 'GET',
            path: '/store/inventory',
            handler: (request, h) => {
                const result = handlers.getInventory();

                return h.response(result).code(200);
            },
        });

        server.route({
            method: 'GET',
            path: '/store/order/{orderId}',
            handler: (request, h) => {
                const result = handlers.getOrderById(request.params as { orderId: number });

                return h.response(result).code(200);
            },
        });

        server.route({
            method: 'POST',
            path: '/store/order',
            handler: (request, h) => {
                const result = handlers.placeOrder(request.payload as Order);

                return h.response(result).code(200);
            },
        });
    },
});

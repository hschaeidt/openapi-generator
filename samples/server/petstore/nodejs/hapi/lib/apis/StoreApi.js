"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const plugin = (handlers) => ({
    name: 'StoreApi',
    version: '',
    register: (server, options) => {
        server.route({
            method: 'DELETE',
            path: '/store/order/{orderId}',
            handler: (request, h) => {
                handlers.deleteOrder(request.params);
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
                const result = handlers.getOrderById(request.params);
                return h.response(result).code(200);
            },
        });
        server.route({
            method: 'POST',
            path: '/store/order',
            handler: (request, h) => {
                const result = handlers.placeOrder(request.payload);
                return h.response(result).code(200);
            },
        });
    },
});
exports.plugin = plugin;

import * as hapi from '@hapi/hapi';
import { Order } from '../models/Order';
export interface HapiHandlers {
    deleteOrder(pathParams: {
        orderId: string;
    }): void;
    getInventory(): {
        [key: string]: number;
    };
    getOrderById(pathParams: {
        orderId: number;
    }): Order;
    placeOrder(bodyParams: Order): Order;
}
export declare const plugin: (handlers: HapiHandlers) => hapi.Plugin<{}>;

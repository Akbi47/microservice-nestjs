import { ClientProxy } from '@nestjs/microservices/client';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    private readonly client;
    constructor(productService: ProductService, client: ClientProxy);
    all(): Promise<import("./product.entity").Product[]>;
    create(title: string, image: string): Promise<import("./product.entity").Product>;
    get(id: number): Promise<import("./product.entity").Product>;
    update(id: number, title: string, image: string): Promise<import("./product.entity").Product>;
    like(id: number): Promise<any>;
    delete(id: number): Promise<void>;
}

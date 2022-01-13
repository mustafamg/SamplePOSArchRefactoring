import { Injectable } from '@nestjs/common';

export type Customer = any;

@Injectable()
export class CustomersService {
    private readonly customers = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ];

    async findOne(username: string): Promise<Customer | undefined> {
        return this.customers.find(customer => customer.username === username);
    }
}

import { Injectable } from '@nestjs/common';

import { CustomersService } from '../customers/customers.service';

@Injectable()
export class AuthService {
    constructor(private customersService: CustomersService) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.customersService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CustomersService } from '../customers/customers.service';

@Injectable()
export class AuthService {
    constructor(
        private customersService: CustomersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.customersService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}

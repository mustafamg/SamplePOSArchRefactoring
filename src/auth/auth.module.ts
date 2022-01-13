import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { CustomersModule } from '../customers/customers.module';

@Module({
  imports: [CustomersModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule { }

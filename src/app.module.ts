import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [AuthModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

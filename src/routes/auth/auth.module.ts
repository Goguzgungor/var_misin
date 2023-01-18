import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { PrismaService } from '../../core/prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService,PrismaService]
})
export class AuthModule {}

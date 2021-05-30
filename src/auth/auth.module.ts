import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService, PrismaService],
})
export class AuthModule {}

// users.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity'; // Import User entity
import { UserRepository } from './user.repository'; // Import UserRepository

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Import User entity into the module
    TypeOrmModule.forFeature([UserRepository]), // Import UserRepository
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

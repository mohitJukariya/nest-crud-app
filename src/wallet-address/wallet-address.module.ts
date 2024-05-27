// wallet-address.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletAddressController } from './wallet-address.controller';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './wallet-address.entity'; // Import WalletAddress entity
import { WalletAddressRepository } from './wallet-address.repository'; // Import WalletAddressRepository

@Module({
  imports: [
    TypeOrmModule.forFeature([WalletAddress]), // Import WalletAddress entity into the module
    TypeOrmModule.forFeature([WalletAddressRepository]), // Import WalletAddressRepository
  ],
  controllers: [WalletAddressController],
  providers: [WalletAddressService],
})
export class WalletAddressModule {}

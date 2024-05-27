import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletAddress } from './wallet-address.entity';
import { CreateWalletAddressDto, UpdateWalletAddressDto } from './wallet-address.dto';

@Injectable()
export class WalletAddressService {
  constructor(
    @InjectRepository(WalletAddress)
    private readonly walletAddressRepository: Repository<WalletAddress>,
  ) {}

  async create(createWalletAddressDto: CreateWalletAddressDto): Promise<WalletAddress> {
    try {
      const walletAddress = this.walletAddressRepository.create(createWalletAddressDto);
      return await this.walletAddressRepository.save(walletAddress);
    } catch (error) {
      throw new BadRequestException('Failed to create wallet address');
    }
  }

  async findAll(): Promise<WalletAddress[]> {
    try {
      return await this.walletAddressRepository.find({ relations: ['user'] });
    } catch (error) {
      throw new BadRequestException('Failed to retrieve wallet addresses');
    }
  }

  async findOne(id: string): Promise<WalletAddress> {
    try {
      const walletAddress = await this.walletAddressRepository.findOne({ where: { id }, relations: ['user'] });
      if (!walletAddress) {
        throw new NotFoundException(`Wallet address with ID ${id} not found`);
      }
      return walletAddress;
    } catch (error) {
      throw error instanceof NotFoundException ? error : new BadRequestException('Failed to retrieve wallet address');
    }
  }


  async update(id: string, updateWalletAddressDto: UpdateWalletAddressDto): Promise<WalletAddress> {
    try {
      await this.walletAddressRepository.update(id, updateWalletAddressDto);
      return await this.findOne(id);
    } catch (error) {
      throw new BadRequestException('Failed to update wallet address');
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const result = await this.walletAddressRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Wallet address with ID ${id} not found`);
      }
    } catch (error) {
      throw error instanceof NotFoundException ? error : new BadRequestException('Failed to delete wallet address');
    }
  }
}

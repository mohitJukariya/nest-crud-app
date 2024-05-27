import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { CreateWalletAddressDto, UpdateWalletAddressDto } from './wallet-address.dto';

@Controller('wallet-addresses')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Post()
  async create(@Body() createWalletAddressDto: CreateWalletAddressDto) {
    try {
      return await this.walletAddressService.create(createWalletAddressDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.walletAddressService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.walletAddressService.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, error instanceof NotFoundException ? HttpStatus.NOT_FOUND : HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateWalletAddressDto: UpdateWalletAddressDto) {
    try {
      return await this.walletAddressService.update(id, updateWalletAddressDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.walletAddressService.remove(id);
      return { message: 'Wallet address deleted successfully' };
    } catch (error) {
      throw new HttpException(error.message, error instanceof NotFoundException ? HttpStatus.NOT_FOUND : HttpStatus.BAD_REQUEST);
    }
  }
}

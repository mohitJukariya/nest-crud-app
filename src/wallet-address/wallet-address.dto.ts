import { IsString, IsNotEmpty } from 'class-validator';

export class CreateWalletAddressDto {
  @IsString()
  @IsNotEmpty()
  readonly userId: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;
}

export class UpdateWalletAddressDto {
  @IsString()
  @IsNotEmpty()
  readonly address: string;
}

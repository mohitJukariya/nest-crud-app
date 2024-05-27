// wallet-address.repository.ts

import { EntityRepository, Repository } from 'typeorm';
import { WalletAddress } from './wallet-address.entity';

@EntityRepository(WalletAddress)
export class WalletAddressRepository extends Repository<WalletAddress> {}

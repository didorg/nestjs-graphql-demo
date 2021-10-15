import { Module } from '@nestjs/common';

import { OwnersResolver } from './resolvers/owners.resolver';
import { Owner } from 'src/persistence/entities/owners/owner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnersService } from './services/owners.service';
import { OwnersServiceMapper } from './services/owners.service.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  providers: [OwnersResolver, OwnersService, OwnersServiceMapper]
})
export class OwnersModule {}

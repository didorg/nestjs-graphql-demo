import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { Owner } from 'src/persistence/entities/owners/owner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  providers: [OwnersResolver, OwnersService]
})
export class OwnersModule {}

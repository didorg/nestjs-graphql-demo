import { Module } from '@nestjs/common';
import { PetService } from './services/pet/pet.service';
import { PetResolver } from './resolvers/pet/pet.resolver';
import { PetServiceMapper } from './services/pet/pet.service.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import Pet from 'src/persistence/entities/pet/pet.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetService, PetResolver, PetServiceMapper],
  controllers: [],
})
export class PetsModule {}

import { Module } from '@nestjs/common';
import { PetService } from './services/pet/pet.service';
import { PetController } from './controllers/pet/pet.controller';
import { PetResolver } from './resolvers/pet/pet.resolver';

@Module({
  providers: [PetService, PetResolver],
  controllers: [PetController],
})
export class PetsModule {}

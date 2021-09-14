import { Query, Resolver } from '@nestjs/graphql';
import { Pet } from '../../models/pet.out.dto';
import { PetService } from '../../services/pet/pet.service';

@Resolver((of) => Pet)
export class PetResolver {
  constructor(private petService: PetService) {}

  @Query((returns) => [Pet])
  pets(): Promise<Pet[]> {
    return this.petService.findAll();
  }
}

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetInputDTO } from '../../models/pet.in.dto';
import { PetOutputDTO } from '../../models/pet.out.dto';
import { PetService } from '../../services/pet/pet.service';

@Resolver((of) => PetOutputDTO)
export class PetResolver {
  constructor(private petService: PetService) {}

  @Query((returns) => [PetOutputDTO])
  pets(): Promise<PetOutputDTO[]> {
    return this.petService.findAll();
  }

  @Mutation(() => PetOutputDTO)
  async createPet(@Args('PetInputDTO') petInputDTO:PetInputDTO): Promise<PetOutputDTO>{
    return this.petService.createPet(petInputDTO);
  }

}

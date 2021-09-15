import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetInputDTO } from '../../models/pet.in.dto';
import { PetOutputDTO } from '../../models/pet.out.dto';
import { PetService } from '../../services/pet/pet.service';

@Resolver((of) => PetOutputDTO)
export class PetResolver {
  constructor(private petService: PetService) {}

  @Query(() => [PetOutputDTO])
  async pets(): Promise<PetOutputDTO[]> {
    return await this.petService.findAll();
  }

  @Query(() => PetOutputDTO)
  async pet(@Args('id', {type: () => Int}) id: number): Promise<PetOutputDTO> {
    return await this.petService.findOne(id);
  }

  @Mutation(() => PetOutputDTO)
  async createPet(
    @Args('PetInputDTO') petInputDTO: PetInputDTO,
  ): Promise<PetOutputDTO> {
    return await this.petService.createPet(petInputDTO);
  }
}

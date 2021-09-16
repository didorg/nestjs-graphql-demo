import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OwnersService } from './owners.service';
import { OwnerInputDTO } from './dto/owner.in.dto';
import { OwnerOutputDTO } from './dto/owner.out.dto';

@Resolver(() => OwnerOutputDTO)
export class OwnersResolver {
  constructor(private readonly ownersService: OwnersService) {}

  @Mutation(() => OwnerOutputDTO)
  createOwner(@Args('OwnerInputDTO') ownerInputDTO: OwnerInputDTO) {
    return this.ownersService.createOwner(ownerInputDTO);
  }

  // @Query(() => [Owner], { name: 'owners' })
  // findAll() {
  //   return this.ownersService.findAll();
  // }

  // @Query(() => Owner, { name: 'owner' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.ownersService.findOne(id);
  // }

  // @Mutation(() => Owner)
  // updateOwner(@Args('updateOwnerInput') updateOwnerInput: OwnerOutputDTO) {
  //   return this.ownersService.update(updateOwnerInput.id, updateOwnerInput);
  // }

  // @Mutation(() => Owner)
  // removeOwner(@Args('id', { type: () => Int }) id: number) {
  //   return this.ownersService.remove(id);
  // }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/persistence/entities/owners/owner.entity';
import { Repository } from 'typeorm';
import { OwnerInputDTO } from '../dto/owner.in.dto';
import { OwnerOutputDTO } from '../dto/owner.out.dto';


@Injectable()
export class OwnersService {

  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>){}

  async createOwner(ownerInputDTO: OwnerInputDTO): Promise<OwnerOutputDTO>{
     // We can also use a mapper
     const owner = new Owner();
     owner.id = ownerInputDTO.id;
     owner.name = ownerInputDTO.name;
     owner.pets = ownerInputDTO.pets;
 
     const ownerCreated = this.ownerRepository.create(owner);
     const ownerSaved = await this.ownerRepository.save(ownerCreated);
     const ownerOutputDTO = await this.mapperOwnerToOwnerOutputDTO(ownerSaved);
     return ownerOutputDTO;
  }
  private async mapperOwnerToOwnerOutputDTO(ownerSaved: Owner):Promise<OwnerOutputDTO> {
    throw new Error('Method not implemented.');
  }

  // findAll() {
  //   return `This action returns all owners`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} owner`;
  // }

  // update(id: number, updateOwnerInput: OwnerOutputDTO) {
  //   return `This action updates a #${id} owner`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} owner`;
  // }
}

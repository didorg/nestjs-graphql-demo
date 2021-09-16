import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import Pet from 'src/persistence/entities/pet/pet.entity';
import { Repository } from 'typeorm';
import { PetInputDTO } from '../../dto/pet.in.dto';
import { PetOutputDTO } from '../../dto/pet.out.dto';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petsRepository: Repository<Pet>,
  ) {}

  async createPet(petInputDTO: PetInputDTO): Promise<PetOutputDTO> {
    // We can also use a mapper
    const pet = new Pet();
    pet.id = petInputDTO.id;
    pet.name = petInputDTO.name;
    pet.type = petInputDTO.type;
    pet.owner = petInputDTO.owner;

    const petResult = this.petsRepository.create(pet);
    const petSaved = await this.petsRepository.save(petResult);
    const petOutputDTO = await this.mapperPetToPetOutputDTO(petSaved);
    return petOutputDTO;
  }

  async findAll(): Promise<PetOutputDTO[]> {
    const pets = this.petsRepository.find();
    const petOutputDTOs = await this.mapperPetsToPetOutputDTOs(pets);
    return petOutputDTOs;
  }

  async findOne(id: number): Promise<PetOutputDTO> {
    const petById = await this.petsRepository.findOneOrFail(id);
    const petOutputDTO = await this.mapperPetToPetOutputDTO(petById);
    return petOutputDTO;
  }

  //Mappers 
  // TODO: move to class PetServiceMapper and Inject it here.
  private async mapperPetsToPetOutputDTOs(pets: Promise<Pet[]>): Promise<PetOutputDTO[]> {
    throw new Error('Method not implemented.');
  }

  private async mapperPetToPetOutputDTO(petById: Pet):Promise<PetOutputDTO> {
    throw new Error('Method not implemented.');
  }
}

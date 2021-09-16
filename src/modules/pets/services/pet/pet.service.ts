import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import Pet from 'src/persistence/entities/pet/pet.entity';
import { Repository } from 'typeorm';
import { PetInputDTO } from '../../models/pet.in.dto';
import { PetOutputDTO } from '../../models/pet.out.dto';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petsRepository: Repository<Pet>,
  ) {}

  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find();
  }

  async createPet(petInputDTO: PetInputDTO): Promise<PetOutputDTO> {
    // We can also use a mapper
    const pet = new Pet();
    pet.id = petInputDTO.id;
    pet.name = petInputDTO.name;
    pet.type = petInputDTO.type;

    const petResult = this.petsRepository.create(pet);
    await this.petsRepository.save(petResult);
    return petResult;
  }

  async findOne(id: number): Promise<PetOutputDTO> {
    const petById = await this.petsRepository.findOneOrFail(id);
    return petById;
  }
}

import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import Pet from 'src/persistence/entities/pet/pet.entity';
import { Repository } from 'typeorm';
import { PetInputDTO } from '../../dto/pet.in.dto';
import { PetOutputDTO } from '../../dto/pet.out.dto';
import { PetServiceMapper } from './pet.service.mapper';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petsRepository: Repository<Pet>,
    private petServiceMapper: PetServiceMapper,
  ) {}

  async createPet(petIn: PetInputDTO): Promise<PetOutputDTO> {
    const pet: Pet = await this.petServiceMapper.mapperPetInputDTOToPet(petIn);
    const petCreated: Pet = this.petsRepository.create(pet);
    const petSaved: Pet = await this.petsRepository.save(petCreated);
    const petOut: PetOutputDTO =
      await this.petServiceMapper.mapperPetToPetOutputDTO(petSaved);
    return petOut;
  }

  async findAll(): Promise<PetOutputDTO[]> {
    const pets = await this.petsRepository.find();
    const petOutputDTOs = await this.petServiceMapper.mapperPetsToPetOutputDTOs(
      pets,
    );
    return petOutputDTOs;
  }

  async findOne(id: number): Promise<PetOutputDTO> {
    const petById: Pet = await this.petsRepository.findOneOrFail(id);
    const petOutputDTO = await this.petServiceMapper.mapperPetToPetOutputDTO(
      petById,
    );
    return petOutputDTO;
  }
}

import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import Pet from 'src/persistence/entities/pet/pet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PetService {

  constructor(
    @InjectRepository(Pet)
    private petsRepository: Repository<Pet>
  ) {}

  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find();
  }
}

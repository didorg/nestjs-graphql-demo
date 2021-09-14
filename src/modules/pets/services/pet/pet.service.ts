import { Injectable } from '@nestjs/common';
import { Pet } from '../../models/pet.out.dto';

@Injectable()
export class PetService {
  async findAll(): Promise<Pet[]> {
    const pet = new Pet();
    pet.id = 1;
    pet.name = 'Rambo';
    pet.type = 'Dog';

    return [pet];
  }
}

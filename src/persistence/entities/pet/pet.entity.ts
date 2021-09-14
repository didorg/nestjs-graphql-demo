import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Pet {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  type?: string;
}

export default Pet;

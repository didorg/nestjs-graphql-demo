import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PetOutputDTO {
  @Field(type => Int)
  id: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  type?: string;
}

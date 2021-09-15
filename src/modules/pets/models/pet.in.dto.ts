import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha, IsNotEmpty } from 'class-validator';

@InputType()
export class PetInputDTO {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field()
  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @Field({ nullable: true })
  type?: string;
}

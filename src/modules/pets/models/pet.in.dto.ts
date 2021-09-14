import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class PetInputDTO {
  @Field(() => Int, { nullable: false })
  id: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  type?: string;
}
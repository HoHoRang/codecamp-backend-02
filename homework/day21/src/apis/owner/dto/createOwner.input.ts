import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOwnerInput {
  @Field(() => String)
  ownerLoginId: string;

  @Field(() => String)
  ownerPassword: string;

  @Field(() => String)
  ownerName: string;

  @Field(() => String)
  ownerRrn: string;

  @Field(() => String)
  ownerPhone: string;

  @Field(() => String)
  ownerEmail: string;

  @Field(() => String)
  ownerNickname: string;
}

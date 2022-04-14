import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  userName: string;

  @Field(() => String)
  userEmail: string;

  @Field(() => String)
  userPhone: string;

  @Field(() => String)
  userPassword: string;

  @Field(() => String, { nullable: true })
  userLoginId: string;

  @Field(() => String, { nullable: true })
  userRrn: string;

  @Field(() => String, { nullable: true })
  userNickname: string;

  @Field(() => String)
  provider: string;

  @Field(() => String, { nullable: true })
  userGradeId: string;
}

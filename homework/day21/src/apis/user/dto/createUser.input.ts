import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  userLoginId: string;

  @Field(() => String)
  userPassword: string;

  @Field(() => String)
  userName: string;

  @Field(() => String)
  userRrn: string;

  @Field(() => String)
  userPhone: string;

  @Field(() => String)
  userEmail: string;

  @Field(() => String)
  userNickname: string;

  @Field(() => String)
  userGradeId: string;
}

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StarbucksService } from './starbucks.service';
import { CreateStarbucksInput } from './dto/createStarbucks.input';
import { Starbucks } from './entities/starbucks.entity';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  @Query(() => [Starbucks])
  fetchStarbucks() {
    return this.starbucksService.findAll();
  }

  @Mutation(() => String)
  createStarbucks(
    @Args('createStarbucksInput') createStarbucksInput: CreateStarbucksInput,
  ) {
    console.log(createStarbucksInput);

    return this.starbucksService.create();
  }
}

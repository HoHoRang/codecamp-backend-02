import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './boards.service';
import { CreateBoardInput } from './dto/createBoard.input';
import { Boards } from './entities/boards.entity';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject } from '@nestjs/common';

@Resolver()
export class BoardResolver {
  constructor(
    private readonly boardService: BoardService, //

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  @Query(() => [Boards])
  fetchBoards() {
    return this.boardService.findAll();
  }

  @Mutation(() => String)
  async createBoard(
    @Args('writer') writer: string,
    @Args('title') title: string,
    @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ) {
    //////////////////////// 캐시에 등록하고 조회하는 연습해보기 ////////////////////////
    await this.cacheManager.set('aaa', createBoardInput, {
      ttl: 0, //ttl(Time To Leave로 남아있는 시간을 설정)
    });
    const myCache = await this.cacheManager.get('aaa');
    console.log(myCache);

    return '캐시 테스트 중!';
    ////////////////////////////////////////////////////////////////////////////

    // 레디스 연습을 위해서 주석
    // console.log(writer);
    // console.log(title);
    // console.log(contents);
    // console.log(createBoardInput);
    // return this.boardService.create();
  }
}

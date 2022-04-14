import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePostInput } from './dto/createPost.input';
import { UpdatePostInput } from './dto/updatePost.input';
import { Post } from './entities/post.entity';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  // @Query(() => [Post])
  // fetchPosts() {
  //   return this.postService.findAll();
  // }

  // @Query(() => [Post])
  // fetchPostsWithDeleted() {
  //   return this.postService.findAllWithDeleted();
  // }

  // @Query(() => Post)
  // async fetchPost(@Args('postId') postId: string) {
  //   await this.postService.checkExist({ postId });

  //   return await this.postService.findOne({ postId });
  // }

  // @Mutation(() => Post)
  // createPost(
  //   @Args('createPostInput') createPostInput: CreatePostInput, //
  // ) {
  //   return this.postService.create({ createPostInput });
  // }

  // @Mutation(() => Post)
  // async updatePost(
  //   @Args('postId') postId: string,
  //   @Args('updatePostInput') updatePostInput: UpdatePostInput,
  // ) {
  //   // 존재하는지 확인
  //   await this.postService.checkExist({ postId });
  //   // 수정하기
  //   return await this.postService.update({
  //     postId,
  //     updatePostInput,
  //   });
  // }

  // @Mutation(() => Boolean)
  // async deletePost(
  //   @Args('postId') postId: string, //
  // ) {
  //   return await this.postService.delete({ postId });
  // }

  // @Mutation(() => Boolean)
  // async restorePost(
  //   @Args('postId') postId: string, //
  // ) {
  //   return await this.postService.restore({ postId });
  // }
}

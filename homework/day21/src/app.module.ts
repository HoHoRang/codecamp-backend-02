import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';
import { BoardModule } from './apis/board/board.module';
import { FoodTypeModule } from './apis/foodType/foodType.module';
import { OwnerModule } from './apis/owner/owner.module';
import { PostModule } from './apis/post/post.module';
import { ProductModule } from './apis/product/product.module';
import { StoreModule } from './apis/store/store.module';
import { UserModule } from './apis/user/user.module';
import { UserGradeModule } from './apis/userGrade/userGrade.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    BoardModule,
    FoodTypeModule,
    OwnerModule,
    PostModule,
    ProductModule,
    StoreModule,
    UserModule,
    UserGradeModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', //my-database
      port: 3306,
      username: 'root',
      password: '9380', //root
      database: 'homework', //mydocker02
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsCategory } from './entities/productsCategory.entity';
import { ProductsCategoryResolver } from './productsCategory.resolver';
import { ProductsCategoryService } from './productsCategory.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsCategory])],
  providers: [
    ProductsCategoryResolver, //
    ProductsCategoryService,
  ],
})
export class ProductsCategoryModule {}

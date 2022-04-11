import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsSaleslocation } from '../productsSaleslocation/entities/productsSaleslocation.entity';
import { Products } from './entities/products.entity';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Products, ProductsSaleslocation])],
  providers: [
    ProductsResolver, //
    ProductsService,
  ],
})
export class ProductsModule {}
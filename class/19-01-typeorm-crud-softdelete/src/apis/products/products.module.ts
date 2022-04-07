import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  providers: [
    ProductsResolver, //
    ProductsService,
  ],
})
export class ProductsModule {}

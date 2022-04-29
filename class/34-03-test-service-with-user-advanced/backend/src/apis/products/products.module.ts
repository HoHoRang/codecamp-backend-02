import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsSaleslocation } from '../productsSaleslocation/entities/productsSaleslocation.entity';
import { ProductsTag } from '../productsTag/entities/productsTag.entity';
import { Products } from './entities/products.entity';
import { ProductsSubscriber } from './entities/products.subscriber';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Products, //
      ProductsSaleslocation,
      ProductsTag,
    ]),
    ElasticsearchModule.register({
      node: 'http://elasticsearch:9200',
    }),
  ],
  providers: [
    ProductsResolver, //
    ProductsService,
    ProductsSubscriber,
  ],
})
export class ProductsModule {}

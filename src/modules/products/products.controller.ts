import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductsDto } from '../dto/create-products.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ description: 'Get products' })
  getProducts() {
    return this.productsService.getProducts();
  }

  @Post('create')
  @ApiOperation({ description: 'Create products' })
  createProducts(@Body() productsData: CreateProductsDto) {
    return this.productsService.createproducts(productsData);
  }
}

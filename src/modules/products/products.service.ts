import { Injectable } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';

@Injectable()
export class ProductsService {
  private products = [
    {
      name: 'Product-1',
      price: 2.24,
      quantity: 25,
    },
    {
      name: 'Product-2',
      price: 4.24,
      quantity: 50,
    },
    {
      name: 'Product-3',
      price: 3.01,
      quantity: 10,
    },
    {
      name: 'Product-4',
      price: 7.05,
      quantity: 100,
    },
    {
      name: 'Product-5',
      price: 2.0,
      quantity: 12,
    },
    {
      name: 'Product-6',
      price: 1.15,
      quantity: 35,
    },
  ];

  getProducts() {
    return {
      message: 'Products obtained successfully',
      data: this.products,
      total: this.products.length,
    };
  }

  createProduct(productsData: CreateProductsDto): { message: string } {
    this.products.push({
      ...productsData,
    });

    return {
      message: 'Successfully created',
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  showId: boolean;
  buttonDisplayValue: string;
  products: IProduct[] = [];
  ShoppingProducts: IProduct[] = [];
  showShoppingCart = false;
  totalCost = 0;


  constructor(private productService: ProductService) {
    this.showId = true;
    this.buttonDisplayValue = 'Hide Id';
    this.productService.getProductSubject().subscribe(
      newproducts => (
        this.products = newproducts
      )
    )

  }
  addProduct(){
    this.productService.addProduct();
  }
  deleteProduct(id) {
    this.productService.deleteProduct(id);
  }
  toggleId() {
    this.showId = !this.showId;
  }
  ShoppingCartDisplay() {
    this.ShoppingProducts = this.productService.displayShoppingCart();
    this.showShoppingCart = !this.showShoppingCart;

  }
  AddToShoppingCart(product: IProduct) {
    this.productService.AddToShoppingCart(product);
    this.totalCost = this.totalCost + product.price;
    console.log(this.totalCost);
  }
  deleteFromShoppingCart(id) {
    this.totalCost = this.totalCost - this.productService.getPriceById(id);
    this.productService.deleteFromShoppingCart(id);
    if (this.ShoppingProducts.length === 0) {
      this.totalCost = 0.00;
      this.showShoppingCart = !this.showShoppingCart;
    }
    this.ShoppingProducts = this.productService.displayShoppingCart();

  }


  ngOnInit() {
  }
  someFunction() {
    console.log('someFunction Called');
  }




}

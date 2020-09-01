import { Injectable } from '@angular/core';
import { IProduct } from './product-list/IProduct';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

    productBehaviourSubject: BehaviorSubject<IProduct[]>;
    shoppingList: IProduct[] = [];
    totalCost: number;
  constructor() {

  let initialValues: IProduct[] = [
    {
        productId: 2,
        productName: 'Garden Cart',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 3,
        imageUrl: 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
        display: true
    },
    {
        productId: 5,
        productName: 'Hammer',
        description: 'Curved claw steel hammer',
        price: 8.9,
        starRating: 4,
        imageUrl: 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
        display: true
    },
    {
      productId: 6,
      productName: 'Potato',
      description: 'Exquisite piece of a delicious vegetable',
      price: 8.9,
      starRating: 4,
      imageUrl: 'https://www.alimentarium.org/en/system/files/thumbnails/image/AL027-01_pomme_de_terre_0.jpg',
      display: true
    }
];

this.productBehaviourSubject = new BehaviorSubject<IProduct[]>(initialValues);
}
getproducts(): IProduct[] {
    return this.productBehaviourSubject.value;
  }
  getProductSubject(){
    return this.productBehaviourSubject;
  }
  addProduct() {
    let currentProducts = this.getproducts();
    currentProducts.push({
      productId: 7,
      productName: 'Axe',
      description: 'Weapon used for splitting wooden objects',
      price: 14.56,
      starRating: 5,
      imageUrl: 'https://www.pumpjaxe.com/images/products.png',
      display: true
    }as IProduct);
    this.productBehaviourSubject.next(currentProducts);
  }
  deleteProduct(id) {
    let currentProducts = this.getproducts();
    const index = currentProducts.indexOf(currentProducts.find(pr => pr.productId === id));
    currentProducts.splice(index, 1);
   // currentProducts = currentProducts.filter(pr => pr.productId !== id);
    this.productBehaviourSubject.next(currentProducts);
  }
  deleteFromShoppingCart(id){
    const index = this.shoppingList.indexOf(this.shoppingList.find(pr => pr.productId === id));
    this.shoppingList.splice(index, 1);
    //this.shoppingList = this.shoppingList.filter( pr => pr.productId !== id);
    //delete this.shoppingList[this.shoppingList.findIndex(item => item.productId == id)];
   // return this.shoppingList;
    // this.productBehaviourSubject.next(this.shoppingList);
  }
  AddToShoppingCart(product: IProduct) {
   // this.totalCost = this.totalCost + product.price;
    this.shoppingList.push(product);
    console.log('Product Added');
    //console.log(this.totalCost);
  }
  getPriceById(id){
    const currentProducts = this.getproducts();
    return currentProducts.find(pr => pr.productId === id).price;
  }
  getProductById(id){
    const currentProducts = this.getproducts();
    return currentProducts.find(pr => pr.productId === id);
  }
  displayShoppingCart() {
    console.log(this.shoppingList);

    return this.shoppingList;
  }
  }

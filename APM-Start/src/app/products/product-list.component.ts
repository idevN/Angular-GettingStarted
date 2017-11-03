import {Component,OnInit} from '@angular/core'
import {IProduct} from './product'
import {ProductService} from './product.service'
@Component({
//selector:'pm-products',
moduleId:module.id, //use for component relative path
templateUrl:'product-list.component.html',
styleUrls:['product-list.component.css']
})

export class ProductListComponent implements OnInit{


    /*

    basic lifecycle hooks
    OnInit ngOnInit()
    OnChanges
    OnDestroy

    implement lifecycle interface 
    */

  pageTitle:string="Product List";
  imageWidth:number=50;
  imageMargin:number=2;
  showImage:boolean=false;
  listFilter:string;
  products:IProduct[]=[];
    errorMessage:string;
constructor (private _productService: ProductService){
    
}
toggleImage(): void
{
this.showImage=!this.showImage;
}

ngOnInit():void {
   this._productService.getProducts()
   .subscribe(products => this.products=products,
    error => this.errorMessage=<any> error);
}


//interface for custom types, we can use interface as data type

onRatingClicked(message:string): void {
    this.pageTitle='Product List: '+message;
}





}
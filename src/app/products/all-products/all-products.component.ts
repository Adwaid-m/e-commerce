import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  allproducts:any=[];//array of data//products
  constructor(private api:ApiService,private cart:CartService) {}

  searchTerm:string=''

  ngOnInit():void {
    this.api.getallproducts().subscribe(
      (data:any)=>{
        this.allproducts = data.products;
      }
    )

    this.api.searchKey.subscribe(
      (data:any)=>{
        this.searchTerm = data
      }
    )
  }

  addtowishlist(products:any){
    this.api.addtowishlist(products).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message);
        
      }
    )
  }


  addtocart(products:any){
    this.cart.addtocart(products)
  }

}

import { Injectable, ɵɵresolveBody } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { WishlistComponent } from './wishlist/wishlist.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getallproducts(){
    return this.http.get('http://localhost:3000/all-product')
    //json data
  }

  searchKey=new BehaviorSubject('')


  //add to  wishlist
   addtowishlist(products:any){
    const body={
      id:products.id,
      title:products.title,
      price:products.price,
      image:products.image,
      description:products.description
    }
    return this.http.post('http://localhost:3000/addtowishlist',body)
   }

   getwishlist(){
    return this.http.get('http://localhost:3000/getwishlist')
  }

  //delete from Wishlist

  deletewish(id:any){
    return this.http.delete('http://localhost:3000/deletewish/'+id)
  }
}


  
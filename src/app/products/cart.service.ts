import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartarray:any=[];//array
  cartlist=new BehaviorSubject([])//list
  
  

  constructor() { }

  //addtocart
  addtocart(products:any){
    this.cartarray.push(products)
    this.cartlist.next(this.cartarray)//stream of data
    console.log(this.cartlist);
    let total=this.gettotal()
    console.log(total);
    
    
  }

  //calculate grand total

  gettotal(){
    let grandtotal=0;
    this.cartarray.map((item:any)=>{
    grandtotal+=item.price

    })
    return grandtotal
  }

  removecart(products:any){
    this.cartarray.map((item:any,index:any)=>{
      if(products.id==item.id){//remove from cart
        this.cartarray.splice(index,1)
      }
    })
    this.cartlist.next(this.cartarray)//update cartlist
  }

  //empty this cartlist
  removeall(){
    this.cartarray=[]
    this.cartlist.next(this.cartarray)
  }
}

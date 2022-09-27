import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public title: String;
  public list:Product[];
  constructor() { }

  ngOnInit(): void {
    this.title='MyStore App';
    this.list=[
    {
     id:12,
     name:'T-Shirt 1',
     description:'nice T-shirt',
     price : 179,
     nbrLike:4 ,
     picture:'https://static.pullandbear.net/2/photos//2022/I/0/2/p/8245/962/251/8245962251_2_1_8.jpg?t=1662472139372',
     quantity:0 
    },
    {
      id:13,
      name:'T-Shirt 2',
      description:'nice T-shirt',
      price : 100,
      nbrLike:10 ,
      picture:'https://static.pullandbear.net/2/photos//2022/I/0/2/p/8245/971/800/8245971800_2_1_8.jpg?t=1663575766373',
      quantity:2 
     },
     {
       id:14,
       name:'T-Shirt 3',
       description:'nice T-shirt',
       price : 120,
       nbrLike:1 ,
       picture:'https://static.pullandbear.net/2/photos//2022/I/0/2/p/8245/946/800/8245946800_2_1_8.jpg?t=1652266674146',
       quantity:0 
      }
    ]
  }
  incrementLike(product:Product):void
  {
let i = this.list.indexOf(product);
 if(i!=-1)
 {
  this.list[i].nbrLike++
 }
}
buyProduct(product:Product):void
{
let i = this.list.indexOf(product);
if(i!=-1)
{
this.list[i].quantity--
}
}

}

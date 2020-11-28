import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products=[
    { id:1,title:'product 1',description:'this is nice product 1',category:'electronics',price:100},
    { id:2,title:'product 2',description:'this is nice product 2',category:'home decore',price:1000},
    { id:3,title:'product 3',description:'this is nice product 3',category:'computers',price:10000}
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(product){


  }

  onDelete(product,index){
    const result = confirm(`Are you sure you want to delete product: ${product['title']}?`)
    if(result){
    this.products.splice(index,1)
    }
  }
}

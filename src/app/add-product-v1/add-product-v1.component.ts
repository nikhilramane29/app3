import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-v1',
  templateUrl: './add-product-v1.component.html',
  styleUrls: ['./add-product-v1.component.css']
})
export class AddProductV1Component implements OnInit {
  title=''
  description=''
  price=''
  category=''

  constructor() { }

  ngOnInit(): void {
  }

  onCancel(){
   // console.log(`title = ${this.title}`)
    //console.log(event)
    
    }
  onSave(){
    console.log(`product Information..`)
    console.log(`title = ${this.title}`)
    console.log(`description = ${this.description}`)
    console.log(`price = ${this.price}`)
    console.log(`category = ${this.category}`)

  }


}

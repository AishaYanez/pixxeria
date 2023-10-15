import { Component } from '@angular/core';
import { Food } from 'src/app/models/food/food';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  foods: Array<Food> = [];
  menuSelected!: string;

  ngOnInit(): void {
    const food: Food = {
      id:1,
      type:"pizza",
      ingredients:"Ajo y queso",
      price:17.5
    };
    console.log('hola')
    this.foods.push(food);
    this.foods.forEach((f)=>console.log(f));
  }

  //Conseguir las comidas
  getMainCourse() {

  }

  getStarters() {

  }

  getDesserts() {

  }

  //Cambiar de seccion del menu
  toStarters() {

  }

  toMainCourse() {

  }

  toDesserts() {

  }

  //Selecionar comida para añadir al pedido
  selectFood() {

  }
}

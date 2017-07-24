import { Component } from '@angular/core';

export class Hero {
  id:number;
  name:string;
  price:number;
}

const HEROES: Hero[] = [
  { id: 1, name: '电视机', price: 214 },
  { id: 2, name: '投影仪', price: 213 },
  { id: 3, name: '洗衣机', price: 153 },
  { id: 4, name: '冰箱', price: 3646 },
  { id: 5, name: '空调', price: 231 },
  { id: 6, name: '油烟机', price: 2543 },
  { id: 7, name: '热水器', price: 253 },
  { id: 8, name: '自动马桶', price: 123 },
  { id: 9, name: '电饭煲', price: 532 },
  { id: 10, name: '电磁炉', price: 143 }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '商品价格总览';
  heroes = HEROES;
  selectedHero: Hero;
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

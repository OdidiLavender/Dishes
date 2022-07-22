import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  



  getAll():Foods[]{
    return[
     {
    id:1,
    name: 'Burger',
    price:800,
    favorite:false,
    star:2.5,
    imageUrl:'/assets/food-1.jpg',
    cookTime: '10-20',
    origin:['Mali'],
    tags:['FastFood','burger','breakfast']
     },


     {
      id:2,
      name: 'Pizza',
      price:1200,
      favorite:false,
      star:4.5,
      imageUrl:'/assets/food-2.jpg',
      cookTime: '25-30',
      origin:['Italy'],
      tags:['FastFood','pizza','lunch']
      },

       {
        id:8,
        name: 'Rice',
        price:600,
        favorite:false,
        star:4.5,
        imageUrl:'/assets/food-8.jpg',
        cookTime: '25-30',
        origin:['spain'],
        tags:['FastFood','pizza','lunch']
         },
         {
          id:4,
          name: 'Pasta',
          price:800,
          favorite:false,
          star:3.5,
          imageUrl:'/assets/food-4.jpg',
          cookTime: '10-15',
          origin:['france'],
          tags:['FastFood','pasta','dinner']
           },
           {
            id:5,
            name: 'Fries',
            price:500,
            favorite:false,
            star:4.5,
            imageUrl:'/assets/food-5.jpg',
            cookTime: '10-30',
            origin:['France','Italy','Japan'],
            tags:['FastFood','fries','lunch','dinner',]
           },
           {
              id:6,
              name: 'Steak',
              price:600,
              favorite:false,
              star:5.0,
              imageUrl:'/assets/food-6.jpg',
              cookTime: '10-30',
              origin:['Kenya'],
              tags:['FastFood','steak','dinner',]
           },
           {
            id:7,
            name: 'Rice',
            price:2000,
            favorite:false,
            star:4.5,
            imageUrl:'/assets/food-7.jpg',
            cookTime: '10-30',
            origin:['phillipnes'],
            tags:['rice','lunch','dinner',]
            },
            {
              id:9,
              name: 'Fish',
              price:3500,
              favorite:false,
              star:4.5,
              imageUrl:'/assets/food-9.jpg',
              cookTime: '25-30',
              origin:['Kenya'],
              tags:['Dinner','Fish','lunch']
              },
        
            {
              id:3,
              name: 'Pizza',
              price:1200,
              favorite:false,
              star:4.0,
              imageUrl:'/assets/food-3.jpg',
              cookTime: '10-30',
              origin:['kenya'],
              tags:['rice','lunch','dinner',]
             }

    ];
  }
}

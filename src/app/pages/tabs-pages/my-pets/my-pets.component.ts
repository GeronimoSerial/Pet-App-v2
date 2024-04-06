import { Component } from '@angular/core';
import { PetsInterface } from '../../../core/models/pet';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrl: './my-pets.component.scss'
})
export class MyPetsComponent {
  data: PetsInterface[] = [];
  pets: PetsInterface[] = []; 
  constructor() {
    this.pets = []
    for (let i = 0; i < 50; i++) {
      var harcodePet: PetsInterface = {
        id: i,
        name: 'Pet' + i,
        type: 'Dog',
        breed: 'Breed' + i,
        birthday: new Date(),
        imageUrl: new FormData(),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto sint at? Nostrum consequuntur accusamus, eveniet dolorem voluptatibus laboriosam libero voluptate, similique perferendis voluptas magni consectetur quia quam incidunt repellat         ' + i,
        userId: i,
      }
      this.pets.push(harcodePet);
    }
  }
}

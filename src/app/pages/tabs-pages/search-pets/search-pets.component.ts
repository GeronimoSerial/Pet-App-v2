import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../../services/pets/pets.service';
import { MessageService } from 'primeng/api';
import { PetsInterface } from '../../../core/models/pet';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-pets',
  templateUrl: './search-pets.component.html',
  styleUrl: './search-pets.component.scss'
})
export class SearchPetsComponent implements OnInit{
  pets: PetsInterface[] = [];
  searchPet: string = '';
  filteredPets: PetsInterface[] = [];
  filters = ["Name", "Type", "Breed"];
  selectedFilter: string = 'Filters';

  constructor(
    private petService: PetsService,
    private toastr: ToastrService
  ) {
    this.pets = []
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    this.petService.getPets().subscribe({
      next: (res: PetsInterface[]) => {
        res.forEach(pet => {
          this.pets.push(pet);
        });
        console.log(res);
      },
      error: (err) => {
        this.toastr.error(err.message, 'Error');
      },
    });
  }

  search(){
    console.log('search executed');
    const filterPets = this.pets.filter(pet => {
      pet.name.toLowerCase().includes(this.searchPet.toLowerCase());
    })
    this.filteredPets = filterPets;
  }
}






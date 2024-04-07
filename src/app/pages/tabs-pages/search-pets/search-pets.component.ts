import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../../services/pets/pets.service';
import { MessageService } from 'primeng/api';
import { PetsInterface } from '../../../core/models/pet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { PopupComponent } from './popup/popup.component';





@Component({
  selector: 'app-search-pets',
  templateUrl: './search-pets.component.html',
  styleUrl: './search-pets.component.scss'
})
export class SearchPetsComponent implements OnInit{
  pets: PetsInterface[] = [];
  pet: PetsInterface;
  searchPet: string = '';
  filteredPets: PetsInterface[] = [];
  filters = ["Name", "Type", "Breed"];
  selectedFilter: string = 'Filters';
  data: PetsInterface[] = [];
  dialogRef: MatDialogRef<any> | undefined;
  imageUrl: any;
  srcResult  = null; //Por ahora


  constructor(
    private petService: PetsService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {
    this.pets = []
    for (let i = 0; i < 50; i++) {
      var harcodePet: PetsInterface = {
        id: i,
        name: 'Pet' + i,
        type: 'Dog',
        breed: 'Breed' + i,
        imageUrl: new FormData(),
        birthday: new Date( ),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto sint at? Nostrum consequuntur accusamus, eveniet dolorem voluptatibus laboriosam libero voluptate, similique perferendis voluptas magni consectetur quia quam incidunt repellat         ' + i,
        userId: i,
      }
      this.pets.push(harcodePet);
    }
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

  petInfo(id:number){
    this.dialogRef = this.dialog.open(PopupComponent, {
      data: {
        pet: this.pets.find(x => x.id === id)
      },
    })
  }
  search(){
    console.log('search executed');
    const filterPets = this.pets.filter(pet => {
      return pet.name.toLowerCase().includes(this.searchPet.toLowerCase());
    })
    this.filteredPets = filterPets;
  }
  getPetImage(){
    this.petService.getPetImage(this.pet.imageUrl).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}






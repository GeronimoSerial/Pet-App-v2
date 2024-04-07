import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PetsService } from '../../../../services/pets/pets.service';
import { PetsInterface } from '../../../../core/models/pet';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent {
  pet: PetsInterface;
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private petService: PetsService
  ) {
    this.pet = data.pet;
    console.log(data);
    console.log(this.data.pet)
  }
}

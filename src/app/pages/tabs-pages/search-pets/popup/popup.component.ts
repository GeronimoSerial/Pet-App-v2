import { Component, Inject, Input, OnInit, input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PetsService } from '../../../../services/pets/pets.service';
import { PetsInterface } from '../../../../core/models/pet';
declare var bootstrap: any;

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent implements OnInit {
  popupStates: boolean[] = [];
  test: string [] = [];
  
  
  
  
  ngOnInit(): void {
    this.popupStates = new Array(50).fill(false);
    const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
   )
   popoverTriggerList.map(function (popoverTriggerEl){
    return new bootstrap.Popover(popoverTriggerEl , {
      container: 'body'
    })
   })

   // tippy('#myTippy', {
    //   content: "I'm a Tippy tooltip!",
    //   trigger: 'click',
    //   });
  }
 
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.test.push('Mascota  numero' + i);
  
    }
  }

  
  
  togglePopup() {
    const popup = document.querySelector('.popup') as HTMLElement;
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
  }
}

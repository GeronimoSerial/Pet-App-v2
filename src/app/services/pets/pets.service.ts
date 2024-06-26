import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PetsInterface } from '../../core/models/pet';
@Injectable({
  providedIn: 'root'
})
export class PetsService {
  
  baseUrl = environment.base_url;

  constructor(private http: HttpClient, private route: Router) { 
  }
    publishPet(petData: PetsInterface){ 
      return this.http.post(`${this.baseUrl}/pets/AddPet`, petData);
      
    }
    
    getPets(){
      return this.http.get(`${this.baseUrl}/pets/GetPets`);
  
    }

    getPetImage(imageName: any){
      return this.http.get(`${this.baseUrl}/pets/GetPetImage/${imageName}`, 
      {responseType: 'blob'}
      );
    }

  
   
}

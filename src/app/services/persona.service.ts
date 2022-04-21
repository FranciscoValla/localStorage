// import { Persona } from './../models/Persona';
import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';

let localStorageContent = localStorage.getItem('personas');
let personas: Persona[] ;

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { 
    
  }

  getPersona() {
    if ( localStorageContent === null){
      personas = [];
    } else{
      localStorageContent = localStorage.getItem('personas');
      personas = JSON.parse( localStorageContent || '[]');
    }
    return personas;
  }

  addPersona(persona: any ){
    localStorageContent = localStorage.getItem('personas');
    personas = JSON.parse( localStorageContent || '[]')
    personas.push(persona);
    localStorage.setItem('personas', JSON.stringify( personas || '[]'));
  }

  deletePersona( persona : Persona){
    for( let i=0; i< personas.length; i++) {
      if ( persona == personas[i]){
        personas.splice(i, 1);
        localStorage.setItem('personas', JSON.stringify( personas || '[]'));
      }
    }
  }

}

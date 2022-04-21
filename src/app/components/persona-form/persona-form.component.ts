import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  constructor( public personaService: PersonaService) { }

  ngOnInit(): void {
  }

  addPersona(newNombre:HTMLInputElement, newEdad:HTMLInputElement, newSexo: HTMLInputElement){
    this.personaService.addPersona({
      nombre: newNombre.value,
      edad: parseInt(newEdad.value),
      sexo: newSexo.value
    });

    newNombre.value = '';
    newEdad.value = '';
    newSexo.value = '';
    newNombre.focus();
  }

}

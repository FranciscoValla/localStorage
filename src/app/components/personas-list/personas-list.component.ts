import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import {Persona} from '../../models/Persona';

@Component({
  selector: 'app-personas-list',
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.css']
})
export class PersonasListComponent implements OnInit {

  personas: Persona[] = [];

  constructor( public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personas = this.personaService.getPersona();
  }

  deletePersona(persona: Persona){
    if ( confirm('¿Estas seguro que deseas eliminar la persona?')){
      this.personaService.deletePersona(persona);
    }
    
  }



}

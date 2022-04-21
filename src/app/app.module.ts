import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonaFormComponent } from './components/persona-form/persona-form.component';
import { PersonasListComponent } from './components/personas-list/personas-list.component';

// Importamos nuestro servicio
import { PersonaService } from './services/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PersonaFormComponent,
    PersonasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { ProblemeComponent } from './probleme/probleme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrenomComponent } from './prenom/prenom.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProblemeData } from './probleme/categorie-data';
import { CategorieService } from './probleme/categorie.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProblemeComponent,
    PrenomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProblemeData, {delay: 1000})


  ],
  providers: [CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

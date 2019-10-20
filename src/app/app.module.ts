import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracownicyListComponent } from './pracownicy/pracownicy-list/pracownicy-list.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { PracownikCreateComponent } from './pracownicy/pracownik-create/pracownik-create.component';
import { PracownikDetailsComponent } from './pracownicy/pracownik-details/pracownik-details.component';
import { PracownikUpdateComponent } from './pracownicy/pracownik-update/pracownik-update.component';
import { WolontariuszeListComponent } from './wolontariusze/wolontariusze-list/wolontariusze-list.component';
import { PracownicyDokumentyComponent } from './pracownicy/pracownicy-dokumenty/pracownicy-dokumenty.component';
import { PracownicyHistoriaComponent } from './pracownicy/pracownicy-historia/pracownicy-historia.component';

@NgModule({
  declarations: [
    AppComponent,
    PracownicyListComponent,
    PracownikCreateComponent,
    PracownikDetailsComponent,
    PracownikUpdateComponent,
    WolontariuszeListComponent,
    PracownicyDokumentyComponent,
    PracownicyHistoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

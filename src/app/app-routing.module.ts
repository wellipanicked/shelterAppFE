import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PracownicyListComponent} from "./pracownicy/pracownicy-list/pracownicy-list.component";
import {PracownikCreateComponent} from "./pracownicy/pracownik-create/pracownik-create.component";
import {PracownikDetailsComponent} from "./pracownicy/pracownik-details/pracownik-details.component";
import {PracownikUpdateComponent} from "./pracownicy/pracownik-update/pracownik-update.component";
import {WolontariuszeListComponent} from "./wolontariusze/wolontariusze-list/wolontariusze-list.component";
import {PracownicyDokumentyComponent} from "./pracownicy/pracownicy-dokumenty/pracownicy-dokumenty.component";
import {PracownicyHistoriaComponent} from "./pracownicy/pracownicy-historia/pracownicy-historia.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: 'pracownik-stworz', component: PracownikCreateComponent},
  {path: 'pracownik-szczegoly/:id', component: PracownikDetailsComponent},
  {path: 'pracownik-edycja/:id', component: PracownikUpdateComponent},
  {path: 'pracownicy-lista', component: PracownicyListComponent},
  {path: 'pracownik-dokumenty', component: PracownicyDokumentyComponent},
  {path: 'pracownik-historia', component: PracownicyHistoriaComponent},
  {path: 'wolontariusze-lista', component: WolontariuszeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

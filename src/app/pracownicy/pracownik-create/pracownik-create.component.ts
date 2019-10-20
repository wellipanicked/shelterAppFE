import {Component, Input, OnInit} from '@angular/core';
import {RestApiService} from "../../shared/rest-api.service";
import {Router} from "@angular/router";
import {Pracownik} from "../../shared/pracownik";

@Component({
  selector: 'app-pracownik-create',
  templateUrl: './pracownik-create.component.html',
  styleUrls: ['./pracownik-create.component.css']
})
export class PracownikCreateComponent implements OnInit {

  pracownik: Pracownik = {
    daneAdresowe: {
      kraj: '',
      wojewodztwo: '',
      powiat: '',
      poczta: '',
      miasto: '',
      ulica: '',
      nr_budynku: '',
      nr_mieszkania: '',
      kod_pocztowy: ''
    },
    danePodstawowe: {
      dataUrodzenia: "",
      drugie_imie: "",
      imie: "",
      nazwisko: "",
      nip: "",
      pesel: "",
      stanowisko: ""
    },
    daneZatrudnienia: {
      dataZatrudnienia: '',
      umowaWaznaDo: '',
      dataOdejscia: '',
      aktywny: ''
    },
    dodatkoweInformacje: "",
    rodzajPracownika: "",
    id: 0
  }

  @Input() danePodstawowe = {
    imie: '',
    nazwisko: '',
    drugie_imie: '',
    stanowisko: '',
    pesel: '',
    nip: '',
    dataUrodzenia: ''
  };
  @Input() daneAdresowe = {
    kraj: '',
    wojewodztwo: '',
    powiat: '',
    poczta: '',
    miasto: '',
    ulica: '',
    nr_budynku: '',
    nr_mieszkania: '',
    kod_pocztowy: ''
  };
  @Input() daneZatrudnienia = {
    dataZatrudnienia: '',
    umowaWaznaDo: '',
    dataOdejscia: '',
    aktywny: ''
  };
  @Input() pracownik2 = {
    rodzajPracownika: ''
  }

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) {
  }

  ngOnInit() {
  }

  addPracownik() {
    this.pracownik.danePodstawowe = this.danePodstawowe;
    this.pracownik.daneAdresowe = this.daneAdresowe;
    this.pracownik.daneZatrudnienia = this.daneZatrudnienia;
    this.restApi.createPracownik(this.pracownik).subscribe((data: {}) => {
      this.router.navigate(['/pracownicy-list'])
    })
  }

}

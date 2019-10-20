import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../../shared/rest-api.service";

@Component({
  selector: 'app-pracownicy',
  templateUrl: './pracownicy-list.component.html',
  styleUrls: ['./pracownicy-list.component.css']
})
export class PracownicyListComponent implements OnInit {

  Pracownik: any[];

  constructor(public restApi: RestApiService) {
  }

  ngOnInit() {
    this.loadPracownicy()
  }

  loadPracownicy() {
    return this.restApi.getPracownicy().subscribe((data: []) => {
      this.Pracownik = data;
    })
  }

  deletePracownik(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deletePracownik(id).subscribe(data => {
        this.loadPracownicy()
      })
    }
  }

}

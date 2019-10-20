import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../shared/rest-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pracownik-update',
  templateUrl: './pracownik-update.component.html',
  styleUrls: ['./pracownik-update.component.css']
})
export class PracownikUpdateComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  pracownik: any = {};

  constructor(
    public restApi:RestApiService,
    public actRoute:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.loadPracownik()
  }

  loadPracownik() {
    return this.restApi.getPracownik(this.id).subscribe((data: {}) => {
      this.pracownik = data;
    })
  }

  updatePracownik() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updatePracownik(this.id, this.pracownik).subscribe(data => {
        this.router.navigate(['/pracownicy-list'])
      })
    }
  }
  
}

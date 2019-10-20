import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pracownik} from "./pracownik";
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPracownicy(): Observable<Pracownik[]> {
    return this.http.get<Pracownik[]>(this.apiURL + '/pracownicy/lista')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getPracownik(id): Observable<Pracownik> {
    return this.http.get<Pracownik>(this.apiURL + '/pracownicy/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createPracownik(pracownik): Observable<Pracownik> {
    return this.http.post<Pracownik>(this.apiURL + '/pracownicy/', JSON.stringify(pracownik), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updatePracownik(id, pracownik): Observable<Pracownik> {
    return this.http.put<Pracownik>(this.apiURL + '/pracownicy/' + id, JSON.stringify(pracownik), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deletePracownik(id){
    return this.http.delete<Pracownik>(this.apiURL + '/pracownicy/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

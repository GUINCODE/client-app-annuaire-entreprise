import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environnement/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi = `${environment.URL_BACKEND}:${environment.PORT_BACKEND}/entreprises`;


  constructor(private http: HttpClient) {}

  getEntreprises(): Observable<any> {
    return this.http.get(this.urlApi)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Erreur de réseau:', error.error);
    } else {
      console.error(`Backend renvoie le code ${error.status}, le corps était:`, error.error);
    }
    return throwError(() => new Error('Erreur lors de la récupération des données.'));
  }
}

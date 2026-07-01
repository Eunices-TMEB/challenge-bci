import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Element } from '../interfaces/element.interface';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3001/api/v1/elements';

  public getElements(): Observable<Element[]> {
    return this.http.get<Element[]>(this.apiUrl).pipe(
      retry({ count: 2, delay: 1000 }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error al obtener elementos:', error);
        return throwError(
          () => new Error('No se pudieron obtener los elementos del servidor.')
        );
      })
    );
  }
}

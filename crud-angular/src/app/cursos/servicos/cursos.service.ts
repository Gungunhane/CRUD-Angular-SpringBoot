import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first, delay } from 'rxjs';

import { Curso } from './../modelo/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Curso[]>(this.API)
    .pipe(
      first(), delay(5000),
      tap(cursos => console.log(cursos)));
  }
}

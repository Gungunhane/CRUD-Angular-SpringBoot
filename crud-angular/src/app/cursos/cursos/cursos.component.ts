import { CursosService } from './../servicos/cursos.service';
import { Curso } from './../modelo/curso';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]>;
  displayedColumns = ['nome','categoria'];

// cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    // this.cursos= [];
    // this.cursosService = new CursosService();
    this.cursos$ = this.cursosService.list();


  }

  ngOnInit(): void {

  }

}

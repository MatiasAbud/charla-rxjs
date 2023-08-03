import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, forkJoin, map, of, pluck, take, tap } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
})
export class HttpComponent {

  constructor(private http:HttpClient) { }

  boton() {
    const miObservable$ = of(1,2,3,4,5,6,7,8,9,10)

    miObservable$
      .pipe(
        tap((emi_tap)=> {
          console.log({emi_tap});
        }),
        map((param_map)=>{
          return {
            a: 'pasando x el map',
            b: 'prop B',
            id: param_map
          }
        }),
        pluck('id'), //quitar

        take(6),

        filter((emi_filter)=>{
          return emi_filter % 2 == 0
        })
      )
      .subscribe( (emision)=> {
        console.log({emision});
      })

  }

  llamar() {
    /*
    this.llamada2()
      .pipe(
        tap((res)=> console.log(res)),  
      )
      .subscribe( (res)=> {
        console.log({res});
      })
    */
    forkJoin([this.llamada(), this.llamada2()])
      .subscribe((res) => {
        console.log(res);
      })
  }

  llamada() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  llamada2() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  }

}


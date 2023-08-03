import { Component, OnInit } from '@angular/core';
import { from, Observable, Observer, of, Subject, Subscription } from 'rxjs';

const myObs = new Subject<string>()
let subscripcion_1: Subscription
let subscripcion_2: Subscription
let subscripcion_3: Subscription

function notificar() {
  console.log('notificar');
  myObs.next((document.getElementById('miObservable') as HTMLInputElement).value)
}

function notificarError() {
  console.log('notificar Error');
  //myObs.next((document.getElementById('miObservable') as HTMLInputElement).value)
  myObs.error('Error')
}

function notificarComplete() {
  console.log('notificar Complete');
  myObs.complete()
}


function subscribir_1() {
  subscripcion_1 = myObs.subscribe((data:string) => {
    console.log('data de boton 1:', data);
    (document.getElementById('Observer_1') as HTMLInputElement).value = data
  })
}

function desSubscribir_1() {
  subscripcion_1.unsubscribe()
}

function subscribir_2() {
  subscripcion_2 = myObs.subscribe((data:string) => {
    console.log('data de boton 2:', data);
    (document.getElementById('Observer_2') as HTMLInputElement).value = data
  })
}

function desSubscribir_2() {
  subscripcion_2.unsubscribe()
}

function subscribir_3() {
  subscripcion_3 = myObs.subscribe((data:string) => {
    console.log('data de boton 3:', data);
    (document.getElementById('Observer_3') as HTMLInputElement).value = data
  })
}

function desSubscribir_3() {
  subscripcion_3.unsubscribe()
}

/* Conociendo el elemento Observer */

let subscripcion_4: Subscription
const observer: Observer<string> = {
  next: (data:string) => {
      console.log('data de boton 4:', data);
      (document.getElementById('Observer_4') as HTMLInputElement).value = data
  },
  error: (err) => {
    console.log('error del boton 4:', err);
    (document.getElementById('Observer_4') as HTMLInputElement).value = err
  },
  // ver porq despues del error no hay complete 
  complete: () => {
    console.log('complete()');
    (document.getElementById('Observer_4') as HTMLInputElement).value = 'Completed'
  } 
}


function subscribir_4 () {
  /* myObs.subscribe({
    next: (data:string) => {
        console.log('data de boton 4:', data);
        (document.getElementById('Observer_4') as HTMLInputElement).value = data
    },
    error: (err) => {
      console.log('error del boton 4:', err);
      (document.getElementById('Observer_4') as HTMLInputElement).value = err
    },
    // ver porq despues del error no hay complete 
    complete: () => {
      console.log('complete()');
      (document.getElementById('Observer_4') as HTMLInputElement).value = 'Completed'
    } 
  }) */
  subscripcion_4 = myObs.subscribe(observer)
}

function desSubscribir_4() {
  subscripcion_4.unsubscribe()
}


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
})
export class RxjsComponent {
  
  notificar(){ notificar() }

  notificarError(){ notificarError() }

  notificarComplete(){ notificarComplete() }

  subscribir_1(){ subscribir_1() }

  desSubscribir_1() { desSubscribir_1() }

  subscribir_2(){ subscribir_2() }

  desSubscribir_2() { desSubscribir_2() }

  subscribir_3(){ subscribir_3() }

  desSubscribir_3() { desSubscribir_3() }

  subscribir_4(){ subscribir_4() }

  desSubscribir_4() { desSubscribir_4() }
}

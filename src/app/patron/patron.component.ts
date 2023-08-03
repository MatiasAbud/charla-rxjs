import { Component } from '@angular/core';

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
})
export class PatronComponent {

  subscriptos: string[] = []

  atar(inputId:string) {
    // verifico que no este repetido antes de hacer push
    if (this.subscriptos.some((subscipto)=> subscipto === inputId)) return
    
    this.subscriptos.push(inputId) 
  }

  desatar(inputId:string) {
    // verifico que exista el elemnto en el array para que no borre otro
    const index = this.subscriptos.indexOf(inputId)
    if (index == -1) return
    
    this.subscriptos.splice(index, 1)
  }

  notificar() {
    const miDatoParaEmitir = (document.getElementById('miObservable') as HTMLInputElement).value
    
    // notify llama al update de cada elemento 
    
    //update() de cada elemento
    for (let i = 0; i < this.subscriptos.length; i++) {
      (document.getElementById(this.subscriptos[i]) as HTMLInputElement).value = miDatoParaEmitir
    }
  }
}

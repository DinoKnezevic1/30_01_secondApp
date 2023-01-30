import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-crvena',
  templateUrl: './crvena.component.html',
  styleUrls: ['./crvena.component.scss'],
})
export class CrvenaComponent {

  @Input() myColor: string = '';
  @Output() testKlika = new EventEmitter<string>();
  //@Output() testBoje = new EventEmitter<string>();

  constructor(){
    console.log('test');
  }

  pozoviFunkcijuNadKomponente(){
    this.testKlika.emit(this.myColor)
  }
}

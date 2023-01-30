import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plava',
  templateUrl: './plava.component.html',
  styleUrls: ['./plava.component.scss'],
})
export class PlavaComponent {
  @Input() myColor: string = '';
  @Output() testKlika = new EventEmitter<string>();

  pozoviFunkcijuNadKomponente(){
    this.testKlika.emit('blue component')
  }
}

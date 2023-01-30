import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zelena',
  templateUrl: './zelena.component.html',
  styleUrls: ['./zelena.component.scss'],
})
export class ZelenaComponent {
  @Input() myColor: string = '';
  @Output() testKlika = new EventEmitter<string>();

  pozoviFunkcijuNadKomponente(){
    this.testKlika.emit('green component')
  }
}

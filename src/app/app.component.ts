import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'secondApp';

  odgovoriNaKlik(boja: string){
    console.log(boja);
    this.prikaziTrecu=!this.prikaziTrecu;
  }
  prva: string='';
  druga: string='';
  treca: string='';

  prikaziPrvu=true;
  prikaziDrugu=true;
  prikaziTrecu=false;

}

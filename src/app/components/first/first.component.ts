import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  title = "First";
  imagePath = "assets/mike.png"

  foo(){
    console.log("funkcija");
  }
}

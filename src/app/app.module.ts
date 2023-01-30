import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { CrvenaComponent } from './components/crvena/crvena.component';
import { ZelenaComponent } from './components/zelena/zelena.component';
import { PlavaComponent } from './components/plava/plava.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CrvenaComponent,
    ZelenaComponent,
    PlavaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  prva:string = '';
  druga:string = '';
  treca:string = '';
     
}


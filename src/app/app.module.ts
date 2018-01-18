import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { routing } from './app.routing';
import { ChurchesComponent } from './churches/churches.component';
import { StartpageComponent } from './startpage/startpage.component';
import { ChurchComponent } from './church/church.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChurchesComponent,
    StartpageComponent,
    ChurchComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

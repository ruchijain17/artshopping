import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
//import { RouteModule } from './route/routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                 // RouteModule,
                  RouterModule ],
  declarations: [ AppComponent,
                  HelloComponent,
                  HeaderComponent,
                  FooterComponent,
                  WelcomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

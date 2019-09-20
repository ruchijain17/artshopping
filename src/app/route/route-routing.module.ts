import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const route: Routes = [ {
  path: '',
  component: WelcomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class RouteRoutingModule{}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { AuthComponent } from './auth/auth.component';
import { TravelExpandComponent } from './travel/travel-expand/travel-expand.component';
import { DBResolverService } from './travel/db-resolver.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'travel', component: TravelComponent, resolve: [DBResolverService] },
  { path: 'contact', component: ContactComponent },
  { path: 'auth', component: AuthComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

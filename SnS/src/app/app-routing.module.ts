import { TravelExpandComponent } from './travel/travel-expand/travel-expand.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { DBResolverService } from './travel/db-resolver.service';
// import { AuthGuard } from './auth/auth.guard';
// import { TravelSubsComponent } from './travel-subs/travel-subs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'travel',
    component: TravelComponent,
    children: [
      { path: ':id', component: TravelExpandComponent }
    ]
    // resolve: [DBResolverService]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

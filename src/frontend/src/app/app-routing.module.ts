import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ImprintComponent } from './pages/imprint/imprint.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'imprint', component: ImprintComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

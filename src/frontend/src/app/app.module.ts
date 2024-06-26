import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store/state/app.state';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { AUTH_SECRETS } from './secrets';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    FooterComponent,
    NavComponent,
    AlertComponent,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot(effects),
    AuthModule.forRoot({
      domain: AUTH_SECRETS.domain,
      clientId: AUTH_SECRETS.clientId,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

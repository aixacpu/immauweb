import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ✅ Chemin corrigé pour ton composant Home
import { HomeComponent } from './pages/home/home.component';
import { BienDetailComponent } from './pages/bien-detail/bien-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BienDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

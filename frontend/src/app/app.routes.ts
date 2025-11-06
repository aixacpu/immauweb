import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BienListComponent } from './bien-list/bien-list.component';
import { AjouterBienComponent } from './ajouter-bien/ajouter-bien.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BienDetailComponent } from './pages/bien-detail/bien-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'biens', component: BienListComponent },
  { path: 'ajouter-bien', component: AjouterBienComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bien-detail/:id', component: BienDetailComponent },
  { path: '**', redirectTo: '' }
];

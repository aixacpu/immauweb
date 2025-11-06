import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienListComponent } from './bien-list/bien-list.component';
import { AjouterBienComponent } from './ajouter-bien/ajouter-bien.component';

const routes: Routes = [
  { path: 'biens', component: BienListComponent },
  { path: 'ajouter-bien', component: AjouterBienComponent },
  { path: '', redirectTo: '/biens', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

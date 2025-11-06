import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <div class="container">
        <a class="navbar-brand" href="#" style="color: #ffc107; font-weight: bold;">🏠 ImmauWeb</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Accueil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/biens" routerLinkActive="active">Biens</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/ajouter-bien" routerLinkActive="active">Ajouter un bien</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact" routerLinkActive="active">Contact</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="/login" routerLinkActive="active">Connexion</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-warning ms-2" routerLink="/register" routerLinkActive="active">Inscription</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar-brand:hover { color: #ffeb3b !important; }
    .nav-link:hover { color: #ffeb3b !important; }
  `]
})
export class NavbarComponent {}

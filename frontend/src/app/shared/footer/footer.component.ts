import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-dark text-white mt-5 py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5 style="color: #ffc107;">🏠 ImmauWeb</h5>
            <p>Votre plateforme de confiance pour l'immobilier.</p>
            <div class="mt-3">
              <button class="btn btn-warning me-2">S'abonner</button>
              <button class="btn btn-outline-light">Newsletter</button>
            </div>
          </div>
          <div class="col-md-4">
            <h5 style="color: #ffc107;">Liens utiles</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-white">À propos</a></li>
              <li><a href="#" class="text-white">Services</a></li>
              <li><a href="#" class="text-white">Contact</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5 style="color: #ffc107;">Contact</h5>
            <p>Email: contact&#64;immauweb.com<br>
            Téléphone: +33 1 23 45 67 89</p>
            <div class="mt-3">
              <a href="#" class="text-white me-3"><i class="fab fa-facebook"></i></a>
              <a href="#" class="text-white me-3"><i class="fab fa-twitter"></i></a>
              <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr class="my-4">
        <div class="text-center">
          <p>&copy; 2025 ImmauWeb. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer a:hover { color: #ffc107 !important; }
  `]
})
export class FooterComponent {}

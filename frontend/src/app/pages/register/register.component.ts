                    import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow">
            <div class="card-header bg-success text-white text-center">
              <h4>Inscription</h4>
            </div>
            <div class="card-body">
              <form (ngSubmit)="onSubmit()">
                <div class="mb-3">
                  <label for="name" class="form-label">Nom</label>
                  <input type="text" class="form-control" id="name" [(ngModel)]="name" name="name" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" [(ngModel)]="email" name="email" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Mot de passe</label>
                  <input type="password" class="form-control" id="password" [(ngModel)]="password" name="password" required>
                </div>
                <button type="submit" class="btn btn-success w-100">S'inscrire</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card { border-radius: 10px; }
    .card-header { border-radius: 10px 10px 0 0; }
  `]
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Register attempt:', this.name, this.email, this.password);
    // TODO: Implement register logic
  }
}

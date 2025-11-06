import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow">
            <div class="card-header bg-warning text-dark text-center">
              <h4>Contactez-nous</h4>
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
                  <label for="subject" class="form-label">Sujet</label>
                  <input type="text" class="form-control" id="subject" [(ngModel)]="subject" name="subject" required>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea class="form-control" id="message" rows="5" [(ngModel)]="message" name="message" required></textarea>
                </div>
                <button type="submit" class="btn btn-warning w-100">Envoyer</button>
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
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  onSubmit() {
    console.log('Contact form submitted:', this.name, this.email, this.subject, this.message);
    // TODO: Implement contact form submission
  }
}

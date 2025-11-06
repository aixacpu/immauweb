import { Component, OnInit } from '@angular/core';
import { BiensService } from '../services/biens.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bien-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bien-list.component.html',
  styleUrls: ['./bien-list.component.css']
})
export class BienListComponent implements OnInit {
  biens: any[] = [];

  constructor(private biensService: BiensService) {}

  ngOnInit(): void {
    this.biensService.getBiens().subscribe({
      next: (data) => {
        this.biens = data;
      },
      error: (err) => console.error('Erreur lors du chargement des biens :', err)
    });
  }

  editBien(id: number) {
    // Implement edit functionality
    console.log('Edit bien with id:', id);
  }

  deleteBien(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce bien ?')) {
      this.biensService.deleteBien(id).subscribe({
        next: () => {
          this.biens = this.biens.filter(bien => bien.id !== id);
          alert('Bien supprimé avec succès!');
        },
        error: (err) => console.error('Erreur lors de la suppression du bien :', err)
      });
    }
  }

  addBien() {
    // Navigate to add bien page
    console.log('Navigate to add bien page');
  }
}

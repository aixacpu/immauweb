import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BiensService } from '../../services/biens.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bien-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bien-detail.component.html',
  styleUrls: ['./bien-detail.component.css']
})
export class BienDetailComponent implements OnInit {
  bienId!: number;
  bien: any;

  constructor(
    private biensService: BiensService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bienId = Number(this.route.snapshot.paramMap.get('id'));
    this.biensService.getBienById(this.bienId).subscribe((data) => {
      this.bien = data;
    });
  }

  editBien(): void {
    // TODO: Implement edit functionality
    console.log('Edit bien:', this.bienId);
  }

  deleteBien(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce bien ?')) {
      this.biensService.deleteBien(this.bienId).subscribe(() => {
        this.router.navigate(['/']);  // Redirige vers la page d'accueil
      });
    }
  }
}

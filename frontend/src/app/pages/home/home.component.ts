import { Component, OnInit } from '@angular/core';
import { BiensService } from '../../services/biens.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  biens: any[] = [];

  constructor(private biensService: BiensService) {}

  ngOnInit(): void {
    this.biensService.getBiens().subscribe({
      next: (data) => this.biens = data,
      error: (err) => console.error('Erreur lors du chargement des biens :', err)
    });
  }
}

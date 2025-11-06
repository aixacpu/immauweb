import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BiensService } from '../services/biens.service';  // Importer le service BiensService
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifier-bien',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modifier-bien.component.html',
  styleUrls: ['./modifier-bien.component.css']
})
export class ModifierBienComponent implements OnInit {
  bienForm!: FormGroup;
  bienId!: number;

  constructor(
    private fb: FormBuilder,
    private biensService: BiensService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bienId = Number(this.route.snapshot.paramMap.get('id'));  // Récupère l'ID du bien à partir de l'URL

    this.bienForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required]
    });

    // Appel du service pour récupérer le bien avec l'ID
    this.biensService.getBienById(this.bienId).subscribe({
      next: (data) => this.bienForm.patchValue(data),  // Remplir le formulaire avec les données récupérées
      error: (err) => console.error('Erreur lors du chargement du bien :', err)
    });
  }

  onSubmit(): void {
    if (this.bienForm.valid) {
      this.biensService.updateBien(this.bienId, this.bienForm.value).subscribe(() => {
        this.router.navigate(['/biens']);  // Redirige vers la page des biens après la mise à jour
      });
    }
  }
}

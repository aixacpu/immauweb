import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BiensService } from '../services/biens.service';  // Importer le service BiensService
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajouter-bien',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ajouter-bien.component.html',
  styleUrls: ['./ajouter-bien.component.css']
})
export class AjouterBienComponent implements OnInit {
  bienForm: FormGroup;
  selectedFiles: { file: File, preview: string }[] = [];

  constructor(private fb: FormBuilder, private biensService: BiensService) {
    this.bienForm = this.fb.group({
      titre: ['', Validators.required],
      description: [''],
      typeBien: ['Appartement'],
      transaction: ['Vente'],
      prix: ['', [Validators.required, Validators.min(0)]],
      surface: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFiles.push({ file, preview: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  }

  removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }

  onSubmit() {
    if (this.bienForm.valid) {
      const formData = new FormData();
      Object.keys(this.bienForm.value).forEach(key => {
        formData.append(key, this.bienForm.value[key]);
      });

      this.selectedFiles.forEach((fileObj, index) => {
        formData.append('photos[]', fileObj.file);
      });

      this.biensService.createBien(formData).subscribe({
        next: (response) => {
          console.log('Bien ajouté:', response);
          alert('Bien ajouté avec succès!');
          this.bienForm.reset();
          this.selectedFiles = [];
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout du bien:', error);
          alert('Erreur lors de l\'ajout du bien. Veuillez réessayer.');
        }
      });
    }
  }
}

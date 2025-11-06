import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; // Importation nécessaire
import { BiensService } from './biens.service';

describe('BiensService', () => {
  let service: BiensService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Ajoute ce module ici
      providers: [BiensService]  // Fournit BiensService pour les tests
    });

    service = TestBed.inject(BiensService);  // Injecte le service
    httpMock = TestBed.inject(HttpTestingController);  // Injecte HttpTestingController
  });

  it('should retrieve biens from the API via GET', () => {
    const mockBiens = [
      { id: 1, titre: 'Bien 1', description: 'Description 1' },
      { id: 2, titre: 'Bien 2', description: 'Description 2' }
    ];

    service.getBiens().subscribe(biens => {
      expect(biens.length).toBe(2);
      expect(biens).toEqual(mockBiens);
    });

    const req = httpMock.expectOne('http://localhost:8000/api/biens');  // Ajuste l'URL si nécessaire
    expect(req.request.method).toBe('GET');  // Vérifie que la méthode est bien GET
    req.flush(mockBiens);  // Retourne des données simulées
  });

  afterEach(() => {
    httpMock.verify();  // Vérifie que toutes les requêtes HTTP ont été correctement traitées
  });
});

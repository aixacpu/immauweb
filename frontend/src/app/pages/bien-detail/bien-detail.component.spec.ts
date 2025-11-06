import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BienDetailComponent } from './bien-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BiensService } from '../../services/biens.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('BienDetailComponent', () => {
  let component: BienDetailComponent;
  let fixture: ComponentFixture<BienDetailComponent>;
  let biensService: BiensService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienDetailComponent, HttpClientTestingModule],
      providers: [
        {
          provide: BiensService,
          useValue: { getBienById: jasmine.createSpy().and.returnValue(of({ id: 1, titre: 'Bien 1', description: 'Description 1' })), deleteBien: jasmine.createSpy().and.returnValue(of({})) }
        },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } },
        { provide: Router, useValue: { navigate: jasmine.createSpy() } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BienDetailComponent);
    component = fixture.componentInstance;
    biensService = TestBed.inject(BiensService);
    router = TestBed.inject(Router);
    spyOn(window, 'confirm').and.returnValue(true); // Mock confirm to return true
    fixture.detectChanges();
  });

  it('should delete bien and navigate to /', () => {
    component.deleteBien();  // Appelle la méthode de suppression
    expect(biensService.deleteBien).toHaveBeenCalledWith(1);  // Vérifie que deleteBien a été appelé avec l'ID du bien
    expect(router.navigate).toHaveBeenCalledWith(['/']);  // Vérifie que la navigation vers la page d'accueil a eu lieu
  });
});

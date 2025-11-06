import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterBienComponent } from './ajouter-bien.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AjouterBienComponent', () => {
  let component: AjouterBienComponent;
  let fixture: ComponentFixture<AjouterBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AjouterBienComponent, ReactiveFormsModule, HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

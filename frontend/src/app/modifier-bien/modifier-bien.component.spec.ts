import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierBienComponent } from './modifier-bien.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('ModifierBienComponent', () => {
  let component: ModifierBienComponent;
  let fixture: ComponentFixture<ModifierBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierBienComponent, ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } },
        { provide: Router, useValue: { navigate: jasmine.createSpy() } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

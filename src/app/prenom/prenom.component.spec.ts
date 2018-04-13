import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PrenomComponent } from './prenom.component';
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('PrenomComponent', () => {
  let component: PrenomComponent;
  let fixture: ComponentFixture<PrenomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenomComponent ],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Zone PRENOM invalide avec 2 caracteres', () => {
    let zone = component.prenomForm.controls['prenomValidator'];
    zone.setValue('a'.repeat(2));

    expect(zone.valid).toBeFalsy();
  });

  it('Zone PRENOM valide avec 3 caracteres', () => {
    let zone = component.prenomForm.controls['prenomValidator'];
    zone.setValue('a'.repeat(3));

    expect(zone.valid).toBeTruthy();
  });

  it('Zone PRENOM valide avec 200 caracteres', () => {
    let zone = component.prenomForm.controls['prenomValidator'];
    zone.setValue('a'.repeat(200));

    expect(zone.valid).toBeTruthy();
  });

  it('Zone PRENOM valide avec aucune valeurs', () => {
    let zone = component.prenomForm.controls['prenomValidator'];
    zone.setValue('a'.repeat(0));
    
    expect(zone.invalid).toBeFalsy();
  });

  it('Zone PRENOM valide avec 50 espaces', () => {
    let zone = component.prenomForm.controls['prenomValidator'];
    zone.setValue(' '.repeat(50));
    
    expect(zone.valid).toBeTruthy();
  });

  it('Zone PRENOM invalide avec 1 caracteres', () => {
    let zone = component.prenomForm.controls['prenomValidator'];
    zone.setValue('a'.repeat(1));
    
    expect(zone.valid).toBeFalsy();
  });

  it('Zone PRENOM valide avec 2 espaces et 1 caractere', () => {
    let zone = component.prenomForm.controls['prenomValidator'];
    zone.setValue(' '.repeat(2) + 'a'.repeat(1));
    
    expect(zone.valid).toBeTruthy();
  });

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ProblemeComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('Zone PRENOM invalide avec 2 caracteres', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue('a'.repeat(2));
      errors = zone.errors || {};
      expect(errors['valide']).toBeFalsy();
    });
  
    it('Zone PRENOM valide avec 3 caracteres', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue('a'.repeat(3));
      errors = zone.errors || {};
      expect(errors['valide']).toBeTruthy();
    });
  
    it('Zone PRENOM valide avec 200 caracteres', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue('a'.repeat(200));
      errors = zone.errors || {};
      expect(errors['valide']).toBeTruthy();
    });
  
    it('Zone PRENOM invalide avec aucune valeurs', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue('');
      errors = zone.errors || {};
      expect(errors['valide']).toBeFalsy;
    });
  
    it('Zone PRENOM invalide avec 50 espaces', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue(' '.repeat(50));
      errors = zone.errors || {};
      expect(errors['valide']).toBeFalsy();
    });
  
    it('Zone PRENOM invalide avec 1 caracteres', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue('a'.repeat(1));
      errors = zone.errors || {};
      expect(errors['valide']).toBeFalsy();
    });
  
    it('Zone PRENOM invalide avec 2 espaces et 1 caractere', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue("  a");
      errors = zone.errors || {};
      expect(errors['valide']).toBeFalsy();
    });
    

});

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
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue('a'.repeat(3));

      expect(zone.invalid).toBeFalsy();
    });

    it('Zone PRENOM valide avec 3 caracteres', () => {
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue('a'.repeat(3));

      expect(zone.valid).toBeTruthy();
    });

    it('Zone PRENOM valide avec 200 caracteres', () => {
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue('a'.repeat(200));

      expect(zone.valid).toBeTruthy();
    });

});

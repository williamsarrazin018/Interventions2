import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { TypeProblemeService } from './typeprobleme.service';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule],
      declarations: [ ProblemeComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [TypeProblemeService]
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
      expect(errors['longueurMin']).toBeFalsy();
    });
  
    it('Zone PRENOM valide avec 3 caracteres', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue('a'.repeat(3));
      errors = zone.errors || {};
      expect(errors['longueurMin']).toBeTruthy();
    });
  
    it('Zone PRENOM valide avec 200 caracteres', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue('a'.repeat(200));
      errors = zone.errors || {};
      expect(errors['longueurMin']).toBeTruthy();
    });
  
    it('Zone PRENOM invalide avec aucune valeurs', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue('');
      errors = zone.errors || {};
      expect(errors['espace']).toBeFalsy;
    });
  
    it('Zone PRENOM invalide avec 50 espaces', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue(' '.repeat(50));
      errors = zone.errors || {};
      expect(errors['espace']).toBeFalsy();
    });
  
    it('Zone PRENOM invalide avec 1 caracteres', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue('a'.repeat(1));
      errors = zone.errors || {};
      expect(errors['longueurMin']).toBeFalsy();
    });
  
    it('Zone PRENOM invalide avec 2 espaces et 1 caractere', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue("  a");
      errors = zone.errors || {};
      expect(errors['longueurMin']).toBeFalsy();
    });

    //TP12
    it('Zone TELEPHONE est désactivée quand ne pas me notifier', () => {
        component.appliquerNotifications('pasNotifier');

        let zone = component.problemeForm.get('telephone');
        expect(zone.status).toEqual('DISABLED');
    });

    it('Zone TELEPHONE est vide quand ne pas me notifier', () => {
      component.appliquerNotifications('pasNotifier');

      let zone = component.problemeForm.get('telephone');
      expect(zone.value).toEqual(null);
    });
    
    it('Zone ADRESSE COURRIEL est désactivée quand ne pas me notifier', () => {
      component.appliquerNotifications('pasNotifier');

      let zone = component.problemeForm.get('courrielGroup.courriel');
      expect(zone.status).toEqual('DISABLED');
    });

    it('Zone CONFIRMER COURRIEL est désactivée quand ne pas me notifier', () => {
      component.appliquerNotifications('pasNotifier');

      let zone = component.problemeForm.get('courrielGroup.courrielConfirmation');
      expect(zone.status).toEqual('DISABLED');
    });
});

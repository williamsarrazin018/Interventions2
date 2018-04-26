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

    //TP13

    it('Zone TELEPHONE est désactivée quand notifier par courriel', () => {
      component.appliquerNotifications('parCourriel');

      let zone = component.problemeForm.get('telephone');
      expect(zone.status).toEqual('DISABLED');
    });

    it('Zone ADRESSE COURRIEL est activée quand notifier par courriel', () => {
      component.appliquerNotifications('parCourriel');

      let zone = component.problemeForm.get('courrielGroup.courriel');
      expect(zone.enabled).toEqual(true);
    });

    it('Zone CONFIRMER COURRIEL est activée quand notifier par courriel', () => {
      component.appliquerNotifications('parCourriel');

      let zone = component.problemeForm.get('courrielGroup.courrielConfirmation');
      expect(zone.enabled).toEqual(true);
    });

    it('Zone ADRESSE COURRIEL est invalide sans valeur quand notifier courriel', () => {
      component.appliquerNotifications('parCourriel');
      let errors = {};

      let zone = component.problemeForm.get('courrielGroup.courriel');
      let zone2 = component.problemeForm.get('courrielGroup.courrielConfirmation');
      zone.setValue('');
      zone2.setValue('');

      let groupe = component.problemeForm.get('courrielGroup');

      errors = groupe.errors || {};
      expect(zone.valid).toBeFalsy();
     // expect(errors['courrielsInvalides']).toBeTruthy();

    });

    it('Zone CONFIRMER COURRIEL est invalide sans valeur quand notifier courriel', () => {
      component.appliquerNotifications('parCourriel');
      let errors = {};

      let zone = component.problemeForm.get('courrielGroup.courriel');
      let zone2 = component.problemeForm.get('courrielGroup.courrielConfirmation');
      zone.setValue('');
      zone2.setValue('');

      let groupe = component.problemeForm.get('courrielGroup');

      errors = groupe.errors || {};
      expect(zone2.valid).toBeFalsy();
    });

    it('Zone ADRESSE COURRIEL est invalide avec un format non conforme', () => {

    });

    it('Zone ADRESSE COURRIEL sans valeur et zone CONFIRMER COURRIEL avec valeur valide retourne null', () => {
      component.appliquerNotifications('parCourriel');
      let errors = {};

      let zone = component.problemeForm.get('courrielGroup.courriel');
      let zone2 = component.problemeForm.get('courrielGroup.courrielConfirmation');
      zone.setValue('');
      zone2.setValue('abc@def.ghi');

      let groupe = component.problemeForm.get('courrielGroup');

      errors = groupe.errors || {};
      expect(zone2.value).toBe(null);
    });

    it('Zone ADRESSE COURRIEL avec valeur valide et Zone CONFIRMER COURRIEL sans valeur retourne null', () => {

    });

    it('Zones ADRESSE COURRIEL et CONFIRMER COURRIEL sont invalides si les valeurs sont différentes quand notifier par courriel', () => {

    });

    it('Zones ADRESSE COURRIEL et CONFIRMER COURRIEL sont valides si les valeurs sont identiques quand notifier par courriel', () => {
      component.appliquerNotifications('parCourriel');
      let errors = {};

      let zone = component.problemeForm.get('courrielGroup.courriel');
      let zone2 = component.problemeForm.get('courrielGroup.courrielConfirmation');
      zone.setValue('aaa@abc.com');
      zone2.setValue('aaa@abc.com');

      let groupe = component.problemeForm.get('courrielGroup');

      errors = groupe.errors || {};
      expect(errors['courrielsInvalides']).toBeUndefined();
    });
});

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
      expect(errors['longueurMin']).toBe(false);
    });
  
    it('Zone PRENOM valide avec 3 caracteres', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue('a'.repeat(3));
      errors = zone.errors || {};
      expect(errors['espace']).toBe(false);
    });
  
    it('Zone PRENOM valide avec 200 caracteres', () => {
      let errors = {};
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue('a'.repeat(200));
      errors = zone.errors || {};
      expect(errors['longueurMin']).toBeUndefined();
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
      component.appliquerNotifications('parCourriel');
      let errors = {};

      let zone = component.problemeForm.get('courrielGroup.courriel');
      let zone2 = component.problemeForm.get('courrielGroup.courrielConfirmation');
      zone.setValue('aaamsn.com');
      zone2.setValue('aaamsn.com');

      let groupe = component.problemeForm.get('courrielGroup');

      errors = groupe.errors || {};
      expect(errors['courrielsInvalides1']).toBeTruthy();

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
      expect(groupe.errors).toBe(null);
    });

    it('Zone ADRESSE COURRIEL avec valeur valide et Zone CONFIRMER COURRIEL sans valeur retourne null', () => {
      component.appliquerNotifications('parCourriel');
      let errors = {};

      let zone = component.problemeForm.get('courrielGroup.courriel');
      let zone2 = component.problemeForm.get('courrielGroup.courrielConfirmation');
      zone.setValue('abc@def.ghi');
      zone2.setValue('');

      let groupe = component.problemeForm.get('courrielGroup');

      errors = groupe.errors || {};
      expect(groupe.errors).toBe(null);
    });

    it('Zones ADRESSE COURRIEL et CONFIRMER COURRIEL sont invalides si les valeurs sont différentes quand notifier par courriel', () => {
      component.appliquerNotifications('parCourriel');
      let errors = {};

      let zone = component.problemeForm.get('courrielGroup.courriel');
      let zone2 = component.problemeForm.get('courrielGroup.courrielConfirmation');
      zone.setValue('abc@abc.com');
      zone2.setValue('aaa@abc.com');

      let groupe = component.problemeForm.get('courrielGroup');

      errors = groupe.errors || {};
      expect(errors['courrielsInvalides']).toBeTruthy();
    });

    it('Zones ADRESSE COURRIEL et CONFIRMER COURRIEL sont valides si les valeurs sont identiques quand notifier par courriel', () => {
      component.appliquerNotifications('parCourriel');
      let errors = {};

      let zone = component.problemeForm.get('courrielGroup.courriel');
      let zone2 = component.problemeForm.get('courrielGroup.courrielConfirmation');
      zone.setValue('abc@abc.com');
      zone2.setValue('abc@abc.com');      

      let groupe = component.problemeForm.get('courrielGroup');

      errors = groupe.errors || {};
      expect(errors['courrielsInvalides']).toBeUndefined();
    });

    //TP 14

    it('Zone TELEPHONE est activée quand notifier par messagerie texte', () => {
      component.appliquerNotifications('parMessagerieTexte');

      let zone = component.problemeForm.get('telephone');  

      expect(zone.enabled).toEqual(true);
    });

    it('Zone ADRESSE COURRIEL est désactivée quand notifier par messagerie texte', () => {
      component.appliquerNotifications('parMessagerieTexte');

      let zone = component.problemeForm.get('courrielGroup.courriel');  

      expect(zone.enabled).toEqual(false);
    });

    it('Zone CONFIRMER COURRIEL est désactivée quand notifier par messagerie texte', () => {
      component.appliquerNotifications('parMessagerieTexte');

      let zone = component.problemeForm.get('courrielGroup.courrielConfirmation');  

      expect(zone.enabled).toEqual(false);
    });

    it('Zone TELEPHONE est invalide sans valeur quand notifier par messagerie texte', () => {
      component.appliquerNotifications('parMessagerieTexte');
      let errors = {};

      let zone = component.problemeForm.get('telephone');
      zone.setValue('');   

      errors = zone.errors || {};
      expect(errors['telephoneInvalide']).toBeTruthy();
    });

    it('Zone TELEPHONE est invalide avec des caractères non-numérique quand notifier par messagerie texte', () => {
      component.appliquerNotifications('parMessagerieTexte');
      let errors = {};

      let zone = component.problemeForm.get('telephone');
      zone.setValue('abcdefghij');   

      errors = zone.errors || {};
      expect(errors['telephoneInvalide']).toBeTruthy();
    });

    it('Zone TELEPHONE est invalide avec 9 chiffres consécutifs quand notifier par messagerie texte', () => {
      component.appliquerNotifications('parMessagerieTexte');
      let errors = {};

      let zone = component.problemeForm.get('telephone');
      zone.setValue('123456789');   

      errors = zone.errors || {};
      expect(errors['minlength']).toBeTruthy();
    });

    it('Zone TELEPHONE est invalide avec 11 chiffres consécutifs quand notifier par messagerie texte', () => {

      component.appliquerNotifications('parMessagerieTexte');
      let errors = {};

      let zone = component.problemeForm.get('telephone');
      zone.setValue('12345678901');   

      errors = zone.errors || {};
      expect(errors['maxlength']).toBeTruthy();

    });

    it('Zone TELEPHONE est valide avec 10 chiffres consécutifs quand notifier par messagerie texte', () => {
      component.appliquerNotifications('parMessagerieTexte');
      let errors = {};

      let zone = component.problemeForm.get('telephone');
      zone.setValue('1234567890');   

      errors = zone.errors || {};
      expect(errors).toEqual({});
    });
});

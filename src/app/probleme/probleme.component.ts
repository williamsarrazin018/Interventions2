import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { VerifierCaracteresValidator } from '../shared/caracteres-validator';
import { TypeProblemeService } from './typeprobleme.service';
import { ITypeProbleme } from './typeprobleme';
import { VerifierGroupboxValidator } from '../shared/groupbox-validator';
import { NgModule, ErrorHandler } from "@angular/core";
import { emailMatcherValidator } from '../shared/emailMatcher-validator';
import { telephoneValidator } from '../shared/telephone-validator';

@Component({
  selector: 'stk-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {

  problemeForm: FormGroup;
  typesprobleme: ITypeProbleme[];
  errorMessage: string;
  constructor(private fb: FormBuilder, private type: TypeProblemeService) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenom: ['', [VerifierCaracteresValidator.sansEspace(), VerifierCaracteresValidator.longueurMinimum(3), Validators.required]],
      nom: ['', [VerifierCaracteresValidator.sansEspace(), VerifierCaracteresValidator.longueurMinimum(3), Validators.required]],
      typeprobleme: ['', [VerifierGroupboxValidator.selectedType()]],
      notification:['Notifier'],
      telephone: [{value: '', disabled: true}],
      courrielGroup: this.fb.group({
        courriel: [{value: '', disabled: true}],
        courrielConfirmation: [{value: '', disabled: true}],
        }),
      
       
      
    });

    this.type.obtenirTypeProbleme()
    .subscribe(cat => this.typesprobleme = cat,
               error => this.errorMessage = <any>error);  

  }

  appliquerNotifications(typeNotification: string): void {
    const courrielControl = this.problemeForm.get('courrielGroup.courriel');
    const courrielConfirmationControl = this.problemeForm.get('courrielGroup.courrielConfirmation');
    const telephoneControl = this.problemeForm.get('telephone');
    const courrielGroupControl = this .problemeForm.get('courrielGroup');
    //Tout remettre à 0

    telephoneControl.clearValidators();
    telephoneControl.reset();
    telephoneControl.disable();

    courrielControl.clearValidators();
    courrielControl.reset();
    courrielControl.disable();

    courrielConfirmationControl.clearValidators();
    courrielConfirmationControl.reset();
    courrielConfirmationControl.disable();

    if (typeNotification === 'parCourriel') {
        
      courrielControl.enable();
      courrielControl.setValidators([Validators.required]);

      courrielConfirmationControl.enable();
      courrielConfirmationControl.setValidators([Validators.required]);

      courrielGroupControl.setValidators([emailMatcherValidator.courrielDifferents()]);

      
    } else if (typeNotification === 'parMessagerieTexte') {
      telephoneControl.enable();
      telephoneControl.setValidators([Validators.minLength(10), Validators.maxLength(10), telephoneValidator.telephoneValide()]);

    }
    courrielControl.updateValueAndValidity();
    courrielConfirmationControl.updateValueAndValidity();
    telephoneControl.updateValueAndValidity();
    courrielGroupControl.updateValueAndValidity();
  }

}

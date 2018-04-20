import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { VerifierCaracteresValidator } from '../shared/caracteres-validator';
import { TypeProblemeService } from './typeprobleme.service';
import { ITypeProbleme } from './typeprobleme';
import { VerifierGroupboxValidator } from '../shared/groupbox-validator';
import { NgModule, ErrorHandler } from "@angular/core";

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
      typeprobleme: ['', [VerifierGroupboxValidator.selectedType()]]
      
    });

    this.type.obtenirTypeProbleme()
    .subscribe(cat => this.typesprobleme = cat,
               error => this.errorMessage = <any>error);  

  }

}

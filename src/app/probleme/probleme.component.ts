import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { VerifierCaracteresValidator } from '../shared/caracteres-validator';
import { CategorieService } from './categorie.service';
import { ICategorie } from './categorie';

@Component({
  selector: 'stk-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {

  problemeForm: FormGroup;
  typesprobleme: ICategorie[];
  errorMessage: string;
  constructor(private fb: FormBuilder, private type: CategorieService) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenom: ['', [VerifierCaracteresValidator.sansEspace(), VerifierCaracteresValidator.longueurMinimum(3), Validators.required]]
      
    });

    this.type.obtenirCategories()
    .subscribe(cat => this.typesprobleme = cat,
               error => this.errorMessage = <any>error);  

  }

}

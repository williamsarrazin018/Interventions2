import { TestBed, inject } from '@angular/core/testing';

import {  } from './typeprobleme.service';
import { TypeProblemeService } from './typeprobleme.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

describe('CategorieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      
      imports: [HttpClient, HttpClientModule],
      providers: [ TypeProblemeService]
    });
  });


});

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

  

});

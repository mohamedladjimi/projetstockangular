import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditFournisseurComponent } from './add-or-edit-fournisseur.component';

describe('AddOrEditFournisseurComponent', () => {
  let component: AddOrEditFournisseurComponent;
  let fixture: ComponentFixture<AddOrEditFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReclamationFournisseurComponent } from './list-reclamation-fournisseur.component';

describe('ListReclamationFournisseurComponent', () => {
  let component: ListReclamationFournisseurComponent;
  let fixture: ComponentFixture<ListReclamationFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReclamationFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReclamationFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

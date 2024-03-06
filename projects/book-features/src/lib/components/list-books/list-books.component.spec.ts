import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentListBooksComponent } from './component-list-books.component';

describe('ComponentListBooksComponent', () => {
  let component: ComponentListBooksComponent;
  let fixture: ComponentFixture<ComponentListBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentListBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentListBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

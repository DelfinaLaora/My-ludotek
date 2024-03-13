import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListBookComponent } from './page-list-book.component';

describe('PageListBookComponent', () => {
  let component: PageListBookComponent;
  let fixture: ComponentFixture<PageListBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageListBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageListBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

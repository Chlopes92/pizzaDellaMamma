import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsCustomComponent } from './ingredients-custom.component';

describe('IngredientsCustomComponent', () => {
  let component: IngredientsCustomComponent;
  let fixture: ComponentFixture<IngredientsCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientsCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatRecipeComponent } from './meat-recipe.component';

describe('MeatRecipeComponent', () => {
  let component: MeatRecipeComponent;
  let fixture: ComponentFixture<MeatRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeatRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyRecipeComponent } from './dairy-recipe.component';

describe('DairyRecipeComponent', () => {
  let component: DairyRecipeComponent;
  let fixture: ComponentFixture<DairyRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DairyRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DairyRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

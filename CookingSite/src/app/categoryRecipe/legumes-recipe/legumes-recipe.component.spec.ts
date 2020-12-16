import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesRecipeComponent } from './legumes-recipe.component';

describe('LegumesRecipeComponent', () => {
  let component: LegumesRecipeComponent;
  let fixture: ComponentFixture<LegumesRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegumesRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

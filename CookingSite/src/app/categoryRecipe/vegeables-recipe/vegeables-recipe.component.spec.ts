import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegeablesRecipeComponent } from './vegeables-recipe.component';

describe('VegeablesRecipeComponent', () => {
  let component: VegeablesRecipeComponent;
  let fixture: ComponentFixture<VegeablesRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegeablesRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegeablesRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

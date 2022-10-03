import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTargetComponentComponent } from './heroe-target-component.component';

describe('HeroeTargetComponentComponent', () => {
  let component: HeroeTargetComponentComponent;
  let fixture: ComponentFixture<HeroeTargetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeTargetComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeTargetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

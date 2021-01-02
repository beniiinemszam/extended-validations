import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedvalidationsComponent } from './extendedvalidations.component';

describe('ExtendedvalidationsComponent', () => {
  let component: ExtendedvalidationsComponent;
  let fixture: ComponentFixture<ExtendedvalidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedvalidationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedvalidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

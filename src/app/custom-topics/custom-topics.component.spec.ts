import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTopicsComponent } from './custom-topics.component';

describe('CustomTopicsComponent', () => {
  let component: CustomTopicsComponent;
  let fixture: ComponentFixture<CustomTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

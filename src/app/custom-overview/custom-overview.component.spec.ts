import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOverviewComponent } from './custom-overview.component';

describe('CustomOverviewComponent', () => {
  let component: CustomOverviewComponent;
  let fixture: ComponentFixture<CustomOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

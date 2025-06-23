import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybersecruityComponent } from './cybersecruity.component';

describe('CybersecruityComponent', () => {
  let component: CybersecruityComponent;
  let fixture: ComponentFixture<CybersecruityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CybersecruityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CybersecruityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

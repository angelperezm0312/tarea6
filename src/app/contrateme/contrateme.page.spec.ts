import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContratemePage } from './contrateme.page';

describe('ContratemePage', () => {
  let component: ContratemePage;
  let fixture: ComponentFixture<ContratemePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContratemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

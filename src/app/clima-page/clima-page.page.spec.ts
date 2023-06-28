import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClimaPagePage } from './clima-page.page';

describe('ClimaPagePage', () => {
  let component: ClimaPagePage;
  let fixture: ComponentFixture<ClimaPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClimaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

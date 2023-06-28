import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneroPagePage } from './genero-page.page';

describe('GeneroPagePage', () => {
  let component: GeneroPagePage;
  let fixture: ComponentFixture<GeneroPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GeneroPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

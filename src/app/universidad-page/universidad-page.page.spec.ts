import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniversidadPagePage } from './universidad-page.page';

describe('UniversidadPagePage', () => {
  let component: UniversidadPagePage;
  let fixture: ComponentFixture<UniversidadPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UniversidadPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FutureNewPagePage } from './future-new-page.page';

describe('FutureNewPagePage', () => {
  let component: FutureNewPagePage;
  let fixture: ComponentFixture<FutureNewPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FutureNewPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdadPagePage } from './edad-page.page';

describe('EdadPagePage', () => {
  let component: EdadPagePage;
  let fixture: ComponentFixture<EdadPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EdadPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

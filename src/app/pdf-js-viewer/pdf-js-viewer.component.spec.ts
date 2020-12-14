import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfJsViewerComponent } from './pdf-js-viewer.component';

describe('PdfJsViewerComponent', () => {
  let component: PdfJsViewerComponent;
  let fixture: ComponentFixture<PdfJsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfJsViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfJsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

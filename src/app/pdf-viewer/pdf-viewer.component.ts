import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Rectangle } from '../draw.util';
import { DrawUtil } from './../draw.util';


@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
/**
 * Zeigt eine PDF-Datei im embeded-tag an und zeichnet Rechtecke ein.
 */
export class PdfViewerComponent implements OnInit {

  @Input() pdfSrc: string;
  @Input() rectangles: Array<Rectangle>;
  @Input() width: number;
  @Input() height: number;
  @Input() imageContainerClass: string;
  @ViewChild('pdfCanvas')
  canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('embed')
  embedElement: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    setTimeout(() => {
      // ValueBinding am embed-tag funktioniert nicht, daher dieser Workaround.
      this.renderer.setAttribute(this.embedElement.nativeElement, 'src', this.pdfSrc);
    }, 100);
  }

  onPdfLoad(): void {
    if (this.canvas) {
      const ctx: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');
      this.rectangles.forEach(rect => {
        DrawUtil.drawRectangle(ctx, rect, this.width, this.height);
      });
    }
  }

}

import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { getDocument, PDFPageViewport, PDFRenderParams, PDFRenderTask } from 'pdfjs-dist';
import { DrawUtil, Rectangle } from './../draw.util';


@Component({
  selector: 'app-pdf-js-viewer',
  templateUrl: './pdf-js-viewer.component.html',
  styleUrls: ['./pdf-js-viewer.component.scss']
})
export class PdfJsViewerComponent implements OnInit {

  @Input() pdfSrc: string;
  @Input() rectangles: Array<Rectangle>;
  @Input() width: number;
  @Input() height: number;
  @Input() imageContainerClass: string;
  @ViewChild('pdfCanvas')
  canvas: ElementRef<HTMLCanvasElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    getDocument(this.pdfSrc).promise.then(pdf => {
      pdf.getPage(2).then(page => { // Zweite Seite!

        // Skalierung auf Wunschbreite
        const desiredWidth: number = this.width;
        const viewport: PDFPageViewport = page.getViewport({ scale: 1, });
        const scale: number = desiredWidth / viewport.width;
        const scaledViewport: PDFPageViewport = page.getViewport({ scale: scale });

        // Canvas-Dimensionen setzen
        const canvas: HTMLCanvasElement = this.canvas.nativeElement;
        const context: CanvasRenderingContext2D = canvas.getContext('2d');
        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;

        // PDF-Seite in Canvas einzeichen
        const renderContext: PDFRenderParams = {
          canvasContext: context,
          viewport: scaledViewport
        };
        const renderTask: PDFRenderTask = page.render(renderContext);
        renderTask.promise.then(() => {
          // Rechtecke einzeichnen
          this.onPdfDrawn(context, canvas.width, canvas.height);
        });
      });
    });
  }

  onPdfDrawn(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    this.rectangles.forEach(rect => {
      DrawUtil.drawRectangle(ctx, rect, width, height);
    });
  }

}

import { Component } from '@angular/core';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import { CanvasRectangle, DrawUtil, Rectangle } from './draw.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'pdf-draw';
  imageSource: string = 'https://image.film.at/images/cfs_landscape_1864w_1049h/4762971/star-wars_baby-yoda_mandalorian_01.jpg';
  imageWidth: number = 800;
  imageHeight: number = 450;
  pdfSource: string = 'assets/ignobel_prizes_teatalk.pdf';
  rectangles: Array<Rectangle> = [
    {
      lowerLeft: [0.1, 0.1],
      upperRight: [0.2, 0.2]
    },
    {
      lowerLeft: [0.3, 0.3],
      upperRight: [0.5, 0.5]
    },
    {
      lowerLeft: [0.6, 0.6],
      upperRight: [0.9, 0.9]
    },
  ];

  constructor() {
    // Notwendig, um pdf.js unter Angular zum Laufen zu bringen
    const pdfWorkerSrc: string = 'pdf.worker.min.js'; // siehe angular.json (assets)
    GlobalWorkerOptions.workerSrc = pdfWorkerSrc;
  }

  getConvertedRect(rect: Rectangle): string {
    const canvasRect: CanvasRectangle = DrawUtil.apiRecToCanvasRec(rect, this.imageWidth, this.imageHeight);
    return `[x: ${canvasRect.x}, ${canvasRect.y}], Breite: ${canvasRect.width}, Höhe: ${canvasRect.height}`;
  }
}

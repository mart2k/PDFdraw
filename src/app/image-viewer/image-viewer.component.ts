import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DrawUtil, Rectangle } from '../draw.util';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  @Input() imageSrc: string;
  @Input() rectangles: Array<Rectangle>;
  @Input() width: number;
  @Input() height: number;
  @Input() imageContainerClass: string;
  @ViewChild('imageCanvas')
  canvas: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit(): void {
  }

  onImageLoad(): void {
    const ctx: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');
    this.rectangles.forEach(rect => {
      DrawUtil.drawRectangle(ctx, rect, this.width, this.height);
    });
  }

  clearCanvas(): void {
    DrawUtil.clearCanvas(this.canvas.nativeElement.getContext('2d'), this.width, this.height);
  }
}


export interface Rectangle {
    lowerLeft: Array<number>;
    upperRight: Array<number>;
}

export interface CanvasRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}

export class DrawUtil {

    static drawCanvasRectangle(ctx: CanvasRenderingContext2D, rect: CanvasRectangle, style: string = '#FF0000'): void {
        ctx.strokeStyle = style;
        ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
    }

    static drawRectangle(
        ctx: CanvasRenderingContext2D,
        rect: Rectangle,
        imageWidth: number,
        imageHeight: number,
        style: string = '#FF0000'): void {
        this.drawCanvasRectangle(ctx, this.apiRecToCanvasRec(rect, imageWidth, imageHeight));
    }

    static apiRecToCanvasRec(apiRec: Rectangle, imageWidth: number, imageHeight: number): CanvasRectangle {
        const x: number = Math.round(apiRec.lowerLeft[0] * imageWidth);
        const y: number = Math.round((1 - apiRec.upperRight[1]) * imageHeight);
        const width: number = Math.round((apiRec.upperRight[0] - apiRec.lowerLeft[0]) * imageWidth);
        const height: number = Math.round((apiRec.upperRight[1] - apiRec.lowerLeft[1]) * imageHeight);
        // tslint:disable-next-line: object-literal-shorthand
        return { x: x, y: y, width: width, height: height };
    }

    static clearCanvas(ctx: CanvasRenderingContext2D, width: number, height: number): void {
        ctx.clearRect(0, 0, width, height);
    }

}

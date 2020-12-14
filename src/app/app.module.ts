import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { PdfJsViewerComponent } from './pdf-js-viewer/pdf-js-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent,
    ImageViewerComponent,
    PdfJsViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

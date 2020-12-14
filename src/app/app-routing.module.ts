import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

const routes: Routes = [
  { path: 'pdf', component: PdfViewerComponent },
  { path: 'image', component: ImageViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

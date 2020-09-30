import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShapeInputComponent} from './components/shape-input/shape-input.component';
import {SvgCanvasComponent} from './components/svg-canvas/svg-canvas.component';
import {MatSliderModule} from '@angular/material/slider';
import {ColorPickerModule} from 'ngx-color-picker';
import { LoggerComponent } from './components/logger/logger.component';

@NgModule({
  declarations: [
    AppComponent,
    ShapeInputComponent,
    SvgCanvasComponent,
    LoggerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

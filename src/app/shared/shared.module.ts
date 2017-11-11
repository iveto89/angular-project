import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  imports: [
    CommonModule,
      BrowserAnimationsModule,
      ButtonsModule,
      GridModule
  ],
  exports: [
      BrowserAnimationsModule,
      ButtonsModule,
      GridModule
  ],
  declarations: []
})
export class SharedModule { }

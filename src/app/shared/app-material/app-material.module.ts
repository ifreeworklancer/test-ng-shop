import {NgModule} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [MatButtonModule, MatIconModule, MatBadgeModule]
})
export class AppMaterialModule {
}

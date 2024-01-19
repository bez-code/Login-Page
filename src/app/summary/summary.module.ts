import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SummaryComponent } from './summary.component';

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SummaryComponent }
    ])
  ]
})
export class SummaryModule { }

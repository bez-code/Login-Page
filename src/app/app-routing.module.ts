import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormModule } from './form/form.module';
import { SummaryModule } from './summary/summary.module';

const routes: Routes = [
  { path: 'form', loadChildren: () => FormModule },
  { path: 'summary', loadChildren: () => SummaryModule },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
